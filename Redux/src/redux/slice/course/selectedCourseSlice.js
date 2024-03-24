import { createSlice } from "@reduxjs/toolkit";

const selectedCourseSlice = createSlice({
  name: "selectedCourse",
  initialState: {},
  reducers: {
    setSelectedCourse: (state, action) => action.payload,
  },
});

export const selectedCourseReducer = selectedCourseSlice.reducer;
export const { setSelectedCourse } = selectedCourseSlice.actions;
