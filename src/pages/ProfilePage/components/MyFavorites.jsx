import React from "react";
import Button from "../../../components/Button";
import { IMAGE_NOTFOUND_PATH, PATHS } from "../../../constants/paths";
import { ENV } from "../../../constants/environments";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format";
import styled from "styled-components";
import { breakpoints } from "../../../constants/media";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoritesMovies,
  removeFavoritesMovies,
} from "../../../store/reducer/favoritesReducer";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";

const StyledInfoRow = styled.div`
  .info__row-title {
    margin-bottom: 10px;
    h3 {
      color: var(--black-cl);
    }
  }
  .info__row-list {
    .movieitem {
      padding: 20px 0;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    .movieitem {
      padding: 20px 0;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const StyledMovieItemHorizontal = styled.div`
  display: flex;
  align-items: stretch;
  overflow: hidden;
  .movieitem__img {
    flex-shrink: 0;
    position: relative;
    margin-right: 10px;
    &-thumb {
      max-height: 234px;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 2/ 3;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        object-fit: cover;
        object-position: center;
        transition: var(--transition-duration);
      }
    }
    &-rating {
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      height: 35px;
      width: 35px;
      padding: 10px;
      display: flex;
      background-color: var(--white-cl);
      border-radius: 100%;
      border: 3px solid var(--black-cl-3);
      color: var(--black-cl);
      font-family: var(--ff-medium);
      font-size: var(--fs-tag-md);
    }
  }
  .movieitem__content {
    &-info {
      color: var(--black-cl);
      .title {
        color: var(--black-cl);
      }
    }
    &-btngroup {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    .movieitem__img {
      margin-bottom: 10px;
    }
  }
`;

const MyFavorites = () => {
  const dispatch = useDispatch();
  const { favorites, loading } = useSelector((state) => state.favorites);
  const _onRemoveFromFavoriteList = (e, movieId) => {
    e.preventDefault();
    dispatch(removeFavoritesMovies({ movieId: movieId }));
  };
  return (
    <StyledInfoRow className="info__row">
      <div className="info__row-title">
        <h3 className="--h3">My Favorites</h3>
      </div>
      <div className="info__row-list" style={{ position: "relative" }}>
        {loading && <ComponentLoading $bgTransparent />}
        {!loading &&
          favorites?.length > 0 &&
          favorites?.map((item, index) => {
            const {
              poster_path: image,
              title,
              overview,
              release_date: releaseDate,
              vote_average: voteAverage,
              id,
            } = item;
            const imgPath = image
              ? ENV.IMAGE_URL + image || ""
              : IMAGE_NOTFOUND_PATH.poster;
            const rating = Number(voteAverage).toFixed(1);
            const moviePath = PATHS.MOVIE.INDEX + "/" + id;
            const formatReleaseDate = formatDate(releaseDate || 0);
            return (
              <StyledMovieItemHorizontal
                key={id || index}
                to={moviePath}
                className="movieitem"
              >
                <Link to={moviePath} className="movieitem__img">
                  <div className="movieitem__img-thumb">
                    <img src={imgPath} alt="thumb" />
                  </div>
                  <div className="movieitem__img-rating">{rating}</div>
                </Link>
                <div className="movieitem__content">
                  <div className="movieitem__content-info">
                    <h5 className="--h5 title">{title}</h5>
                    <p className="paragraph">{overview}</p>
                    <p className="date">
                      Release Date: {formatReleaseDate || ""}
                    </p>
                  </div>
                  <div className="movieitem__content-btngroup">
                    <Button
                      to={PATHS.MOVIE.PLAY.INDEX + `/${id}`}
                      className="btn btnmain btnplaynow"
                    >
                      <div className="textbox__button-icon icon">
                        <img srcSet="/assets/images/start-btn-icon.png 2x" />
                      </div>
                      <span className="textbox__button-text">Play Now</span>
                    </Button>
                    <Button
                      variant="second"
                      className="btn btnsecond btnremove"
                      onClick={(e) => _onRemoveFromFavoriteList(e, id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </StyledMovieItemHorizontal>
            );
          })}
        {!loading && favorites?.length < 1 && (
          <Empty description="No favorites movie added yet" />
        )}
      </div>
    </StyledInfoRow>
  );
};

export default MyFavorites;
