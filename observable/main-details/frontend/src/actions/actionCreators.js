import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    DETAILS_SERVICE_SUCCESS,
    DETAILS_SERVICE_REQUEST,
    DETAILS_SERVICE_FAILURE, FETCH_SERVICES_REQUEST_EPIC, DETAILS_SERVICE_REQUEST_EPIC,
} from "./actionTypes";

export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesRequestEpic = () => ({
    type: FETCH_SERVICES_REQUEST_EPIC,
});


export const fetchServicesFailure = (error) => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {error}
});

export const fetchServicesFailureEpic = (error) => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {error}
});

export const fetchServicesSuccess = (items) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {items}
});

export const fetchServicesSuccessEpic = (items) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {items}
});

export const detailsServiceRequest = (id) => {
    return {
        type: DETAILS_SERVICE_REQUEST,
        payload: {id}
    }
};

export const detailsServiceRequestEpic = (id) => {
    return {
        type: DETAILS_SERVICE_REQUEST_EPIC,
        payload: {id}
    }
};

export const detailsServiceFailure = (error) => {
    return {
        type: DETAILS_SERVICE_FAILURE,
        payload: {error}
    }
};

export const detailsServiceFailureEpic = (error) => {
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

export const detailsServiceSuccessEpic = (item) => {
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
