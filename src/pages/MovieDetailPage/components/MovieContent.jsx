import classNames from "classnames";
import React from "react";
import moment from "moment";
import { ENV } from "../../../constants/environments";
import OwlCarousel from "react-owl-carousel";
import { formatDate } from "../../../utils/format";
import { IMAGE_NOTFOUND_PATH } from "../../../constants/paths";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import { breakpoints } from "../../../constants/media";
import styled from "styled-components";
import Button from "../../../components/Button";
import Textbox from "../../../components/Textbox";

export const MovieContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.03fr 1fr;
  gap: 20px;
  .moviecontent__content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .moviecontent__content-row {
      width: 100%;
      background-color: var(--black-cl-2);
      border: 1px solid var(--black-cl-3);
      border-radius: 12px;
      padding: 50px;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-family: var(--ff-medium);
        }
        .btnsecond {
          gap: 4px;
          .icon {
            height: 15px;
            aspect-ratio: 1/1;
          }
        }
      }
      .paragraph {
        font-family: var(--ff-medium);
        color: var(--white-cl);
      }
      .castlist {
        width: 100%;
        margin-top: 30px;
        overflow: hidden;
        &__img {
          height: 109px;
          aspect-ratio: 102.13 / 109;
          list-style-type: none;
          border-radius: 12px;
          overflow: hidden;
          a {
            height: 100%;
            width: 100%;
            img {
              object-fit: cover;
            }
          }
        }
      }
      .reviews-wrapper {
        margin-top: 40px;
        .review {
          height: 265px;
          aspect-ratio: 468/265;
          padding: 40px;
          border-radius: 12px;
          background-color: var(--black-cl-4);
          border: 1px solid var(--black-cl-3);
          list-style-type: none;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-track {
            background: var(--black-cl-3);
          }
          &::-webkit-scrollbar-thumb {
            background: var(--black-cl-2);
          }
          &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            .title-wrapper {
              display: block;
              .title {
                font-family: var(--ff-medium);
              }
              .paragraph {
                font-family: var(--ff-medium);
                color: var(--gray-cl);
                margin-top: initial;
              }
            }
            .rating {
              max-height: 39px;
            }
          }
          &__paragaph {
            margin-top: 20px;
          }
        }
      }
    }
  }
  .moviecontent__info {
    padding: 50px;
    border-radius: 12px;
    background-color: var(--black-cl-2);
    border: 1px solid var(--black-cl-3);
    overflow: hidden;
    .moviecontent__info-row {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 14px;
        .icon {
          height: 24px;
          aspect-ratio: 1/ 1;
          margin-bottom: 4px;
        }
      }
      .content-wrapper {
        .taglist {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          max-height: 300px;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-track {
            background: var(--black-cl-2);
          }
          &::-webkit-scrollbar-thumb {
            background: var(--black-cl-3);
          }
          &__tag {
            background-color: var(--black-cl);
            border: 1px solid var(--black-cl-3);
            border-radius: 8px;
            padding: 8px 14px;
            font-family: var(--ff-medium);
            color: var(--white-cl);
          }
        }
        .avatar-wrapper {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 88px;
          padding: 14px;
          background-color: var(--black-cl);
          border: 1px solid var(--black-cl-3);
          border-radius: 8px;
          &__img {
            height: 60px;
            aspect-ratio: 56.56 / 60;
            border-radius: 8px;
            overflow: hidden;
            img {
              object-fit: cover;
            }
          }
          &__content {
            font-family: var(--ff-medium);
            .title {
              color: var(--white-cl);
              font-size: var(--fs-body);
            }
            .paragraph {
              margin-top: initial;
            }
          }
        }
        .rating-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          &__item {
            height: 96px;
            aspect-ratio: 199.5 / 96;
            border-radius: 8px;
            background-color: var(--black-cl);
            border: 1px solid var(--black-cl-3);
            padding: 16px;
            .rating {
              height: initial;
              background-color: initial;
              border: initial;
              border-radius: initial;
              padding: initial;
            }
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    .moviecontent__content {
      .moviecontent__content-row {
        padding: 40px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        .title-wrapper {
          .btnsecond {
            .icon {
              height: 12px;
            }
          }
        }
        .castlist {
          margin-top: 20px;
          &__img {
            height: 89px;
            aspect-ratio: 87.5 / 89;
          }
        }
        .reviews-wrapper {
          margin-top: 30px;
          .review {
            height: 233;
            aspect-ratio: 377 / 233;
            padding: 30px;
            &__title {
              .rating {
                max-height: 29px;
              }
            }
            &__paragaph {
              margin-top: 16px;
            }
          }
        }
      }
    }
    .moviecontent__info {
      padding: 40px;
      .moviecontent__info-row {
        &:not(:last-child) {
          margin-bottom: 24px;
        }
        .title-wrapper {
          margin-bottom: 10px;
          .icon {
            height: 20px;
          }
        }
        .content-wrapper {
          .taglist {
            &__tag {
              padding: 6px 12px;
            }
          }
          .avatar-wrapper {
            display: flex;
            align-items: center;
            gap: 3px;
            height: 74px;
            padding: 12px;
            &__img {
              height: 50px;
              aspect-ratio: 47 / 50;
              border-radius: 8px;
            }
          }
        }
        .rating-wrapper {
          gap: 16px;
          &__item {
            height: 77px;
            aspect-ratio: 160 / 77;
            padding: 15px;
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    .moviecontent__content {
      .moviecontent__content-row {
        padding: 24px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        .castlist {
          margin-top: 16px;
          &__img {
            height: 75px;
            aspect-ratio: 70 / 75;
          }
        }
        .reviews-wrapper {
          margin-top: 24px;
          .review {
            height: 214;
            aspect-ratio: 310 / 214;
            padding: 24px;
          }
        }
      }
    }
    .moviecontent__info {
      padding: 24px;
      .moviecontent__info-row {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        .content-wrapper {
          .avatar-wrapper {
            gap: 8px;
            height: 70px;
            padding: 10px;
          }
        }
        .rating-wrapper {
          &__item {
            height: 68px;
            aspect-ratio: 147 / 68;
            padding: 12px;
          }
        }
      }
    }
  }
`;

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
                    <Button variant="second" href="#" className="btn btnsecond">
                      <div className="icon">
                        <img
                          src="/assets/images/plus-icon.png"
                          alt="plus icon"
                        />
                      </div>
                      Add Your Review
                    </Button>
                  </div>
                  {movieReviews?.length > 0 && !apiLoading ? (
                    <OwlCarousel
                      className="owl-carousel reviews-wrapper"
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
                            <p className="review__paragaph">{content}</p>
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
                    <span className="title">Available Languages</span>
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
