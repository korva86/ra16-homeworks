import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError, distinctUntilChanged } from 'rxjs/operators';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map(action => action.payload.search.trim()),
    filter(o => o !== ''),
    debounceTime(100),
    distinctUntilChanged(),
    tap(o => console.log(o)),
    map(o => searchSkillsRequest(o))
);

export const searchSkillsEpic = action$ => action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map(o => o.payload.search),
    map(o => new URLSearchParams({ q: o })),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
        retry(3),
        map(o => searchSkillsSuccess(o)),
        catchError(e => of(searchSkillsFailure(e))),
    )),
);