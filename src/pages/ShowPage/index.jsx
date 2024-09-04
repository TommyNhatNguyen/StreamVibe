import React, { useCallback, useEffect, useRef, useState } from "react";
import useQuery from "../../hooks/useQuery";
import { discoverService } from "../../services/discoverService";
import useMutation from "../../hooks/useMutation";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Textbox from "../../components/Textbox";
import ComponentLoading from "../../components/ComponentLoading";
import { StyledMovieGroupWrapper } from "../../components/StyledComponents/StyledMovieGroupWrapper";
import MovieItem from "../../components/MovieItem";
import Button from "../../components/Button";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";
import { useMovieContext } from "../../context/MovieContext";
import { Checkbox, DatePicker, Empty, Select } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { AntdWrapper } from "../../components/StyledComponents/AntdWrapper";

const StyledShowAllWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) 5fr;
  gap: 10px;
  .showall__filter {
    height: fit-content;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--black-cl-3);
    position: sticky;
    top: 20px;
    &-group {
      .label {
        margin-bottom: 10px;
      }
      .checkboxgroup {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .ant-checkbox-wrapper {
          align-items: center;
          .ant-checkbox {
            .ant-checkbox-inner {
              background-color: var(--black-cl-3);
              border: 1px solid var(--white-cl);
            }
          }
          span {
            color: var(--gray-cl);
            font-family: var(--ff-regular);
            text-wrap: nowrap;
          }
        }
      }
      .ant-picker {
        background-color: var(--black-cl-3);
        border: 1px solid var(--white-cl);
        .ant-picker-input {
          input {
            color: var(--gray-cl);
            font-family: var(--ff-regular);
            &::placeholder {
              color: var(--gray-cl);
              font-family: var(--ff-regular);
            }
          }
          .ant-picker-clear,
          .ant-picker-suffix {
            svg {
              fill: var(--white-cl);
            }
          }
        }
      }
      &.--year {
        margin-top: 20px;
        display: flex;
        align-items: center;
        .label {
          margin-bottom: initial;
          margin-right: 10px;
        }
      }
    }
    .btnclearall {
      margin-top: 10px;
      border: 1px solid var(--white-cl);
      font-size: 14px;
      height: 32px;
    }
  }
`;

const StyledShowAllSort = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-bottom: 10px;
  .ant-select {
    width: max-content;
    &:hover {
      .ant-select-selector {
        border-color: initial !important;
      }
    }
    .ant-select-selector {
      background-color: var(--black-cl-3);
      border: 1px solid var(--white-cl);
      color: var(--gray-cl);
    }
    .ant-select-arrow,
    .ant-select-clear {
      svg {
        fill: var(--white-cl);
      }
    }
  }
`;

const StyledShowAllListWrapper = styled.div`
  .showall__list-moviesgroup {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(359px, 1fr));
    overflow: hidden;
    justify-items: center;
  }
  @media (max-width: ${breakpoints.desktop}) {
    .showall__list-moviesgroup {
      grid-template-columns: repeat(auto-fill, minmax(284.75px, 1fr));
      gap: 10px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    .showall__list-moviesgroup {
      grid-template-columns: repeat(auto-fill, minmax(231px, 1fr));
      gap: 5px;
    }
  }
`;

const SORTING_BY = [
  {
    id: "none",
    value: "",
    label: "----",
  },
  {
    id: "popularity_asc",
    value: "popularity.asc",
    label: "Popularity (Low to High)",
  },
  {
    id: "popularity_desc",
    value: "popularity.desc",
    label: "Popularity (High to Low)",
  },
  { id: "revenue_asc", value: "revenue.asc", label: "Revenue (Low to High)" },
  { id: "revenue_desc", value: "revenue.desc", label: "Revenue (High to Low)" },
  {
    id: "primary_release_date_asc",
    value: "primary_release_date.asc",
    label: "Date (Old to New)",
  },
  {
    id: "primary_release_date_desc",
    value: "primary_release_date.desc",
    label: "Date (New to Old)",
  },
  { id: "title_asc", value: "title.asc", label: "Title (A - Z)" },
  { id: "title_desc", value: "title.desc", label: "Title (Z - A)" },
];

