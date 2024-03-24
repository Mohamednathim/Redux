import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../../actions/courseActions";

// export const fetchCourses = createAsyncThunk("courses/get", async () => {
//   const res = await fetch(
//     "https://65ffb4e5df565f1a61453bcb.mockapi.io/courses"
//   );
//   const data = await res.json();
//   return data;
// });

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchCourses.pending, (state) => {
    builder.addCase(FETCH_COURSES_REQUEST, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(FETCH_COURSES_SUCCESS, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(FETCH_COURSES_FAILURE, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const courseReducer = courseSlice.reducer;

export const {} = courseSlice.actions;
