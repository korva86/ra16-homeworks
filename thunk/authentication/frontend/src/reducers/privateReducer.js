import {
    PRIVATE_CLEAR_PROFILE,
    PRIVATE_GET_PROFILE_END,
    PRIVATE_GET_PROFILE_START,
    PRIVATE_NEWS_REQUEST, PRIVATE_NEWS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    profile: {},
    news: [],
    loading: false,
    error: null,
};

export default function privateReducer(state = initialState, action) {
    switch (action.type) {
        case PRIVATE_GET_PROFILE_START:
            return {...state, loading: true, error: null};
        case PRIVATE_GET_PROFILE_END:
            return {...state, profile: {
                    ...state.profile, ...action.payload.profile
                },
                loading: false, error: null,};
        case PRIVATE_CLEAR_PROFILE:
            return {...initialState};
        case PRIVATE_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case PRIVATE_NEWS_SUCCESS:
            const { news } = action.payload;
            return {...state, news: [
                    ...state.news, ...news
                ], loading: false, error: null};
        default:
            return state
    }
}