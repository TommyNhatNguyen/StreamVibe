import classNames from "classnames";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_NOTFOUND_PATH, PATHS } from "../../constants/paths";
import { ENV } from "../../constants/environments";
import { breakpoints } from "../../constants/media";
import { formatDate, formatViews } from "../../utils/format";

const StyledMovieItem = styled.li`
  height: 500px;
  aspect-ratio: 359.5 / 500;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--black-cl-2);
  border: 1px solid var(--black-cl-3);
  cursor: pointer;
  transition: var(--transition-duration);
  /* min-height: 100%; */
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 404px;
    aspect-ratio: 284.75 / 404;
    padding: 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 303px;
    aspect-ratio: 231 / 303;
    padding: 12px;
  }
`;

const StyledMovieItemSmall = styled(StyledMovieItem)`
  height: 377px;
  aspect-ratio: 283.6 / 377;
  @media (max-width: ${breakpoints.desktop}) {
    height: 308px;
    aspect-ratio: 224 / 308;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 259px;
    aspect-ratio: 181.6 / 259;
  }
`;

const StyledMovieItemLink = styled(Link)`
  display: flex;
  align-items: stretch;
  transition: var(--transition-duration);
  border-radius: 12px;
  overflow: hidden;
  .moviesgroup__item-img {
    flex-shrink: 0;
    border-radius: initial;
    margin-bottom: initial !important;
  }
  .moviesgroup__item-content {
    background-color: var(--black-cl);
    width: 100%;
    padding: 16px;
    .info {
      display: initial;
      background-color: initial;
      border: initial;
      padding: initial;
      &__title {
        display: -webkit-inline-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &__para {
        display: -webkit-inline-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  &:hover {
    transform: scale(0.98, 0.98);
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.36);
  }
`;

const StyledMovieItemImageWrapper = styled(Link)`
  display: flex;
  height: 404px;
  aspect-ratio: 319.25 / 404;
  border-radius: 12px;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 324px;
    aspect-ratio: 252.75 / 324px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 235px;
    aspect-ratio: 207 / 235;
  }
`;

const StyleMovieItemImageWrapperSmall = styled(StyledMovieItemImageWrapper)`
  height: 281px;
  aspect-ratio: 243.6 / 281;
  @media (max-width: ${breakpoints.desktop}) {
    height: 232px;
    aspect-ratio: 192 / 232;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 195px;
    aspect-ratio: 157.6 / 195;
  }
`;

const StyledMovieItemContentWrapper = styled.div`
  &.--rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    height: 36px;
    margin-top: 20px;
  }
  &.--trending {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    height: 36px;
    margin-top: 20px;
  }
  .info {
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
    padding: 6px 10px 6px 6px;
    background-color: var(--black-cl);
    border: 1px solid var(--black-cl-3);
    border-radius: 51px;
    gap: 2px;
    &.--center {
      justify-content: center;
      width: 100%;
    }
    &__content {
      margin-top: 3px;
      font-family: var(--ff-medium);
      font-size: var(--fs-tag-md);
      text-wrap: nowrap;
      &.--center {
        text-align: center;
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    &.--rating {
      height: 32px;
    }
    &.--trending {
      height: 28px;
    }
  }
`;

const MovieItem = (
  { image, voteAverage, voteCount, id, title, ...props },
  ref
) => {
  const NUM_BASE = 5;
  const formatedVoteCount = formatViews(voteCount, 1);
  const modifiedVoteAverage = Math.floor((NUM_BASE * voteAverage + 1) / 10);
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <StyledMovieItem
      className={classNames("moviesgroup__item", props?.classes)}
      ref={ref}
      {...props}
    >
      <StyledMovieItemImageWrapper
        className="moviesgroup__item-img"
        to={moviePath}
      >
        <img src={imgPath} />
      </StyledMovieItemImageWrapper>
      {title && <h5 className="--h5 moviesgroup__item-title">{title}</h5>}
      <StyledMovieItemContentWrapper className="moviesgroup__item-content --rating">
        <div className="info">
          <div className="info__icon">
            <img srcSet="/assets/images/time-icon.png 2x" alt="icon" />
          </div>
          <span className="info__content">1h 30min</span>
        </div>
        <div className="rating">
          <div className="rating__val">
            {Array(5)
              .fill("")
              .map((item, index) => {
                return (
                  <i
                    key={item || index}
                    className={classNames("bi bi-star-fill", {
                      active: index + 1 <= modifiedVoteAverage,
                    })}
                  ></i>
                );
              })}
          </div>
          <span className="rating__content">{formatedVoteCount || 0}</span>
        </div>
      </StyledMovieItemContentWrapper>
    </StyledMovieItem>
  );
};

export const MovieItemSmall = ({
  image,
  popularity,
  id,
  releaseDate,
  duration,
  ...props
}) => {
  const formatPopularity = formatViews(popularity, 1);
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  const formatReleaseDate = formatDate(releaseDate || 0);
  return (
    <StyledMovieItemSmall
      className={classNames("moviesgroup__item", props?.classes)}
      {...props}
    >
      <StyleMovieItemImageWrapperSmall
        className="moviesgroup__item-img"
        to={moviePath}
      >
        <img src={imgPath || ""} />
      </StyleMovieItemImageWrapperSmall>
      <StyledMovieItemContentWrapper className="categroup__item-content --trending">
        {duration && (
          <div className="info">
            <div className="info__icon">
              <img srcSet="/assets/images/time-icon.png 2x" alt="icon" />
            </div>
            <span className="info__content">1h 30min</span>
          </div>
        )}
        {popularity && (
          <div className="info">
            <div className="info__icon">
              <img srcSet="/assets/images/view-icon.png 2x" alt="icon" />
            </div>
            <span className="info__content">{formatPopularity || ""}</span>
          </div>
        )}
        {releaseDate && (
          <div className="info --center">
            <span className="info__content --center">
              Released at <span>{formatReleaseDate || ""}</span>
            </span>
          </div>
        )}
      </StyledMovieItemContentWrapper>
    </StyledMovieItemSmall>
  );
};

export const MovieItemSearch = ({
  id,
  image,
  releaseDate,
  title,
  overview,
  ...props
}) => {
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <StyledMovieItemLink
      to={moviePath}
      className={classNames("moviesgroup__item --horizontal", props?.classes)}
      {...props}
    >
      <StyleMovieItemImageWrapperSmall
        className="moviesgroup__item-img"
        to={moviePath}
      >
        <img src={imgPath} />
      </StyleMovieItemImageWrapperSmall>
      <StyledMovieItemContentWrapper className="moviesgroup__item-content">
        <div className="info">
          <h5 className="--h5 info__title">{title || ""}</h5>
          <p className="info__para">{overview || ""}</p>
          <p className="info__date">{releaseDate || ""}</p>
        </div>
      </StyledMovieItemContentWrapper>
    </StyledMovieItemLink>
  );
};

export default forwardRef(MovieItem);
