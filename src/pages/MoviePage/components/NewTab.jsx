import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import CategoryGroup from "../../../components/CategoryGroup";
import { formatDate } from "../../../utils/format";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";

const NewTab = ({ moviesNowPlaying, loading }) => {
  useEffect(() => {
    if (moviesNowPlaying?.length > 0 && !loading) {
      const explores = document.querySelector(".explore.--trending.--new");
      useFlickity(explores);
    }
  }, [moviesNowPlaying, loading]);
  return (
    <div className="explore --trending --new" style={{ position: "relative" }}>
      {/* Textbox group */}
      <div className="explore__textboxgroup textbox --left">
        <div className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            New Releases 📣
          </h2>
        </div>
        <ul className="textbox__btngroup">
          <li className="textbox__btngroup-btncontrol btncontrol --arrow-left">
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </li>
          <li className="textbox__btngroup-btncontrol btncontrol --arrow-right">
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </li>
        </ul>
      </div>
      {/* Category group*/}
      {loading && <ComponentLoading />}
      {moviesNowPlaying?.length > 0 && !loading ? (
        <CategoryGroup classes="--trending">
          {moviesNowPlaying?.map((movie, index) => {
            const {
              id,
              poster_path: image,
              release_date: releaseDate,
            } = movie || {};
            const formatReleaseDate = formatDate(releaseDate);
            return (
              <CategoryGroup.ItemNewRelease
                key={id + index}
                image={image}
                releaseDate={formatReleaseDate}
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
      {moviesNowPlaying?.length > 0 && !loading && (
        <div className="explore__progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default NewTab;
