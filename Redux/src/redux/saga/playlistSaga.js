import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
} from "../actions/playlistActions";

const fetchPlaylists = async () => {
  const res = await fetch(
    "https://65ffb4e5df565f1a61453bcb.mockapi.io/playlists"
  );
  const data = await res.json();
  return data;
};

function* fetchPlaylistsSaga() {
  try {
    const data = yield call(fetchPlaylists);
    yield put(FETCH_PLAYLIST_SUCCESS(data));
  } catch (err) {
    yield put(FETCH_PLAYLIST_FAILURE(err));
  }
}

export function* watchFetchPlaylist() {
  yield takeEvery(FETCH_PLAYLIST_REQUEST, fetchPlaylistsSaga);
}
