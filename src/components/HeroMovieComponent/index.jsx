import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { ENV } from "../../constants/environments";
import { youtubePath } from "../../constants/general";
import { TrailerVideoWrapper } from "../StyledComponents/TrailerVideoWrapper";
import OwlCarousel from "react-owl-carousel";
import ComponentLoading from "../ComponentLoading";
import styled from "styled-components";
import Textbox from "../Textbox";
import Button from "../Button";
import { breakpoints } from "../../constants/media";
import { PATHS } from "../../constants/paths";
import classNames from "classnames";

const StyledTrailer = styled.div`
  height: 100vh;
  max-height: 600px;
  border-radius: 12px;
  border: 1px solid var(--black-cl-3);
  .heromovie__trailer {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(38, 38, 38);
      background: linear-gradient(
        to top,
        rgba(38, 38, 38, 1) 0%,
        rgba(38, 38, 38, 0) 100%
      );
      z-index: 0;
    }
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      img {
        object-fit: cover;
        object-position: center;
      }
    }
    &-video {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      iframe {
        height: 100%;
        width: 100%;
        pointer-events: none;
      }
    }
    &-textbox {
      position: absolute;
      bottom: 0;
      z-index: 100;
      .textbox__btngroup {
        display: flex;
        padding: initial;
        border: initial;
        background-color: initial;
        gap: 20px;
        .btnmain {
          gap: 4px;
        }
        &-inner {
          gap: 10px;
        }
      }
      @media (max-width: ${breakpoints.mobile}) {
        bottom: 10%;
        .textbox__btngroup {
          flex-direction: column;
          gap: 20px;
          &-inner {
            flex-direction: row;
          }
        }
      }
    }
  }
`;

const StyledTextbox = styled(Textbox)`
  max-width: var(--max-width-container);
  padding: 0 calc(var(--pd-container));
`;

