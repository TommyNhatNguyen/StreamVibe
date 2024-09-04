import React, { useEffect, useRef, useState } from "react";
import SearchComponent from "../SearchComponent";
import { useMainContext } from "../../context/MainContext";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import styled from "styled-components";
import { useMovieContext } from "../../context/MovieContext";
import useDebounce from "../../hooks/useDebounce";

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--black-cl);
  height: 100vh;
  z-index: 1000;
  transform: translateX(-200vw);
  transition: var(--transition-duration);
  .mobilemenu__container-wrapper {
    padding: 50px var(--pd-container);
    position: relative;
    .btnclose {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      i {
        font-size: var(--fs-h1);
      }
    }
    .search__input {
      margin: 20px 0;
      height: 42px;
    }
    .content {
      padding: 20px 0px;
      border-top: 2px solid var(--black-cl-3);
      &__nav {
        li {
          height: 100%;
          display: flex;
          align-items: center;
          a {
            display: flex;
            padding-bottom: 10px;
            width: 100%;
            transition: var(--transition-duration);
            font-family: var(--ff-semibold);
            font-size: var(--fs-h2);
            color: var(--white-cl);
            transform: translateX(-60px);
            &::before {
              content: ">>>>";
              transform: translateX(-10vw);
              transition: var(--transition-duration);
            }
            &:hover {
              opacity: var(--opacity-hover);
              transform: translateX(5px);
              &::before {
                transform: translateX(-5px);
              }
            }
          }
        }
      }
    }
  }
  &.active {
    transform: translateX(0px);
    .mobilemenu__container-wrapper {
    }
  }
`;

const MobileMenu = () => {
  const { pathname } = useLocation();
  const { showNavMenu, handleCloseMenu } = useMainContext();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const { searchMovies, getMovieBySearch, searchMoviesLoading } =
    useMovieContext();
  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
  };
  useEffect(() => {
    setSearchValue("");
  }, [pathname]);
  useEffect(() => {
    if (debouncedSearchValue) {
      getMovieBySearch(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);
  const _onCloseNavMenu = (e) => {
    e.preventDefault();
    handleCloseMenu();
  };
  return (
    <StyledMobileMenu
      className={classNames("mobilemenu", {
        active: showNavMenu,
      })}
      onClick={(e) => _onCloseNavMenu(e)}
    >
      <div
        className="mobilemenu__container-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          type="button"
          className="btn btncontrol btnclose"
          aria-label="Close"
          onClick={(e) => _onCloseNavMenu(e)}
        >
          <i className="bi bi-x"></i>
        </a>
        <SearchComponent
          debouncedSearchValue={debouncedSearchValue}
          searchMoviesLoading={searchMoviesLoading}
          searchMovies={searchMovies}
          handleSearch={handleSearch}
          searchValue={searchValue}
        />

        <nav className="content">
          <ul className="content__nav">
            <li>
              <NavLink to={PATHS.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.MOVIE.INDEX}>Movies & Shows</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.SUPPORT}>Support</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.SUBSCRIPTION}>Subscriptions</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
