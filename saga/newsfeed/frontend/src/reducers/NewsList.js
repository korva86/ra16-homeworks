import {
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FIRST_FETCH_NEWS_REQUEST
} from "../actions/actionTypes";

const initialState = {
    news: [],
    loading: false,
    error: null,
    lastSeenId: undefined,
    fullFetched: false
};

export default function newsListReducer(state = initialState, action) {
    switch (action.type) {
        case FIRST_FETCH_NEWS_REQUEST:
        case FETCH_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_NEWS_FAILURE:
            const {error} = action.payload;
            return {...state, error: error, loading: false};
        case FETCH_NEWS_SUCCESS:
            const {news} = action.payload;
            try {
                if (news.length < 5) {
                    if(news.length === 0) {
                        return {...state, news: state.news.concat(news), loading: false, fullFetched: true}
                    }
                    return {...state, news: state.news.concat(news), loading: false, lastSeenId: news[news.length - 1].id, fullFetched: true};
                }
            } catch (e) {
                return {...initialState}
            }
            return {...state, news: state.news.concat(news), loading: false, lastSeenId: news[news.length - 1].id};
        default:
            return state
    }
}