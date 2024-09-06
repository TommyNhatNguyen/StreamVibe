import React from "react";
import Button from "../../../components/Button";
import { IMAGE_NOTFOUND_PATH, PATHS } from "../../../constants/paths";
import { ENV } from "../../../constants/environments";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { StyledInfoRow } from "./StyledInfoRow";
import { StyledMovieItemHorizontal } from "./StyledMovieItemHorizontal";
import { removeWatchList } from "../../../store/reducer/watchlistReducer";

const MyWatchList = () => {
  const dispatch = useDispatch();
  const { watchlist, loading } = useSelector((state) => state.watchlist);
  const _onRemoveFromWatchList = (e, movieId) => {
    e.preventDefault();
    dispatch(removeWatchList({ movieId: movieId }));
  };
  return (
    <StyledInfoRow className="info__row">
      <div className="info__row-title">
        <h3 className="--h3">My Watchlist</h3>
      </div>
      <div className="info__row-list" style={{ position: "relative" }}>
        {loading && <ComponentLoading $bgTransparent />}
        {!loading &&
          watchlist?.length > 0 &&
          watchlist?.map((item, index) => {
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
                        <img
                          srcSet="/assets/images/start-btn-icon.png 2x"
                          alt="start button"
                        />
                      </div>
                      <span className="textbox__button-text">Play Now</span>
                    </Button>
                    <Button
                      variant="second"
                      className="btn btnsecond btnremove"
                      onClick={(e) => _onRemoveFromWatchList(e, id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </StyledMovieItemHorizontal>
            );
          })}
        {!loading && watchlist?.length < 1 && (
          <Empty description="No movies added yet" />
        )}
      </div>
    </StyledInfoRow>
  );
};

export default MyWatchList;
