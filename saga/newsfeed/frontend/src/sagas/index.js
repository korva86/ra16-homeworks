import { retry, put, takeEvery, spawn } from 'redux-saga/effects';
import {fetchNews, firstFetchNews} from "../api";
import {FETCH_NEWS_REQUEST, FIRST_FETCH_NEWS_REQUEST} from "../actions/actionTypes";
import {fetchNewsError, fetchNewsSuccess} from "../actions/actionCreators";

function* handleFirstFetchNews() {
    try {
        const data = yield retry(3, 3000, firstFetchNews);
        yield put(fetchNewsSuccess(data))
    } catch (e) {
        yield put(fetchNewsError(e.message))
    }
}

function* watchFirstFetchNews() {
    yield takeEvery(FIRST_FETCH_NEWS_REQUEST, handleFirstFetchNews)
}

function* handleFetchNews(action) {
   try {
       const data = yield retry(3, 3000, fetchNews, action.payload.id);
       yield put(fetchNewsSuccess(data))
   } catch (e) {
       yield put(fetchNewsError(e.message))
   }
}

function* watchFetchNews() {
  yield takeEvery(FETCH_NEWS_REQUEST, handleFetchNews)
}

export default function* saga() {
    yield spawn(watchFirstFetchNews);
    yield spawn(watchFetchNews);
}