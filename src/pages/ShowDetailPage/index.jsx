import React, { useEffect, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import MovieRecommendation from "./components/MovieRecommendation";
import Reviews from "./components/Reviews";
import { useLocation, useParams } from "react-router-dom";
import useShowDetail from "./useShowDetail";

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
