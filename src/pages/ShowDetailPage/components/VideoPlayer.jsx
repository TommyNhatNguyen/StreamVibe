import React from "react";
import styled from "styled-components";
import { ENV } from "../../../constants/environments";
import { IMAGE_NOTFOUND_PATH, PATHS } from "../../../constants/paths";
import BreadCrumb from "../../../components/BreadCrumb";
import classNames from "classnames";
import { formatViews } from "../../../utils/format";
import ComponentLoading from "../../../components/ComponentLoading";

const StyledVideoWrapper = styled.div`
  position: relative;
  .videoplayer__wrapper-title {
    padding: 20px;
    background-color: var(--black-cl-2);
    border: 1px solid var(--black-cl-3);
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .videoplayer__wrapper-info {
    padding: 20px;
    background-color: var(--black-cl-2);
    border: 1px solid var(--black-cl-3);
    border-radius: 8px;
    margin-top: 20px;
    .info {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 14px;
      .duration {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: var(--black-cl);
        border-radius: 51px;
        border: 1px solid var(--black-cl-3);
        padding: 6px 10px;
      }
    }
  }
`;

const StyledVideo = styled.div`
  background: url(${(props) => props.$backdropImg});
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--black-cl-3);
  overflow: hidden;
  .backdrop {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 3px var(--black-cl);
    &:target {
      border: 1px solid var(--red-cl);
    }
  }
`;

const VideoPlayer = ({ movieDetail, loading, voteAverage, voteCount }) => {
  const {
    backdrop_path: backdropImg,
    title,
    id,
    genres,
    release_date: releaseDate,
    overview,
    runtime,
  } = movieDetail || {};
  const imgPath = backdropImg
    ? ENV.IMAGE_URL + backdropImg || ""
    : IMAGE_NOTFOUND_PATH.poster;
  const moviePath = PATHS.MOVIE.INDEX + "/" + id;
  const { id: genreId, name: genreName } = genres?.[0] || {};
  const genrePath = PATHS.SHOW.INDEX + "/" + genreId;
  return (
    <section className="videoplayer --pd-t">
      <div className="container">
        <StyledVideoWrapper className="videoplayer__wrapper">
          {loading && <ComponentLoading />}
          <div className="videoplayer__wrapper-title --h3">
            <BreadCrumb>
              <BreadCrumb.Item link={PATHS.HOME} classes={"--h3"}>
                StreamVibe
              </BreadCrumb.Item>{" "}
              /{" "}
              <BreadCrumb.Item link={genrePath} classes={"--h3"}>
                {genreName || ""}
              </BreadCrumb.Item>{" "}
              /{" "}
              <BreadCrumb.Item link={moviePath} classes={"--h3"}>
                {title || ""}
              </BreadCrumb.Item>
            </BreadCrumb>
          </div>
          <StyledVideo className="videoplayer__wrapper-video">
            <div className="backdrop">
              <img src={imgPath} alt="backdrop" />
            </div>
            <video src="/assets/video/sample_video.mp4" controls>
              <source src="/assets/video/sample_video.mp4" type="video/mp4" />
            </video>
          </StyledVideo>
          <div className="videoplayer__wrapper-info">
            <div className="content">
              <h3 className="title --h4">
                {title || ""} ({releaseDate})
              </h3>
              <p className="paragraph">{overview || ""}</p>
            </div>
            <div className="info">
              <div className="duration">
                <div className="info__icon">
                  <img srcSet="/assets/images/time-icon.png 2x" alt="icon" />
                </div>
                <span className="info__content">{runtime} min</span>
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
                            active: index + 1 <= voteAverage,
                          })}
                        ></i>
                      );
                    })}
                </div>
                <span className="rating__content">{voteCount || 0}</span>
              </div>
            </div>
          </div>
        </StyledVideoWrapper>
      </div>
    </section>
  );
};

export default VideoPlayer;
