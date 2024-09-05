import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";
import { useMovieContext } from "../../context/MovieContext";
import useDebounce from "../../hooks/useDebounce";

function useHeader() {
  const searchInput = useRef();
  const { pathname } = useLocation();
  const [showDropdown, setShowDropDown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { handleShowNavMenu } = useMainContext();
  const { searchMovies, getMovieBySearch, searchMoviesLoading } =
    useMovieContext();
  const { handleShowModal, isLogin, currentUser, handleLogout } =
    useAuthContext();

  const handleShowDropDown = () => {
    setShowDropDown((prev) => !prev);
    document.body.addEventListener("click", () => setShowDropDown(false));
  };

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
    searchInput.current.focus();
    document.body.addEventListener("click", () => setShowSearch(false));
  };

  const handleSearchChange = (searchValue) => {
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

  const headerTopProps = {
    handleShowModal,
    isLogin,
    currentUser,
    handleLogout,
    handleShowDropDown,
    showDropdown,
  };
  const headerMiddleProps = {
    handleShowNavMenu,
    handleShowSearch,
    handleSearchChange,
    showSearch,
    debouncedSearchValue,
    searchMovies,
    searchMoviesLoading,
    searchValue,
    searchInput,
  };
  return { headerMiddleProps, headerTopProps };
}
export default useHeader;
