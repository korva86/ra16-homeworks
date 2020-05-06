import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import privateReducer from "../reducers/privateReducer";
import {alertReducer} from "../reducers/alertReducer";

const reducer = combineReducers({
    auth: authReducer,
    private: privateReducer,
    alert: alertReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;