export const FAQ = [
  {
    title: "What is StreamVibe?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How much does StreamVibe cost?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What content is available on StreamVibe?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How can I watch StreamVibe?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How do I sign up for StreamVibe?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What is the StreamVibe free trial?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How do I contact StreamVibe customer support?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What are the StreamVibe payment methods?",
    info: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
];

export const PRICE_PLANS = {
  monthly: [
    {
      title: "Basic Plan",
      content: `Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.`,
      price: 9.99,
      type: "month",
    },
    {
      title: "Standard Plan",
      content: `Access to a wider selection of movies and shows, including most new releases and exclusive content`,
      price: 12.99,
      type: "month",
    },
    {
      title: "Premium Plan",
      content: `Access to a widest selection of movies and shows, including all new releases and Offline Viewing`,
      price: 14.99,
      type: "month",
    },
  ],
  yearly: [
    {
      title: "Basic Plan",
      content: `Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.`,
      price: 119.99,
      type: "year",
    },
    {
      title: "Standard Plan",
      content: `Access to a wider selection of movies and shows, including most new releases and exclusive content`,
      price: 155.99,
      type: "year",
    },
    {
      title: "Premium Plan",
      content: `Access to a widest selection of movies and shows, including all new releases and Offline Viewing`,
      price: 179.99,
      type: "year",
    },
  ],
};

export const PRICE_PLANS_TABLE = {
  types: ["basic", "standard", "premium"],
  price: [9.99, 12.99, 14.99],
  content: [
    "Access to a wide selection of movies and shows, including some new releases.",
    "Access to a wide selection of movies and shows, including some new releases.",
    "Access to a wide selection of movies and shows, including some new releases.",
  ],
  devices: [
    "Watch on one device simultaneously",
    "Watch on Two device simultaneously",
    "Watch on Four device simultaneously",
  ],
  trial: ["7 Days", "7 Days", "7 Days"],
  cancel: ["Yes", "Yes", "Yes"],
  hdr: ["No", "Yes", "Yes"],
  dolby: ["No", "Yes", "Yes"],
  ad: ["No", "Yes", "Yes"],
  offline: ["No", "Yes, for select titles.", "Yes, for all titles."],
  family: [
    "No",
    "Yes, up to 5 family members.",
    "Yes, up to 6 family members.",
  ],
};

export const HOME_PATHS = [
  { id: "explore", value: "Categories" },
  { id: "experience", value: "Devices" },
  { id: "pricing", value: "Pricing" },
  { id: "faq", value: "FAQ" },
];

export const MOVIE_PATHS = [
  { id: "genres", value: "Gernes" },
  { id: "trending", value: "Trending" },
  { id: "new", value: "New Release" },
  { id: "popular", value: "Popular" },
];

export const SORTING_BY = [
  {
    id: "none",
    value: "",
    label: "----",
  },
  {
    id: "popularity_asc",
    value: "popularity.asc",
    label: "Popularity (Low to High)",
  },
  {
    id: "popularity_desc",
    value: "popularity.desc",
    label: "Popularity (High to Low)",
  },
  { id: "revenue_asc", value: "revenue.asc", label: "Revenue (Low to High)" },
  { id: "revenue_desc", value: "revenue.desc", label: "Revenue (High to Low)" },
  {
    id: "primary_release_date_asc",
    value: "primary_release_date.asc",
    label: "Date (Old to New)",
  },
  {
    id: "primary_release_date_desc",
    value: "primary_release_date.desc",
    label: "Date (New to Old)",
  },
  { id: "title_asc", value: "title.asc", label: "Title (A - Z)" },
  { id: "title_desc", value: "title.desc", label: "Title (Z - A)" },
];

export const youtubePath = (key) => {
  return `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&modestbranding&playlist=${key}&showinfo=0`;
};

export const youtubePathSound = (key) => {
  return `https://www.youtube.com/embed/${key}?autoplay=1&mute=0&controls=0&loop=1&modestbranding&playlist=${key}&showinfo=0`;
};
