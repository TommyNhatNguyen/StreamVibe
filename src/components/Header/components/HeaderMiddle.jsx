import React, { useEffect, useRef, useState } from "react";
import { PATHS } from "../../../constants/paths";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMainContext } from "../../../context/MainContext";
import { Input } from "antd";
import { InputWrapper } from "../../StyledComponents/InputWrapper";
import styled from "styled-components";
import CategoryGroup from "../../CategoryGroup";
import classNames from "classnames";
import { useMovieContext } from "../../../context/MovieContext";
import useDebounce from "../../../hooks/useDebounce";
import ComponentLoading from "../../ComponentLoading";
import { formatDate } from "../../../utils/format";
import { breakpoints } from "../../../constants/media";
import { MovieItemSearch } from "../../MovieItem";

const StyledHeaderMiddleWrapper = styled.div`
  height: 70%;
  .container {
    height: 100%;
  }
  .header__middle-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gutter);
    position: relative;
    .logo {
      display: flex;
      height: 100%;
      max-height: 60px;
      img {
        object-fit: cover;
      }
    }
    .nav {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      height: 75px;
      padding: 10px;
      background-color: var(--black-cl-4);
      border: 4px solid var(--black-cl-5);
      border-radius: 12px;
      &__item {
        height: 100%;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 14px 24px;
          border-radius: 8px;
          font-family: var(--ff-medium);
          transition: var(--transition-duration);
          text-align: center;
          text-wrap: nowrap;
          &.active,
          &:hover {
            background-color: var(--black-cl);
            color: var(--white-cl);
          }
        }
      }
    }
    .cta {
      &__icon {
        height: 34px;
        aspect-ratio: 1 / 1;
      }
    }
    .hamburger {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    .header__middle-wrapper {
      .logo {
        max-height: 50px;
      }
      .nav {
        height: 61px;
        padding: 8px;
        &__item {
          a {
            padding: 12px 20px;
          }
        }
      }
      .cta {
        &__icon {
          height: 24px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    .header__middle-wrapper {
      .nav {
        left: 57%;
        &__item {
          a {
            padding: 3px 7px;
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    .header__middle-wrapper {
      .logo {
        max-height: 35px;
      }
      .nav,
      .cta {
        display: none;
      }
      .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        flex-direction: column;
        height: 48px;
        aspect-ratio: 1 / 1;
        padding: 12px;
        border-radius: 6px;
        background-color: var(--black-cl-2);
        border: 1px solid var(--black-cl-3);
        span {
          display: block;
          width: 100%;
          height: 2px;
          border-radius: 100px;
          background-color: var(--white-cl);
        }
      }
    }
  }
`;

const StyledHeaderSearchWrapper = styled.div`
  position: fixed;
  top: calc(var(--header-height) + 30px);
  width: 100%;
  max-width: var(--max-width-container);
  padding: 0 var(--pd-container);
  left: 50%;
  transform: translateX(-50%);
  visibility: 0;
  opacity: 0;
  pointer-events: none;
  z-index: 1000;
  .search__results {
    display: block;
    position: relative;
    min-height: 300px;
    max-height: 1000px;
    overflow-y: scroll;
    background-color: var(--white-cl);
    border-radius: 12px;
    margin-top: 12px;
    padding: 12px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: var(--white-cl);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--black-cl);
    }
    a {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
  &.active {
    visibility: 1;
    opacity: 1;
    pointer-events: initial;
  }
  .search__input {
    height: 61px;
    .ant-input {
      height: 100%;
      border-radius: 12px;
      color: var(--black-cl);
      font-family: var(--ff-semibold);
      font-size: var(--fs-h4);
      &:focus,
      &:hover {
        border: 1px solid var(--red-cl);
      }
      &::placeholder {
        color: var(--gray-cl);
        font-family: var(--ff-semibold);
        font-size: var(--fs-h4);
      }
    }
  }
`;

const HeaderMiddle = () => {
  const searchInput = useRef();
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { handleShowNavMenu } = useMainContext();
  const { searchMovies, getMovieBySearch, searchMoviesLoading } =
    useMovieContext();

  const _onShowNavMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleShowNavMenu();
  };
  const _onShowSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSearch((prev) => !prev);
    searchInput.current.focus();
    document.body.addEventListener("click", () => setShowSearch(false));
  };

  const _onChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    setShowSearch(false);
    setSearchValue("");
  }, [pathname]);

  const debouncedSearchValue = useDebounce(searchValue, 500);
  useEffect(() => {
    if (debouncedSearchValue) {
      getMovieBySearch(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  return (
    <StyledHeaderMiddleWrapper className="header__middle">
      <div className="container">
        <div className="header__middle-wrapper">
          <Link to={PATHS.HOME} className="logo">
            <picture>
              <source
                srcSet="/assets/images/logo-laptop.png 2x"
                media="(max-width: 1440px)"
              />
              <source
                srcSet="/assets/images/logo-mobile.png 2x"
                media="(max-width: 767.98px)"
              />
              <img srcSet="/assets/images/logo-desktop.png 2x" alt="logo 2x" />
            </picture>
          </Link>
          <ul className="nav">
            <li className="nav__item">
              <NavLink end to={PATHS.HOME}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={PATHS.MOVIE.INDEX}>Movies & Shows</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={PATHS.SUPPORT}>Support</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={PATHS.SUBSCRIPTION}>Supscriptions</NavLink>
            </li>
          </ul>
          <div className="cta">
            <a
              href="#"
              className="cta__icon"
              id="search"
              onClick={(e) => _onShowSearch(e)}
            >
              <img srcSet="/assets/images/search-icon.png 2x" />
            </a>
          </div>
          <div className="hamburger" onClick={(e) => _onShowNavMenu(e)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <StyledHeaderSearchWrapper
            className={classNames("search", {
              active: showSearch,
            })}
          >
            <InputWrapper className="search__input">
              <Input
                ref={searchInput}
                placeholder="Search movies..."
                value={searchValue}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => _onChange(e.target.value)}
              />
            </InputWrapper>
            {debouncedSearchValue && (
              <ul className="search__results">
                {searchMoviesLoading && <ComponentLoading $bgTransparent />}
                {!searchMoviesLoading &&
                  searchMovies?.length > 0 &&
                  searchMovies?.map((movie, index) => {
                    const {
                      id,
                      poster_path: image,
                      release_date: releaseDate,
                      title,
                      overview,
                    } = movie || {};
                    const formatReleaseDate = formatDate(releaseDate || 0);
                    return (
                      <MovieItemSearch
                        key={id || index}
                        id={id}
                        image={image}
                        releaseDate={formatReleaseDate}
                        title={title}
                        overview={overview}
                      />
                    );
                  })}
              </ul>
            )}
          </StyledHeaderSearchWrapper>
        </div>
      </div>
    </StyledHeaderMiddleWrapper>
  );
};

export default HeaderMiddle;
