import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../../data";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
} from "../../actions/playlistActions";

// export const fetchPlaylists = createAsyncThunk("playlists/get", async () => {
//   const res = await fetch(
//     "https://65ffb4e5df565f1a61453bcb.mockapi.io/playlists"
//   );
//   const data = await res.json();
//   return data;
// });

const playlistSlice = createSlice({
  name: "playlists",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FETCH_PLAYLIST_REQUEST, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(FETCH_PLAYLIST_SUCCESS, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(FETCH_PLAYLIST_FAILURE, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const playlistReducer = playlistSlice.reducer;
export const {} = playlistSlice.actions;
