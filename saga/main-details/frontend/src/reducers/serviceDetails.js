import {
    DETAILS_SERVICE_REQUEST,
    DETAILS_SERVICE_FAILURE,
    DETAILS_SERVICE_SUCCESS, DETAILS_SERVICE_REQUEST_SAGA
} from '../actions/actionTypes';

const initialState = {
    item: {
        name: '',
        price: '',
        content: '',
        id: null
    },
    loading: false,
    error: null,
};

export default function serviceDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS_SERVICE_REQUEST_SAGA:
        case DETAILS_SERVICE_REQUEST:
            return { ...state, loading: true, error: null };

        case DETAILS_SERVICE_FAILURE:
            const {error} = action.payload;
            return { ...state, loading: false, error };

        case DETAILS_SERVICE_SUCCESS:
            const editItem = action.payload;
            return { ...state, ...editItem, loading: false, error: null };
        default:
            return state;
    }
}