import { takeLatest, put, spawn, debounce, retry, cancelled } from 'redux-saga/effects'
import {CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST} from "../actions/actionTypes";
import {searchSkillsFailure, searchSkillsRequest, searchSkillsSuccess} from "../actions/actionCreators";
import {searchSkills} from "../api";

function filterChangeSearchAction({type, payload}) {
    return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== ''
}

function* handleChangeSearchSaga(action) {
    yield put(searchSkillsRequest(action.payload.search));
}

function* watchChangeSearchSaga() {
    yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
}

function* handleSearchSkillsSaga(action) {
    const abortController = new AbortController();
    try {
        const retryCount = 3;
        const retryDelay = 1000;
        const data = yield retry(retryCount, retryDelay, searchSkills, abortController.signal, action.payload.search);
        yield put(searchSkillsSuccess(data))
    } catch (e) {
        yield put(searchSkillsFailure(e.message))
    } finally {
        if (yield(cancelled())) {
            abortController.abort();
        }
    }
}

function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga)
}