const HeroMovieComponent = ({
  videosByMovie,
  sectionClassname,
  loading,
  scrolling = true,
  handleAddtoFavorite,
  favorites,
  watchlist,
  handleAddtoWatchlist,
  ...props
}) => {
  const [_, setForceUpdate] = useState(true);
  const _onAddToFavorite = (e, movieId) => {
    e.preventDefault();
    handleAddtoFavorite(movieId);
  };
  const _onAddToWatchlist = (e, movieId) => {
    e.preventDefault();
    handleAddtoWatchlist(movieId);
  };
  useEffect(() => {
    setForceUpdate((prev) => !prev);
  }, [favorites, watchlist]);
  return (
    <section className={`heromovie ${sectionClassname && ""}`} {...props}>
      {videosByMovie?.length > 0 &&
        (scrolling ? (
          <OwlCarousel
            className="owl-carousel"
            dots={false}
            nav={false}
            items={1}
            video={true}
            lazyLoad={true}
            loop={true}
          >
            {videosByMovie?.map((item, index) => {
              const {
                movieBackdrop,
                movieOverview,
                movieTitle,
                videos,
                movieId,
              } = item || {};
              const { key, id } =
                videos?.filter((item) => item.type === "Trailer")?.[0] || {};
              const trailerPath = youtubePath(key);
              const imgPath =
                (movieBackdrop && ENV.IMAGE_URL + movieBackdrop) || "";
              return (
                <StyledTrailer
                  className="trailer"
                  key={id + index}
                  style={{ width: "100%" }}
                >
                  <div className="heromovie__trailer">
                    {loading ? (
                      <ComponentLoading />
                    ) : (
                      <>
                        <div className="heromovie__trailer-img">
                          <img
                            src={imgPath || ""}
                            data-src={imgPath || ""}
                            alt="movie banner"
                          />
                        </div>
                        <TrailerVideoWrapper className="heromovie__trailer-video">
                          <LazyLoad>
                            <iframe
                              src={trailerPath}
                              data-src={trailerPath}
                            ></iframe>
                          </LazyLoad>
                        </TrailerVideoWrapper>
                        <StyledTextbox
                          variant="center"
                          className="heromovie__trailer-textbox textbox"
                        >
                          <Textbox.Content className="textbox__content --center">
                            <h2 className="textbox__content-heading --h2 --heading">
                              {movieTitle || ""}
                            </h2>
                            <p className="textbox__content-paragraph paragraph">
                              {movieOverview || ""}
                            </p>
                          </Textbox.Content>
                          <Textbox.ButtonControlGroup className="textbox__btngroup">
                            <Button
                              to={PATHS.MOVIE.PLAY.INDEX + `/${movieId}`}
                              className="textbox__button btn btnmain"
                            >
                              <div className="textbox__button-icon icon">
                                <img
                                  srcSet="/assets/images/start-btn-icon.png 2x"
                                  alt="start button"
                                />
                              </div>
                              <span className="textbox__button-text">
                                Play Now
                              </span>
                            </Button>
                            <Textbox.ButtonControlGroup className="textbox__btngroup textbox__btngroup-inner">
                              <Button
                                variant="control"
                                className={classNames(
                                  "textbox__button btn --btncontrol",
                                  {
                                    "--disabled": favorites?.find(
                                      (item) => item?.id === movieId
                                    ),
                                  }
                                )}
                                onClick={(e) => _onAddToFavorite(e, movieId)}
                              >
                                <img
                                  srcSet="/assets/images/plus-icon.png 2x"
                                  alt="start button"
                                />
                              </Button>
                              <Button
                                variant="control"
                                className={classNames(
                                  "textbox__button btn --btncontrol",
                                  {
                                    "--disabled": watchlist?.find(
                                      (item) => item?.id === movieId
                                    ),
                                  }
                                )}
                                onClick={(e) => _onAddToWatchlist(e, movieId)}
                              >
                                <img
                                  srcSet="/assets/images/like-icon.png 2x"
                                  alt="start button"
                                />
                              </Button>
                            </Textbox.ButtonControlGroup>
                          </Textbox.ButtonControlGroup>
                        </StyledTextbox>
                      </>
                    )}
                  </div>
                </StyledTrailer>
              );
            })}
          </OwlCarousel>
        ) : (
          <div>
            {videosByMovie?.map((item, index) => {
              const {
                movieBackdrop,
                movieOverview,
                movieTitle,
                videos,
                movieId,
              } = item || {};
              const { key, id } =
                videos?.filter((item) => item.type === "Trailer")?.[0] || {};
              const trailerPath = youtubePath(key);
              const imgPath =
                (movieBackdrop && ENV.IMAGE_URL + movieBackdrop) || "";
              return (
                <StyledTrailer
                  className="trailer"
                  key={id + index}
                  style={{ width: "100%" }}
                >
                  <div className="heromovie__trailer">
                    {loading ? (
                      <ComponentLoading />
                    ) : (
                      <>
                        <div className="heromovie__trailer-img">
                          <img
                            src={imgPath || ""}
                            data-src={imgPath || ""}
                            alt="movie banner"
                          />
                        </div>
                        <TrailerVideoWrapper className="heromovie__trailer-video">
                          <LazyLoad>
                            <iframe
                              src={trailerPath}
                              data-src={trailerPath}
                            ></iframe>
                          </LazyLoad>
                        </TrailerVideoWrapper>
                        <StyledTextbox
                          variant="center"
                          className="heromovie__trailer-textbox textbox"
                        >
                          <Textbox.Content className="textbox__content --center">
                            <h2 className="textbox__content-heading --h2 --heading">
                              {movieTitle || ""}
                            </h2>
                            <p className="textbox__content-paragraph paragraph">
                              {movieOverview || ""}
                            </p>
                          </Textbox.Content>
                          <Textbox.ButtonControlGroup className="textbox__btngroup">
                            <Button
                              to={PATHS.MOVIE.PLAY.INDEX + `/${movieId}`}
                              className="textbox__button btn btnmain"
                            >
                              <div className="textbox__button-icon icon">
                                <img
                                  srcSet="/assets/images/start-btn-icon.png 2x"
                                  alt="start button"
                                />
                              </div>
                              <span className="textbox__button-text">
                                Play Now
                              </span>
                            </Button>
                            <Textbox.ButtonControlGroup className="textbox__btngroup textbox__btngroup-inner">
                              <Button
                                variant="control"
                                className={classNames(
                                  "textbox__button btn --btncontrol",
                                  {
                                    "--disabled": favorites?.find(
                                      (item) => item?.id === movieId
                                    ),
                                  }
                                )}
                                onClick={(e) => _onAddToFavorite(e, movieId)}
                              >
                                <img
                                  srcSet="/assets/images/plus-icon.png 2x"
                                  alt="start button"
                                />
                              </Button>
                              <Button
                                variant="control"
                                className={classNames(
                                  "textbox__button btn --btncontrol",
                                  {
                                    "--disabled": watchlist?.find(
                                      (item) => item?.id === movieId
                                    ),
                                  }
                                )}
                                onClick={(e) => _onAddToWatchlist(e, movieId)}
                              >
                                <img
                                  srcSet="/assets/images/like-icon.png 2x"
                                  alt="start button"
                                />
                              </Button>
                            </Textbox.ButtonControlGroup>
                          </Textbox.ButtonControlGroup>
                        </StyledTextbox>
                      </>
                    )}
                  </div>
                </StyledTrailer>
              );
            })}
          </div>
        ))}
    </section>
  );
};

export default HeroMovieComponent;
