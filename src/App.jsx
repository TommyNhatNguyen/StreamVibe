import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./constants/paths";
import ShowPage from "./pages/ShowPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import PageLoading from "./components/PageLoading";
import ProfilePage from "./pages/ProfilePage";
import MyWatchList from "./pages/ProfilePage/components/MyWatchList";
import MyFavorites from "./pages/ProfilePage/components/MyFavorites";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const SubscriptionPage = lazy(() => import("./pages/SubscriptionPage"));

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
            <Route element={<PrivacyRoute />}>
              <Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
                <Route index element={<MyWatchList />} />
                <Route
                  path={PATHS.PROFILE.WATCHLIST}
                  element={<MyWatchList />}
                />
                <Route
                  path={PATHS.PROFILE.FAVORITES}
                  element={<MyFavorites />}
                />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
