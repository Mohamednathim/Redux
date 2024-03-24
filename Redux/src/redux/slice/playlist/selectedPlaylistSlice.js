import { createSlice } from "@reduxjs/toolkit";

const selectedPlaylistSlice = createSlice({
  name: "selectedPlaylist",
  initialState: {},
  reducers: {
    setSelectedPlaylist: (state, action) => action.payload,
  },
});
export const selectedPlaylistReducer = selectedPlaylistSlice.reducer;
export const { setSelectedPlaylist } = selectedPlaylistSlice.actions;
