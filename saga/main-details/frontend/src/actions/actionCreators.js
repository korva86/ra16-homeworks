import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    DETAILS_SERVICE_SUCCESS,
    DETAILS_SERVICE_REQUEST,
    DETAILS_SERVICE_FAILURE, FETCH_SERVICES_REQUEST_SAGA, DETAILS_SERVICE_REQUEST_SAGA,
} from "./actionTypes";

export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesRequestSaga = () => ({
    type: FETCH_SERVICES_REQUEST_SAGA,
});


export const fetchServicesFailure = (error) => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {error}
});

export const fetchServicesFailureSaga = (error) => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {error}
});

export const fetchServicesSuccess = (items) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {items}
});

export const fetchServicesSuccessSaga = (items) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {items}
});

export const detailsServiceRequest = (id) => {
    return {
        type: DETAILS_SERVICE_REQUEST,
        payload: {id}
    }
};

export const detailsServiceRequestSaga = (id) => {
    return {
        type: DETAILS_SERVICE_REQUEST_SAGA,
        payload: {id}
    }
};

export const detailsServiceFailure = (error) => {
    return {
        type: DETAILS_SERVICE_FAILURE,
        payload: {error}
    }
};

export const detailsServiceFailureSaga = (error) => {
    return {
        type: DETAILS_SERVICE_FAILURE,
        payload: {error}
    }
};

export const detailsServiceSuccess = (item) => {
    return {
        type: DETAILS_SERVICE_SUCCESS,
        payload: {item}
    }
};

export const detailsServiceSuccessSaga = (item) => {
    return {
        type: DETAILS_SERVICE_SUCCESS,
        payload: {item}
    }
};

export const fetchServices = async (dispatch) => {
    dispatch(fetchServicesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchServicesSuccess(data));
    } catch (e) {
        dispatch(fetchServicesFailure(e.message));
    }
};

export const detailsService = async (dispatch, item) => {
    dispatch(detailsServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${item.id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(detailsServiceSuccess(data));
    } catch (e) {
        dispatch(detailsServiceFailure(e.message));
    }
};
