import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS,
    AUTH_CHANGE_FIELD,
    AUTH_CLEAR_TOKEN
} from '../actions/actionTypes'

const initialState = {
    user: {
        login: "",
        password: "",
    },
    token: null,
    error: null,
    authLoading: false,
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return {...state, authLoading: true, error: null};
        case AUTH_LOGIN_FAILURE:
            const {error} = action.payload;
            return {...state, authLoading: false, error: error};
        case AUTH_LOGIN_SUCCESS:
            const {token} = action.payload;
            return {...state, token, isAuthenticated: true, authLoading: false, error: null};
        case AUTH_CLEAR_TOKEN:
            return {...initialState};
        case AUTH_CHANGE_FIELD:
            const { name, value } = action.payload;
            const { user } = state;
            return {
                ...state,
                user: {
                    ...user,
                    [name]: value }
            };

        default:
            return state
    }
}