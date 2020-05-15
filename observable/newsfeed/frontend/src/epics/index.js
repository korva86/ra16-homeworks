import {ofType} from 'redux-observable';
import {tap, map, switchMap, retry, catchError, retryWhen, take, delay} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {FETCH_NEWS_REQUEST, FIRST_FETCH_NEWS_REQUEST} from "../actions/actionTypes";
import {fetchNewsError, fetchNewsSuccess} from "../actions/actionCreators";

export const fetchNewsEpic = action$ => action$.pipe(
    ofType(FETCH_NEWS_REQUEST),
    map(action => action.payload),
    map(id => new URLSearchParams({lastSeenId: id})),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}?${o}`).pipe(
        map(o => fetchNewsSuccess(o)),
        retryWhen(errors => errors.pipe(
            tap(o => console.log(o)),
            take(10),
            delay(3000),
        )),
        catchError(e => of(fetchNewsError(e))),
    )),
);

export const firstFetchNewsEpic = action$ => action$.pipe(
    ofType(FIRST_FETCH_NEWS_REQUEST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
        map(o => fetchNewsSuccess(o)),
        retry(1),
        catchError(e => of(fetchNewsError(e))),
    )),
);