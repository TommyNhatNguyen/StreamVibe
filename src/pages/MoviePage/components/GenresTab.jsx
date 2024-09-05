import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { Empty } from "antd";
import ComponentLoading from "../../../components/ComponentLoading";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";
import { StyledCategoryGroupWrapper } from "../../../components/StyledComponents/StyledCategoryGroupWrapper";
import CategoryItem from "../../../components/CategoryItem";

const GenresTab = ({ moviesByGenres, loading, ...props }) => {
  useEffect(() => {
    if (moviesByGenres?.length > 0 && !loading) {
      const explores = document.querySelector(".explore.--genres");
      useFlickity(explores);
    }
  }, [moviesByGenres, loading]);
  return (
    <div
      className="explore --genres"
      style={{ position: "relative" }}
      {...props}
    >
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Our Genres 🎨
          </h2>
        </Textbox.Content>
        <Textbox.ButtonControlGroup className="textbox__btngroup">
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol --arrow-left"
          >
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </Button>
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol  --arrow-right"
          >
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </Button>
        </Textbox.ButtonControlGroup>
      </Textbox>
      {loading && <ComponentLoading />}
      {moviesByGenres?.length > 0 && !loading ? (
        <StyledCategoryGroupWrapper className="explore__categroup categroup">
          <CategoryItem
            name="All"
            images={["/assets/images/home/hero-banner.jpg"]}
            id={moviesByGenres?.[0]?.id}
          />
          {moviesByGenres?.map((item, index) => {
            const { id, name, movies } = item || {};
            const images = movies
              ?.slice(0, 4)
              ?.map((item) => item?.poster_path || "");
            return (
              <CategoryItem
                key={id + index + name}
                name={name}
                images={images}
                id={id}
              />
            );
          })}
        </StyledCategoryGroupWrapper>
      ) : (
        <AntdWrapper>
          <Empty description="Genres not found" />
        </AntdWrapper>
      )}
      {/* Progress bar */}
      {moviesByGenres?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default GenresTab;
