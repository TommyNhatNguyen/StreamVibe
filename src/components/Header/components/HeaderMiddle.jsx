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
  &.active {
    visibility: 1;
    opacity: 1;
    pointer-events: initial;
  }
  .header__search-input {
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
  .header__search-results {
    background-color: var(--white-cl);
    border-radius: 12px;
    margin-top: 12px;
    padding: 12px;
    a {
      &:not(:last-child) {
        margin-bottom: 12px;
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
    <div className="header-middle">
      <div className="container" style={{ position: "relative" }}>
        {/* Logo */}
        <Link to={PATHS.HOME} className="header__logo">
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
        {/* Nav */}
        <ul className="header__nav">
          <li className="header__nav-item">
            <NavLink end to={PATHS.HOME}>
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={PATHS.MOVIE.INDEX}>Movies & Shows</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={PATHS.SUPPORT}>Support</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={PATHS.SUBSCRIPTION}>Supscriptions</NavLink>
          </li>
        </ul>
        <div className="header__cta-group">
          <a
            href="#"
            className="icon"
            id="search"
            onClick={(e) => _onShowSearch(e)}
          >
            <img srcSet="/assets/images/search-icon.png 2x" />
          </a>
        </div>
        {/* Hamburger */}
        <div className="header__hamburg" onClick={(e) => _onShowNavMenu(e)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <StyledHeaderSearchWrapper
          className={classNames("header__search", {
            active: showSearch,
          })}
        >
          <InputWrapper className="header__search-input">
            <Input
              ref={searchInput}
              placeholder="Search movies..."
              value={searchValue}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => _onChange(e.target.value)}
            />
          </InputWrapper>
          {debouncedSearchValue && (
            <CategoryGroup
              classes="header__search-results --horizontal --search"
              style={{
                position: "relative",
                minHeight: "300px",
                maxHeight: "1000px",
                overflowY: "scroll",
              }}
            >
              {searchMoviesLoading && <ComponentLoading $bgTransparent />}
              {!searchMoviesLoading &&
                searchMovies?.length > 0 &&
                searchMovies?.map((movie, index) => {
                  const {
                    id,
                    poster_path: image,
                    release_date: releaseDate,
                    original_title: title,
                    overview,
                  } = movie || {};
                  const formatReleaseDate = formatDate(releaseDate || 0);
                  return (
                    <CategoryGroup.ItemSearch
                      key={id || index}
                      id={id}
                      image={image}
                      releaseDate={formatReleaseDate}
                      title={title}
                      overview={overview}
                    />
                  );
                })}
            </CategoryGroup>
          )}
        </StyledHeaderSearchWrapper>
      </div>
    </div>
  );
};

export default HeaderMiddle;
