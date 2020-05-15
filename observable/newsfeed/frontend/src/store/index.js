import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable'

import {fetchNewsEpic, firstFetchNewsEpic} from "../epics";
import newsListReducer from "../reducers/NewsList";


const rootReducer = combineReducers({
    newsList: newsListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    fetchNewsEpic,
    firstFetchNewsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(epic);

export default store;