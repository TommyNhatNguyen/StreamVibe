import { AutoComplete, Input } from "antd";
import SearchComponent from "./components/SearchComponent";
import { Suspense, lazy, useEffect } from "react";
import $ from "jquery";
import Accordion from "./components/Accordion";
import { FAQ } from "./constants/general";
// import HomePage from "./pages/HomePage";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { MainContextWrapper } from "./context/MainContext";
import MobileMenu from "./components/MobileMenu";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./constants/paths";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailPage from "./pages/MovieDetailPage";
import ShowPage from "./pages/ShowPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import PageLoading from "./components/PageLoading";
import ProfilePage from "./pages/ProfilePage";
import MyWatchList from "./pages/ProfilePage/components/MyWatchList";
import MyFavorites from "./pages/ProfilePage/components/MyFavorites";
import MyRating from "./pages/ProfilePage/components/MyRating";
// import SupportPage from "./pages/SupportPage";
// import SubscriptionPage from "./pages/SubscriptionPage";
// import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const SubscriptionPage = lazy(() => import("./pages/SubscriptionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.MOVIE.INDEX} element={<MoviePage />} />
            <Route path={PATHS.MOVIE.DETAIL} element={<MovieDetailPage />} />
            <Route path={PATHS.SHOW.DETAIL} element={<ShowPage />} />
            <Route
              path={PATHS.MOVIE.PLAY.DETAIL}
              element={<ShowDetailPage />}
            />
            <Route path={PATHS.SUPPORT} element={<SupportPage />} />
            <Route path={PATHS.SUBSCRIPTION} element={<SubscriptionPage />} />
            <Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
              <Route index element={<MyWatchList />} />
              <Route path={PATHS.PROFILE.WATCHLIST} element={<MyWatchList />} />
              <Route path={PATHS.PROFILE.FAVORITES} element={<MyFavorites />} />
              <Route path={PATHS.PROFILE.RATING} element={<MyRating />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
