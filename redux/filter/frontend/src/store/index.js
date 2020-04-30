import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceSearch from "../reducers/serviceSearch";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceSearch: serviceSearch,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;