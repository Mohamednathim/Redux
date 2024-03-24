import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../actions/courseActions";

const fetchCourses = async () => {
  const res = await fetch(
    "https://65ffb4e5df565f1a61453bcb.mockapi.io/courses"
  );
  const data = await res.json();
  return data;
};

function* fetchCoursesSaga() {
  try {
    const data = yield call(fetchCourses);
    yield put(FETCH_COURSES_SUCCESS(data));
  } catch (err) {
    yield put(FETCH_COURSES_FAILURE(err));
  }
}

export function* watchFetchCourse() {
  yield takeEvery(FETCH_COURSES_REQUEST, fetchCoursesSaga);
}
