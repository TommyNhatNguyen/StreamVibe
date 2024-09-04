export const PATHS = {
  HOME: "/",
  MOVIE: {
    INDEX: "/movie",
    DETAIL: "/movie" + "/:movieId",
    PLAY: {
      INDEX: "/moviedetail",
      DETAIL: "/moviedetail" + "/:movieId",
    },
  },
  SHOW: {
    INDEX: "/show",
    DETAIL: "/show" + "/:showId",
  },
  SUPPORT: "/support",
  SUBSCRIPTION: "/subscription",
};

export const IMAGE_NOTFOUND_PATH = {
  poster: "/assets/images/poster-notfound.jpg",
  avatar: "/assets/images/default-avatar.jpg",
};
