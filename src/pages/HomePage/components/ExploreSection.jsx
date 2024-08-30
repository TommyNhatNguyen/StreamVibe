import React, { useEffect } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import { useMovieContext } from "../../../context/MovieContext";

const ExploreSection = () => {
  const { moviesByGenres } = useMovieContext();
  useEffect(() => {
    const explore = document.querySelector(".explore");
    useFlickity(explore);
  }, [moviesByGenres]);

  return (
    <section className="explore --pd-tb" id="explore">
      <div className="container">
        {/* Textbox group */}
        <div className="explore__textboxgroup textbox --left">
          <div className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              Explore our wide variety of categories
            </h2>
            <p className="textbox__content-paragraph">
              Whether you're looking for a comedy to make you laugh, a dramta to
              make you think, or a documentary to learn something new
            </p>
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

        {moviesByGenres?.length > 0 && (
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
                />
              );
            })}
          </CategoryGroup>
        )}
        {/* Progress bar */}
        <div className="explore__progressbar">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
