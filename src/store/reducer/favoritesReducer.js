import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { favoritesService } from "../../services/favoritesService";
import { sessionMethod } from "../../utils/sessionMethod";
import { message } from "antd";

const initialState = {
  favorites: [],
  loading: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    handleResetFavoritesMovies: (state, action) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritesMovies.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loading = false;
      })
      .addCase(getFavoritesMovies.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getFavoritesMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addFavoritesMovies.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addFavoritesMovies.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addFavoritesMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeFavoritesMovies.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeFavoritesMovies.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(removeFavoritesMovies.pending, (state, action) => {
        state.loading = true;
      });
  },
});

const { actions, reducer: favoritesReducer } = favoritesSlice;
export const { handleResetFavoritesMovies } = actions;
export default favoritesReducer;

export const getFavoritesMovies = createAsyncThunk(
  "profile/getFavoritesMovies",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await favoritesService.getFavoritesMovies({
          ...currentSessionId,
          sort_by: "created_at.desc",
        });
        if (res?.data) {
          return res?.data?.results;
        }
      } else {
        message.warning("Login to add to favorite list");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to get favorites list");
      rejectWithValue(error);
    }
  }
);

export const addFavoritesMovies = createAsyncThunk(
  "profile/addFavoritesMovies",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const _payload = {
        media_type: "movie",
        media_id: payload.movieId,
        favorite: true,
      };
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await favoritesService.addFavoritesMovies(
          currentSessionId,
          _payload
        );
        if (res) {
          dispatch(getFavoritesMovies());
          message.success("Add to favorites list successfully");
        }
      } else {
        message.warning("Login to add to favorite list");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to add to favorites list");
      rejectWithValue(error);
    }
  }
);

export const removeFavoritesMovies = createAsyncThunk(
  "profile/removeFavoritesMovies",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const _payload = {
        media_type: "movie",
        media_id: payload.movieId,
        favorite: false,
      };
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await favoritesService.addFavoritesMovies(
          currentSessionId,
          _payload
        );
        if (res) {
          dispatch(getFavoritesMovies());
          message.success("Remove from favorites list successfully");
        }
      } else {
        message.warning("Login to remove fromt favorite list");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to remove from favorites list");
      rejectWithValue(error);
    }
  }
);
