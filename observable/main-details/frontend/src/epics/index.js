import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError, tap, retry } from 'rxjs/operators';
import {DETAILS_SERVICE_REQUEST_EPIC, FETCH_SERVICES_REQUEST_EPIC} from "../actions/actionTypes";
import {
    detailsServiceFailureEpic,
    detailsServiceSuccessEpic,
    fetchServicesFailureEpic,
    fetchServicesSuccessEpic
} from "../actions/actionCreators";

export const fetchServicesEpic = action$ => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST_EPIC),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
        retry(1),
        map(o => fetchServicesSuccessEpic(o)),
        catchError(e => of(fetchServicesFailureEpic(e))),
    )),
);

export const detailsServiceEpic = action$ => action$.pipe(
    ofType(DETAILS_SERVICE_REQUEST_EPIC),
    tap(o => console.log(o)),
    map(o => o.payload.id),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o.id}`).pipe(
        retry(1),
        map(o => detailsServiceSuccessEpic(o)),
        catchError(e =>
            of(detailsServiceFailureEpic(e))
        ),
    )),
);