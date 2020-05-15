import {FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FIRST_FETCH_NEWS_REQUEST} from "./actionTypes";

export const fetchNewsRequest = (id) => {
    return {
        type: FETCH_NEWS_REQUEST,
        payload: id
    }
};

export const fetchNewsError = (error) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: {error}
    }
};

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: {news}
    }
};

export const firstFetchNewsRequest = () => {
    return {
        type: FIRST_FETCH_NEWS_REQUEST,
    }
};
