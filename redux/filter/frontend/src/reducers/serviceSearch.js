import {CHANGE_SEARCH_FIELD} from '../actions/actionTypes';

const initialState = {
    searchValue: '',
};

export default function serviceSearchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            const {searchValue} = action.payload;
            return {...state, searchValue};
        default:
            return state;
    }
}