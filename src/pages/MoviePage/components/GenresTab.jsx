import React, { useEffect } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import { Empty, Skeleton } from "antd";
import ComponentLoading from "../../../components/ComponentLoading";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";

const GenresTab = ({ moviesByGenres, loading }) => {
  useEffect(() => {
    if (moviesByGenres?.length > 0 && !loading) {
      const explores = document.querySelector(".explore.--genres");
      useFlickity(explores);
    }
  }, [moviesByGenres, loading]);
  return (
    <div className="explore --genres" style={{ position: "relative" }}>
      {/* Textbox group */}
      <div className="explore__textboxgroup textbox --left">
        <div className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Our Genres 🎨
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
      {moviesByGenres?.length > 0 && !loading ? (
        <CategoryGroup>
          {moviesByGenres?.map((item, index) => {
            const { id, name, movies } = item || {};
            const images = movies
              ?.slice(0, 4)
              ?.map((item) => item?.poster_path || "");
            return (
              <CategoryGroup.Item
                key={id + index + name}
                name={name}
                images={images}
                id={id}
              />
            );
          })}
        </CategoryGroup>
      ) : (
        <AntdWrapper>
          <Empty description="Genres not found" />
        </AntdWrapper>
      )}
      {/* Progress bar */}
      {moviesByGenres?.length > 0 && !loading && (
        <div className="explore__progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default GenresTab;
