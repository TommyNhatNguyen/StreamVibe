import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Reviews from "./components/Reviews";
import useShowDetail from "./useShowDetail";
import MovieRecommendation from "../../components/MovieRecommendation";

const ShowDetailPage = () => {
  const { videoPlayerProps, reviewProps, movieRecommendationProps } =
    useShowDetail();
  return (
    <main className="showdetail">
      <VideoPlayer {...videoPlayerProps} />
      <Reviews {...reviewProps} />
      <MovieRecommendation {...movieRecommendationProps} />
    </main>
  );
};

export default ShowDetailPage;
