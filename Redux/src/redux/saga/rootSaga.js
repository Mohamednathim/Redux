import { all } from "redux-saga/effects";
import { watchFetchCourse } from "./courseSaga";
import { watchFetchPlaylist } from "./playlistSaga";

export const rootSaga = function* () {
  yield all([watchFetchCourse(), watchFetchPlaylist()]);
};
