import {
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_FAILURE,
    ADD_SERVICE_SUCCESS,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE_SUCCESS, EDIT_SERVICE_REQUEST,
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
    saveLoading: false,
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE_REQUEST:
            return { ...state, saveLoading: true, error: null };
        case ADD_SERVICE_FAILURE:
            const {error} = action.payload;
            return { ...state, saveLoading: false, loading: false, error };

        case ADD_SERVICE_SUCCESS:
            return { ...initialState };

        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            const { item } = state;
            return {
                ...state,
                item: {
                    ...item,
                    [name]: value }
            };
        case EDIT_SERVICE_REQUEST:
            return { ...state, loading: true, error: null };

        case EDIT_SERVICE_SUCCESS:
            const editItem = action.payload;
            return { ...state, ...editItem, loading: false, error: null };
        default:
            return state;
    }
}