import React, { Fragment, useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ENV } from "../../../constants/environments";
import { youtubePath } from "../../../constants/general";
import LazyLoad from "react-lazy-load";
import styled from "styled-components";
import { TrailerVideoWrapper } from "../../../components/StyledComponents/TrailerVideoWrapper";

const HeroSection = ({ videosByMovie }) => {
  useEffect(() => {
    if (videosByMovie?.length > 0) {
      const trailer = document.querySelector(".trailer-wrapper");
      const trailerItem = trailer?.querySelector(".trailer");
      if (trailerItem) {
        const flkty = new Flickity(trailer, {
          // options
          cellAlign: "left",
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          lazyLoad: true,
        });
      }
    }
  }, [videosByMovie]);
  return (
    <section className="heromovie">
      <div className="container">
        {videosByMovie?.length > 0 && (
          <div className="trailer-wrapper">
            {videosByMovie?.map((item, index) => {
              const { movieBackdrop, movieOverview, movieTitle, videos } =
                item || {};
              const { key, id } = videos?.[0] || {};
              const trailerPath = youtubePath(key);
              const imgPath = ENV.IMAGE_URL + movieBackdrop || "";
              return (
                <div
                  className="trailer"
                  key={id + index}
                  style={{ minHeight: "100%", width: "100%" }}
                >
                  <div
                    className="heromovie__trailer"
                    style={{
                      minHeight: "100%",
                      width: "100%",
                    }}
                  >
                    <div className="heromovie__trailer-img">
                      <img
                        data-flickity-lazyload={imgPath || ""}
                        alt="movie banner"
                      />
                    </div>
                    <TrailerVideoWrapper
                      className="heromovie__trailer-video"
                      style={{ minHeight: "100%", width: "100%" }}
                    >
                      <LazyLoad>
                        <iframe src={trailerPath} loading="lazy"></iframe>
                      </LazyLoad>
                    </TrailerVideoWrapper>
                  </div>
                  <div className="textbox --center">
                    <div className="textbox__content">
                      <h2 className="textbox__content-heading --h2 --heading">
                        {movieTitle || ""}
                      </h2>
                      <p className="paragraph">{movieOverview || ""}</p>
                      <div className="textbox__content-btngroup">
                        <a href="#" className="textbox__button btnmain">
                          <div className="textbox__button-icon icon">
                            <img srcSet="./assets/images/start-btn-icon.png 2x" />
                          </div>
                          <span className="textbox__button-text">Play Now</span>
                        </a>
                        <div className="btncontrol-group">
                          <div className="btncontrol --black">
                            <img
                              srcSet="./assets/images/plus-icon.png 2x"
                              alt="start button"
                            />
                          </div>
                          <a href="#" className="btncontrol --black">
                            <img
                              srcSet="./assets/images/like-icon.png 2x"
                              alt="start button"
                            />
                          </a>
                          <a href="#" className="btncontrol --black">
                            <img
                              srcSet="./assets/images/volume-icon.png 2x"
                              alt="start button"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
