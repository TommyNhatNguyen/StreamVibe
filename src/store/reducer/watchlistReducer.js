import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { favoritesService } from "../../services/favoritesService";
import { sessionMethod } from "../../utils/sessionMethod";
import { message } from "antd";
import { watchlistService } from "../../services/watchlistService";

const initialState = {
  watchlist: [],
  loading: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    handleResetWatchList: (state, action) => {
      state.watchlist = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWatchList.fulfilled, (state, action) => {
        state.watchlist = action.payload;
        state.loading = false;
      })
      .addCase(getWatchList.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getWatchList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addWatchList.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addWatchList.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addWatchList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeWatchList.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeWatchList.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(removeWatchList.pending, (state, action) => {
        state.loading = true;
      });
  },
});

const { actions, reducer: watchlistReducer } = watchlistSlice;
export const { handleResetWatchList } = actions;
export default watchlistReducer;

export const getWatchList = createAsyncThunk(
  "profile/getWatchList",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await watchlistService.getWatchList({
          ...currentSessionId,
          sort_by: "created_at.desc",
        });
        if (res?.data) {
          return res?.data?.results;
        }
      } else {
        message.warning("Login to add to watchlist");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to get watchlist");
      rejectWithValue(error);
    }
  }
);

export const addWatchList = createAsyncThunk(
  "profile/addWatchList",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const _payload = {
        media_type: "movie",
        media_id: payload.movieId,
        watchlist: true,
      };
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await watchlistService.addWatchList(
          currentSessionId,
          _payload
        );
        if (res) {
          dispatch(getWatchList());
          message.success("Add to watchlist successfully");
        }
      } else {
        message.warning("Login to add to watchlist");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to add to watchlist");
      rejectWithValue(error);
    }
  }
);

export const removeWatchList = createAsyncThunk(
  "profile/removeWatchList",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const _payload = {
        media_type: "movie",
        media_id: payload.movieId,
        watchlist: false,
      };
      const currentSessionId = sessionMethod.get();
      if (currentSessionId) {
        const res = await watchlistService.addWatchList(
          currentSessionId,
          _payload
        );
        if (res) {
          dispatch(getWatchList());
          message.success("Remove from watchlist  successfully");
        }
      } else {
        message.warning("Login to remove from watchlist ");
      }
    } catch (error) {
      console.log(error);
      message.error("Fail to remove from watchlist ");
      rejectWithValue(error);
    }
  }
);
