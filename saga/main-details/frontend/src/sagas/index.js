import { takeEvery, take, put, spawn, retry, fork, call } from 'redux-saga/effects'
import {
    DETAILS_SERVICE_REQUEST_SAGA,
    FETCH_SERVICES_REQUEST_SAGA,
} from "../actions/actionTypes";
import {
    detailsServiceFailureSaga,
    detailsServiceSuccessSaga,
    fetchServicesFailureSaga,
    fetchServicesSuccessSaga,
} from "../actions/actionCreators";
import {fetchDetailsService, fetchServices} from "../api";

function* handleFetchServicesRequest() {
    try {
        const data = yield retry(3, 0, fetchServices);
        yield put(fetchServicesSuccessSaga(data))
    } catch (e) {
        yield put(fetchServicesFailureSaga(e.message))
    }
}

function* watchFetchServicesRequest() {
    yield takeEvery(FETCH_SERVICES_REQUEST_SAGA, handleFetchServicesRequest);
}

function* handleDetailsService(action) {
    try {
        const data = yield call(fetchDetailsService, action.payload.id);
        yield put(detailsServiceSuccessSaga(data))
    } catch (e) {
        yield put(detailsServiceFailureSaga(e.message))
    }
}

function* watchDetailsService() {
    // const action = yield take(DETAILS_SERVICE_REQUEST_SAGA);
    // yield fork(handleDetailsService, action)
    yield takeEvery(DETAILS_SERVICE_REQUEST_SAGA, handleDetailsService)
}

export default function* saga() {
    yield spawn(watchFetchServicesRequest);
    yield spawn(watchDetailsService)
}