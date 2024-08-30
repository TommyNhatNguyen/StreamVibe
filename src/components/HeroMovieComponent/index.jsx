import React, { Fragment, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { ENV } from "../../constants/environments";
import { youtubePath } from "../../constants/general";
import { TrailerVideoWrapper } from "../StyledComponents/TrailerVideoWrapper";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_NOTFOUND_PATH } from "../../constants/paths";
import ComponentLoading from "../ComponentLoading";

const HeroMovieComponent = ({
  videosByMovie,
  sectionClassname,
  loading,
  ...props
}) => {
  return (
    <section className={`heromovie ${sectionClassname}`}>
      <div className="container">
        {videosByMovie?.length > 0 && (
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
              const { movieBackdrop, movieOverview, movieTitle, videos } =
                item || {};
              const { key, id } = videos?.[0] || {};
              const trailerPath = youtubePath(key);
              const imgPath =
                (movieBackdrop && ENV.IMAGE_URL + movieBackdrop) || "";
              return (
                <div
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
                        <div className="textbox --center">
                          <div className="textbox__content">
                            <h2 className="textbox__content-heading --h2 --heading">
                              {movieTitle || ""}
                            </h2>
                            <p className="paragraph">{movieOverview || ""}</p>
                            <div className="textbox__content-btngroup">
                              <a href="#" className="textbox__button btnmain">
                                <div className="textbox__button-icon icon">
                                  <img srcSet="/assets/images/start-btn-icon.png 2x" />
                                </div>
                                <span className="textbox__button-text">
                                  Play Now
                                </span>
                              </a>
                              <div className="btncontrol-group">
                                <div className="btncontrol --black">
                                  <img
                                    srcSet="/assets/images/plus-icon.png 2x"
                                    alt="start button"
                                  />
                                </div>
                                <a href="#" className="btncontrol --black">
                                  <img
                                    srcSet="/assets/images/like-icon.png 2x"
                                    alt="start button"
                                  />
                                </a>
                                <a href="#" className="btncontrol --black">
                                  <img
                                    srcSet="/assets/images/volume-icon.png 2x"
                                    alt="start button"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};

export default HeroMovieComponent;
