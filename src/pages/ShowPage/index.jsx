import React, { useState } from "react";
import { discoverService } from "../../services/discoverService";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import ComponentLoading from "../../components/ComponentLoading";
import MovieItem from "../../components/MovieItem";
import Button from "../../components/Button";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";
import { useMovieContext } from "../../context/MovieContext";
import { Checkbox, DatePicker, Empty, Select } from "antd";
import { useParams } from "react-router-dom";
import { AntdWrapper } from "../../components/StyledComponents/AntdWrapper";
import { SORTING_BY } from "../../constants/general";

const StyledShowAllWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) 6fr;
  gap: 10px;
  .showall-left {
    .showall__filter {
      position: sticky;
      top: 20px;
      height: fit-content;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid var(--black-cl-3);
      background-color: var(--black-cl);
      box-shadow: 2px 2px 3px var(--black-cl-3);
      z-index: 10;
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
    .showall__trending {
      height: fit-content;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid var(--black-cl-3);
      margin: 20px auto 0 auto;
      width: 100%;
      max-width: min-content;
      &-title {
        margin-bottom: 10px;
        text-align: center;
      }
      &-list {
        margin: auto;
        max-width: fit-content;
      }
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: initial;
    grid-template-rows: max-content 1fr;
    .showall-left {
      .showall__filter {
        position: initial;
        &-group {
          .checkboxgroup {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            grid-template-columns: initial;
          }
        }
      }
      .showall__trending {
        display: none;
      }
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

const StyledMovieItem = styled(MovieItem)`
  .moviesgroup__item-content {
    display: none;
  }
  .moviesgroup__item-title {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-family: var(--ff-semibold);
    font-size: var(--fs-h5);
    display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &:hover {
    transform: scale(0.95);
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledMovieItemLeft = styled(StyledMovieItem)`
  list-style-type: none;
  position: relative;
  .moviesgroup__item-content {
    display: flex;
    margin-top: 10px;
  }
`;

const ShowPage = () => {
  const { movieGenres, moviesTrending } = useMovieContext();
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
          <div className="showall-left">
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
            <div className="showall__trending">
              <h5 className="--h5 showall__trending-title">Trending now </h5>
              <div className="showall__trending-list">
                {moviesTrending?.map((movie, index) => {
                  const {
                    id,
                    vote_average: voteAverage,
                    vote_count: voteCount,
                    poster_path: image,
                    title,
                  } = movie || {};
                  return (
                    <StyledMovieItemLeft
                      key={id + index + image}
                      voteAverage={voteAverage}
                      voteCount={voteCount}
                      image={image}
                      title={title}
                      id={id}
                    />
                  );
                })}
              </div>
            </div>
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
                    title,
                  } = movie || {};
                  if (data?.length === index + 1) {
                    return (
                      <StyledMovieItem
                        key={id + index + image}
                        voteAverage={voteAverage}
                        voteCount={voteCount}
                        image={image}
                        title={title}
                        id={id}
                        ref={ref}
                      />
                    );
                  } else {
                    return (
                      <StyledMovieItem
                        key={id + index + image}
                        voteAverage={voteAverage}
                        voteCount={voteCount}
                        image={image}
                        title={title}
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