const ShowPage = () => {
  const { movieGenres } = useMovieContext();
  const { showId } = useParams();
  const [query, setQuery] = useState({
    include_adult: "true",
    include_video: "true",
    language: "en-US",
    with_genres: [Number(showId)],
    primary_release_year: "",
    sort_by: "",
  });
  const { data, ref, loading, hasMore, resetData } = useInfiniteScroll(
    (query, pageNumber) =>
      discoverService.discoverMovie("", { ...query, page: pageNumber }),
    [query],
    query
  );
  const _onSort = (data) => {
    if (data) {
      resetData();
      setQuery((prev) => {
        return {
          ...prev,
          sort_by: data,
        };
      });
    } else {
      resetData();
      setQuery((prev) => {
        return {
          ...prev,
          sort_by: "",
        };
      });
    }
  };
  const _onFilterGenres = (genresId) => {
    if (query?.with_genres?.includes(genresId)) {
      resetData();
      setQuery((prev) => {
        const { with_genres } = prev;
        return {
          ...prev,
          with_genres: with_genres.filter((item) => item !== genresId),
        };
      });
    } else {
      resetData();
      setQuery((prev) => {
        const { with_genres } = prev;
        return { ...prev, with_genres: [...with_genres, genresId] };
      });
    }
  };
  const _onChangeYear = (data) => {
    if (data) {
      resetData();
      setQuery((prev) => {
        return {
          ...prev,
          primary_release_year: data.year(),
        };
      });
    } else {
      resetData();
      setQuery((prev) => {
        return {
          ...prev,
          primary_release_year: "",
        };
      });
    }
  };
  const _onReset = () => {
    resetData();
    setQuery({
      include_adult: "true",
      include_video: "true",
      language: "en-US",
      with_genres: "",
      primary_release_year: "",
      sort_by: "",
    });
  };
  return (
    <section className="showall --pd-t">
      <div className="container">
        <StyledShowAllSort className="showall-sort">
          <span className="label">Sort by: </span>
          <Select
            style={{ width: 200 }}
            removeIcon={true}
            showSearch
            placeholder="Sort by:"
            options={SORTING_BY}
            onChange={_onSort}
            defaultValue={SORTING_BY[0]}
          />
        </StyledShowAllSort>
        <StyledShowAllWrapper className="showall-wrapper">
          <div className="showall__filter">
            <div className="showall__filter-group">
              <p className="label">Filter by Genre: </p>
              <div className="checkboxgroup">
                {movieGenres?.map((item, index) => {
                  const { id, name } = item || {};
                  return (
                    <Checkbox
                      key={id || index}
                      value={id}
                      onChange={() => _onFilterGenres(id)}
                      checked={query?.with_genres?.includes(id)}
                    >
                      {name || ""}
                    </Checkbox>
                  );
                })}
              </div>
            </div>
            <div className="showall__filter-group --year">
              <p className="label">Filter by Year: </p>
              <DatePicker onChange={_onChangeYear} picker="year" />
            </div>
            <Button
              onClick={_onReset}
              variant="control"
              className="btn btncontrol btnclearall"
            >
              Clear All
            </Button>
          </div>
          <StyledShowAllListWrapper className="showall__list">
            {data?.length > 0 && hasMore && (
              <ul className="showall__list-moviesgroup moviesgroup">
                {data?.map((movie, index) => {
                  const {
                    id,
                    vote_average: voteAverage,
                    vote_count: voteCount,
                    poster_path: image,
                  } = movie || {};
                  if (data?.length === index + 1) {
                    return (
                      <MovieItem
                        key={id + index + image}
                        voteAverage={voteAverage}
                        voteCount={voteCount}
                        image={image}
                        id={id}
                        ref={ref}
                      />
                    );
                  } else {
                    return (
                      <MovieItem
                        key={id + index + image}
                        voteAverage={voteAverage}
                        voteCount={voteCount}
                        image={image}
                        id={id}
                      />
                    );
                  }
                })}
              </ul>
            )}
            {loading && (
              <ComponentLoading
                style={{
                  position: "relative",
                  height: "200px",
                }}
              />
            )}
            {!loading && !hasMore && data?.length < 1 && (
              <AntdWrapper>
                <Empty
                  description="Movies not found"
                  style={{ color: "white" }}
                />
              </AntdWrapper>
            )}
          </StyledShowAllListWrapper>
        </StyledShowAllWrapper>
      </div>
    </section>
  );
};
export default ShowPage;
