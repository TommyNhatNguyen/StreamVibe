import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import CategoryGroup from "../../../components/CategoryGroup";
import { AntdWrapper } from "../../../components/StyledComponents/AntDWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";

const TrendingTab = ({ moviesTrending, loading }) => {
  useEffect(() => {
    if (moviesTrending?.length > 0 && !loading) {
      const explores = document.querySelector(".explore.--trending");
      useFlickity(explores);
    }
  }, [moviesTrending, loading]);
  return (
    <div className="explore --trending" style={{ position: "relative" }}>
      {/* Textbox group */}
      <div className="explore__textboxgroup textbox --left">
        <div className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Trending Now ⭐️
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
      {moviesTrending?.length > 0 && !loading ? (
        <CategoryGroup classes="--trending">
          {moviesTrending?.map((movie, index) => {
            const { id, poster_path: image, popularity } = movie || {};
            return (
              <CategoryGroup.ItemTrending
                key={id + index}
                image={image}
                popularity={popularity}
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
      {moviesTrending?.length > 0 && !loading && (
        <div className="explore__progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default TrendingTab;
