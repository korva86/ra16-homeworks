import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import serviceListReducer from '../reducers/serviceList';
import serviceDetailsReducer from '../reducers/serviceDetails';
import {detailsServiceEpic, fetchServicesEpic} from "../epics";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceDetails: serviceDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    fetchServicesEpic,
    detailsServiceEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducer, composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(epic);

export default store;