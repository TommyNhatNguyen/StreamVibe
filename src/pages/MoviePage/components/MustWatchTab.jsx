import React, { useEffect } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { AntdWrapper } from "../../../components/StyledComponents/AntDWrapper";

const MustWatchTab = ({ moviesTopRated, loading, title = "" }) => {
  useEffect(() => {
    if (moviesTopRated?.length > 0 && !loading) {
      const explores = document.querySelectorAll(
        ".explore.--mustwatch.--toprated"
      );
      explores.forEach((item) => {
        useFlickity(item);
      });
    }
  }, [moviesTopRated, loading]);
  return (
    <div
      className="explore --mustwatch --toprated"
      style={{ position: "relative" }}
    >
      {/* Textbox group */}
      <div className="explore__textboxgroup textbox --left">
        <div className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">{title}</h2>
        </div>
        <ul className="textbox__btngroup">
          <li className="textbox__btngroup-btncontrol btncontrol --arrow-left">
            <img srcSet="/assets/images/arrow-left-icon.png 2x" />
          </li>
          <li className="textbox__btngroup-btncontrol btncontrol --arrow-right">
            <img srcSet="/assets/images/arrow-left-icon.png 2x" />
          </li>
        </ul>
      </div>
      {/* Category group*/}
      {loading && <ComponentLoading />}
      {moviesTopRated?.length > 0 && !loading ? (
        <CategoryGroup classes="--mustwatch">
          {moviesTopRated?.map((movie, index) => {
            const {
              id,
              vote_average: voteAverage,
              vote_count: voteCount,
              poster_path: image,
            } = movie || {};

            return (
              <CategoryGroup.ItemMustWatch
                key={id + index + image}
                voteAverage={voteAverage}
                voteCount={voteCount}
                image={image}
                id={id}
              />
            );
          })}
        </CategoryGroup>
      ) : (
        <AntdWrapper>
          <Empty description="Movies not found" />
        </AntdWrapper>
      )}
      {/* Progress bar */}
      {moviesTopRated?.length > 0 && !loading && (
        <div className="explore__progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default MustWatchTab;
