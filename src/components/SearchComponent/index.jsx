import { Empty, Input } from "antd";
import React, { forwardRef, useState } from "react";
import { InputWrapper } from "../StyledComponents/InputWrapper";
import { MovieItemSearch } from "../MovieItem";
import ComponentLoading from "../ComponentLoading";
import { formatDate } from "../../utils/format";
import { StyledSearchResults } from "../StyledComponents/StyledSearchResults";
import classNames from "classnames";

const SearchComponent = ({
  debouncedSearchValue,
  searchMovies,
  searchMoviesLoading,
  handleSearch,
  searchValue,
  ...props
}) => {
  const [showResults, setShowResults] = useState(true);
  const _onHideResults = () => {
    setShowResults(false);
  };
  const _onSearch = (e) => {
    handleSearch(e.target.value);
    setShowResults(true);
  };
  return (
    <InputWrapper className="search__input" {...props}>
      <Input
        placeholder="Search movies..."
        value={searchValue}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => _onSearch(e)}
      />
      {debouncedSearchValue && (
        <StyledSearchResults
          className={classNames("search__results", {
            "--hidden": !showResults,
          })}
          onClick={() => _onHideResults()}
        >
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
          {searchMovies?.length < 1 && !searchMoviesLoading && (
            <Empty description="Movies not found" />
          )}
        </StyledSearchResults>
      )}
    </InputWrapper>
  );
};

export default SearchComponent;
