import React from "react";
import { ENV } from "../../constants/environments";
import { formatDate, formatViews } from "../../utils/format";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { IMAGE_NOTFOUND_PATH, PATHS } from "../../constants/paths";
import { Empty, Skeleton } from "antd";

const CategoryGroup = ({ children, classes, ...props }) => {
  return (
    <div className={`explore__categroup categroup ${classes || ""}`} {...props}>
      {children}
    </div>
  );
};

CategoryGroup.Item = ({ images, name, id }) => {
  return (
    <li className="categroup__item">
      <div className="categroup__item-img">
        {images?.map((image, index) => {
          const imgPath = image
            ? ENV.IMAGE_URL + image || ""
            : IMAGE_NOTFOUND_PATH.poster;
          const moviePath = PATHS.MOVIE.INDEX + "/" + id;
          return (
            <Link to={moviePath} key={image || index}>
              <img src={imgPath} />
            </Link>
          );
        })}
      </div>
      <div className="categroup__item-content">
        <span>{name || ""}</span>
        <a className="btncontrol --arrow-right">
          <img srcSet="./assets/images/arrow-left-icon.png 2x" />
        </a>
      </div>
    </li>
  );
};

CategoryGroup.ItemSearch = ({ id, image, releaseDate, title, overview }) => {
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <Link to={moviePath} className="categroup__item --search --horizontal">
      <div href="#" className="categroup__item-img --single --no-filter">
        <Link to={moviePath}>
          <img src={imgPath || ""} />
        </Link>
      </div>
      <div className="categroup__item-content">
        <div className="info">
          <h5 className="--h5 info__title">{title || ""}</h5>
          <p className="info__para">{overview || ""}</p>
          <p className="info__date">{releaseDate || ""}</p>
        </div>
      </div>
    </Link>
  );
};

CategoryGroup.ItemMustWatch = ({ image, voteAverage, voteCount, id }) => {
  const NUM_BASE = 5;
  const formatedVoteCount = formatViews(voteCount, 1);
  const modifiedVoteAverage = Math.floor((NUM_BASE * voteAverage + 1) / 10);
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <li className="categroup__item --mustwatch">
      <div className="categroup__item-img --single --no-filter">
        <Link to={moviePath}>
          <img src={imgPath} />
        </Link>
      </div>
      <div className="categroup__item-content">
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
      </div>
    </li>
  );
};

CategoryGroup.ItemTrending = ({ image, popularity, id }) => {
  const formatPopularity = formatViews(popularity, 1);
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <li className="categroup__item --trending">
      <div className="categroup__item-img --single --no-filter">
        <Link to={moviePath}>
          <img src={imgPath || ""} />
        </Link>
      </div>
      <div className="categroup__item-content">
        <div className="info">
          <div className="info__icon">
            <img srcSet="/assets/images/time-icon.png 2x" alt="icon" />
          </div>
          <span className="info__content">1h 30min</span>
        </div>
        <div className="info">
          <div className="info__icon">
            <img srcSet="/assets/images/view-icon.png 2x" alt="icon" />
          </div>
          <span className="info__content">{formatPopularity || ""}</span>
        </div>
      </div>
    </li>
  );
};

CategoryGroup.ItemNewRelease = ({ image, releaseDate, id }) => {
  const imgPath = image
    ? ENV.IMAGE_URL + image || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  return (
    <li className="categroup__item --trending">
      <div className="categroup__item-img --single --no-filter">
        <Link to={moviePath}>
          <img src={imgPath || ""} />
        </Link>
      </div>
      <div className="categroup__item-content --center">
        <div className="info">
          <span className="info__content --center">
            Released at <span>{releaseDate || ""}</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CategoryGroup;
