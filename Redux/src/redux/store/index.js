import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "../slice/course/courseSlice";
import { selectedCourseReducer } from "../slice/course/selectedCourseSlice";
import { playlistReducer } from "../slice/playlist/playlistSlice";
import { selectedPlaylistReducer } from "../slice/playlist/selectedPlaylistSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    courses: courseReducer,
    selectedCourse: selectedCourseReducer,
    playlists: playlistReducer,
    selectedPlaylist: selectedPlaylistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
export default store;
