import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    REMOVE_SERVICE_REQUEST, REMOVE_SERVICE_FAILURE, REMOVE_SERVICE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null,
    deleteLoading: [],
};

export default function serviceListReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            return {...state, loading: true, error: null};

        case FETCH_SERVICES_FAILURE:
            const {error} = action.payload;
            return {...state, loading: false, error};

        case FETCH_SERVICES_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loading: false, error: null};

        case REMOVE_SERVICE_REQUEST:
            const id = action.payload;
            return {...state, deleteLoading: [...state.deleteLoading, id], error: null};
        case REMOVE_SERVICE_FAILURE:
            return {...state, deleteLoading: [], error: action.payload.error};
        case REMOVE_SERVICE_SUCCESS:
            return {...state, deleteLoading: [], error: null};
        default:
            return state;
    }
}