import classNames from "classnames";
import React from "react";
import { MovieContentWrapper } from "../../../components/StyledComponents/MovieContentWrapper";
import moment from "moment";
import { ENV } from "../../../constants/environments";
import OwlCarousel from "react-owl-carousel";
import { formatDate } from "../../../utils/format";
import { IMAGE_NOTFOUND_PATH } from "../../../constants/paths";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
const NUM_BASE = 5;
const MovieContent = ({
  translations,
  movieDetail,
  movieCast,
  movieReviews,
  movieDirector,
  movieMusician,
  movieDetailByImdb,
  apiLoading,
}) => {
  const {
    release_date: releaseDate,
    genres,
    vote_average: voteAverage,
    overview,
  } = movieDetail;
  const { vote_average: voteAverageImdb } = movieDetailByImdb || {};
  const modifiedVoteAverageImbd = Math.floor(
    (NUM_BASE * voteAverageImdb + 1) / 10
  );
  const voteAverageDecimalImbd = voteAverageImdb?.toFixed(1);
  const modifiedVoteAverage = Math.floor((NUM_BASE * voteAverage + 1) / 10);
  const voteAverageDecimal = voteAverage?.toFixed(1);
  const releaseYear = moment(releaseDate || "").year() || "";
  const {
    credit_id: directorId,
    name: directorName,
    profile_path: directorProfilePath,
    job: directorTitle,
  } = movieDirector || {};
  const {
    credit_id: musicianId,
    name: musicianName,
    profile_path: musicianProfilePath,
    job: musicianTitle,
  } = movieMusician || {};
  const directorProfileImg = directorProfilePath
    ? ENV.IMAGE_URL + directorProfilePath
    : IMAGE_NOTFOUND_PATH.avatar;
  const musicianProfileImg = musicianProfilePath
    ? ENV.IMAGE_URL + musicianProfilePath
    : IMAGE_NOTFOUND_PATH.avatar;
  return (
    <section className="moviecontent --pd-b">
      <div className="container">
        <MovieContentWrapper className="moviecontent-wrapper">
          {apiLoading ? (
            <ComponentLoading />
          ) : (
            <>
              <div className="moviecontent__content">
                <div className="moviecontent__content-row">
                  <div className="title-wrapper">
                    <p className="title">Description</p>
                  </div>
                  <p className="paragraph">{overview || "No overview"}</p>
                </div>
                <div className="moviecontent__content-row">
                  <div className="title-wrapper">
                    <p className="title">Cast</p>
                  </div>
                  {movieCast?.length > 0 && !apiLoading ? (
                    <OwlCarousel
                      className="castlist owl-carousel"
                      autoWidth={true}
                      nav={false}
                      margin={20}
                      dots={false}
                      dotsEach={false}
                      dotData={false}
                      lazyLoad={true}
                      responsive={{
                        1440: { margin: 10 },
                      }}
                    >
                      {movieCast?.map((item, index) => {
                        const { cast_id: id, profile_path: castProfilePath } =
                          item || {};
                        const imagePath = castProfilePath
                          ? ENV.IMAGE_URL + castProfilePath
                          : IMAGE_NOTFOUND_PATH.avatar;
                        return (
                          <li key={id || index} className="castlist__img">
                            <a href="#">
                              <img
                                data-src={imagePath || ""}
                                src={imagePath || ""}
                                alt="avatar icon"
                              />
                            </a>
                          </li>
                        );
                      })}
                    </OwlCarousel>
                  ) : (
                    <AntdWrapper>
                      <Empty description="Cast information not found" />
                    </AntdWrapper>
                  )}
                </div>
                <div className="moviecontent__content-row">
                  <div className="title-wrapper">
                    <p className="title">Reviews</p>
                    <a href="#" className="btnsecond">
                      <div className="icon">
                        <img
                          src="/assets/images/plus-icon.png"
                          alt="plus icon"
                        />
                      </div>
                      Add Your Review
                    </a>
                  </div>
                  {movieReviews?.length > 0 && !apiLoading ? (
                    <OwlCarousel
                      className="castlist owl-carousel reviews-wrapper"
                      autoWidth={true}
                      nav={false}
                      margin={20}
                      dots={false}
                      dotsEach={false}
                      dotData={false}
                      lazyLoad={true}
                      responsive={{
                        1440: { margin: 16 },
                      }}
                    >
                      {movieReviews?.map((review, index) => {
                        const {
                          id,
                          author_details: { rating },
                          author,
                          content,
                          created_at: createdAt,
                        } = review || {};
                        const formatCreatedAt = formatDate(createdAt || 0);
                        return (
                          <li key={id || index} className="review">
                            <div className="review__title">
                              <div className="title-wrapper">
                                <h5 className="title --h5">{author || ""}</h5>
                                <p className="paragraph">
                                  Created at: {formatCreatedAt || 0}
                                </p>
                              </div>
                              <div className="rating">
                                <div className="rating__val">
                                  {Array(5)
                                    .fill("")
                                    .map((item, index) => {
                                      return (
                                        <i
                                          key={item || index}
                                          className={classNames(
                                            "bi bi-star-fill",
                                            {
                                              active: index + 1 <= rating,
                                            }
                                          )}
                                        ></i>
                                      );
                                    })}
                                </div>
                                <span className="rating__content">
                                  {rating || 0}
                                </span>
                              </div>
                            </div>
                            <p className="paragaph">{content}</p>
                          </li>
                        );
                      })}
                    </OwlCarousel>
                  ) : (
                    <AntdWrapper>
                      <Empty description="Reviews not found" />
                    </AntdWrapper>
                  )}
                </div>
              </div>
              <div className="moviecontent__info">
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <div className="icon">
                      <img
                        src="/assets/images/language-icon.png"
                        alt="language"
                      />
                    </div>
                    <h5 className="title --h5">Available Languages</h5>
                  </div>
                  <div className="content-wrapper">
                    {translations?.length > 0 && !apiLoading ? (
                      <ul className="taglist">
                        {translations?.map((item, index) => {
                          const { english_name: name, iso_639_1: id } =
                            item || {};
                          return (
                            <li key={id + index} className="taglist__tag">
                              {name || ""}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <AntdWrapper>
                        <Empty description="Available Languages not found" />
                      </AntdWrapper>
                    )}
                  </div>
                </div>
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <div className="icon">
                      <img
                        src="/assets/images/calendar-icon.png"
                        alt="calender"
                      />
                    </div>
                    <h5 className="title --h5">Released Year</h5>
                  </div>
                  <div className="content-wrapper">
                    <p className="paragraph">
                      {releaseYear || "Released year not found"}
                    </p>
                  </div>
                </div>
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <div className="icon">
                      <img src="/assets/images/star-icon.png" alt="star" />
                    </div>
                    <h5 className="title --h5">Ratings</h5>
                  </div>
                  <div className="content-wrapper">
                    <div className="rating-wrapper">
                      <div className="rating-wrapper__item">
                        <h5 className="title --h5">IMDb</h5>
                        <div className="rating">
                          <div className="rating__val">
                            {Array(5)
                              .fill("")
                              .map((item, index) => {
                                return (
                                  <i
                                    key={item || index}
                                    className={classNames("bi bi-star-fill", {
                                      active:
                                        index + 1 <= modifiedVoteAverageImbd ||
                                        0,
                                    })}
                                  ></i>
                                );
                              })}
                          </div>
                          <span className="rating__content">
                            {voteAverageDecimalImbd || 0}
                          </span>
                        </div>
                      </div>
                      <div className="rating-wrapper__item">
                        <h5 className="title --h5">Streamvibe</h5>
                        <div className="rating">
                          <div className="rating__val">
                            {Array(5)
                              .fill("")
                              .map((item, index) => {
                                return (
                                  <i
                                    key={item || index}
                                    className={classNames("bi bi-star-fill", {
                                      active:
                                        index + 1 <= modifiedVoteAverage || 0,
                                    })}
                                  ></i>
                                );
                              })}
                          </div>
                          <span className="rating__content">
                            {voteAverageDecimal || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <div className="icon">
                      <img src="/assets/images/select-icon.png" alt="select" />
                    </div>
                    <h5 className="title --h5">Gernes</h5>
                  </div>
                  <div className="content-wrapper">
                    {genres?.length > 0 && !apiLoading ? (
                      <ul className="taglist">
                        {genres?.map((item, index) => {
                          const { id, name } = item || {};
                          return (
                            <li key={id || index} className="taglist__tag">
                              {name}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <AntdWrapper>
                        <Empty description="Gernes not found" />
                      </AntdWrapper>
                    )}
                  </div>
                </div>
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <h5 className="title --h5">Director</h5>
                  </div>
                  <div className="content-wrapper">
                    {directorId && directorName && directorTitle ? (
                      <div className="avatar-wrapper" id={directorId}>
                        <div className="avatar-wrapper__img">
                          <img src={directorProfileImg || ""} alt="avatar" />
                        </div>
                        <div className="avatar-wrapper__content">
                          <h5 className="--h5 title">{directorName}</h5>
                          <p className="paragraph">{directorTitle}</p>
                        </div>
                      </div>
                    ) : (
                      <AntdWrapper>
                        <Empty description="Director information not found" />
                      </AntdWrapper>
                    )}
                  </div>
                </div>
                <div className="moviecontent__info-row">
                  <div className="title-wrapper">
                    <h5 className="title --h5">Music</h5>
                  </div>
                  <div className="content-wrapper">
                    {musicianId &&
                    musicianProfileImg &&
                    musicianName &&
                    musicianTitle ? (
                      <div className="avatar-wrapper" id={musicianId || ""}>
                        <div className="avatar-wrapper__img">
                          <img src={musicianProfileImg || ""} alt="avatar" />
                        </div>
                        <div className="avatar-wrapper__content">
                          <h5 className="--h5 title">{musicianName || ""}</h5>
                          <p className="paragraph">{musicianTitle || ""}</p>
                        </div>
                      </div>
                    ) : (
                      <AntdWrapper>
                        <Empty description="Musician information not found" />
                      </AntdWrapper>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </MovieContentWrapper>
      </div>
    </section>
  );
};

export default MovieContent;
