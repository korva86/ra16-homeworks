import {
    ALERT_HIDE,
    ALERT_SHOW,
    AUTH_CHANGE_FIELD,
    AUTH_CLEAR_TOKEN,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    PRIVATE_CLEAR_PROFILE,
    PRIVATE_GET_PROFILE_END,
    PRIVATE_GET_PROFILE_START,
    PRIVATE_NEWS_REQUEST,
    PRIVATE_NEWS_SUCCESS
} from "./actionTypes";

export const authLoginRequest = () => ({
    type: AUTH_LOGIN_REQUEST,
});

export const authLoginFailure = (error) => ({
    type: AUTH_LOGIN_FAILURE,
    payload: {error}
});

export const authLoginSuccess = (token) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: {token}
});

export const authChangeField = (name, value) => ({
    type: AUTH_CHANGE_FIELD,
    payload: { name, value },
});

export const authClearToken = () => ({
    type: AUTH_CLEAR_TOKEN,
});

export const privateGetProfileStart = () => ({
    type: PRIVATE_GET_PROFILE_START,
});

export const privateGetProfileEnd = (profile) => ({
    type: PRIVATE_GET_PROFILE_END,
    payload: {profile}
});

export const privateClearProfile = () => ({
    type: PRIVATE_CLEAR_PROFILE,
});

export const privateNewsRequest = () => ({
    type: PRIVATE_NEWS_REQUEST,
});

export const privateNewsSuccess = (news) => ({
    type: PRIVATE_NEWS_SUCCESS,
    payload: {news}
});

export const alertShow = (text, type = 'warning') => ({
    type: ALERT_SHOW,
    payload: {text, type}
});

export const alertHide = () => ({
    type: ALERT_HIDE,
});

export const authLogout = () => async(dispatch) => {
    dispatch(authClearToken());
    localStorage.removeItem('userData');
    dispatch(privateClearProfile())
};

export const authSetToken = (token) => async(dispatch) => {
    localStorage.setItem('userData', JSON.stringify({
        token
    }));
    dispatch(authLoginSuccess(token))
};

export const authGetToken = () => async(dispatch) => {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data && data.token) {
        dispatch(authSetToken(data.token));
    }
};

export const authLogin = (form, history) => async(dispatch, getState) => {
    dispatch(authLoginRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...form}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        dispatch(authSetToken(data.token));
        history.push("/news");
    } catch (e) {
        dispatch(alertShow(e.message));
        dispatch(authLoginFailure(e.message))
    }
};

export const privateGetProfile = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    if (!token) { dispatch(authGetToken()) }
    if (token) {
        dispatch(privateGetProfileStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/private/me`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                if (response.status === 401) { dispatch(authLogout()) }
                throw new Error(response.statusText);
            }
            const data = await response.json();

            dispatch(privateGetProfileEnd(data));
        } catch (e) {
            dispatch(alertShow(e.message));
        }
    }
};

export const privateGetNews = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    if (!token) { dispatch(authGetToken()) }
    if (token) {
        dispatch(privateNewsRequest());
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/private/news`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                if (response.status === 401) { dispatch(authLogout()) }
                throw new Error(response.statusText);
            }

            const data = await response.json();


            dispatch(privateNewsSuccess(data));
        } catch (e) {
            dispatch(alertShow(e.message));
        }
    }
};
