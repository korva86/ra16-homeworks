import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import newsListReducer from "../reducers/NewsList";
import saga from "../sagas";

const rootReducer = combineReducers({
    newsList: newsListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(saga);

export default store;