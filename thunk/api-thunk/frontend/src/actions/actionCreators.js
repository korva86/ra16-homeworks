import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    CHANGE_SERVICE_FIELD,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_FAILURE,
    REMOVE_SERVICE_REQUEST,
    REMOVE_SERVICE_FAILURE,
    REMOVE_SERVICE_SUCCESS,
    ADD_SERVICE_SUCCESS, EDIT_SERVICE_REQUEST, EDIT_SERVICE_SUCCESS
} from "./actionTypes";

export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST
});

export const fetchServicesFailure = (error) => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {error}
});

export const fetchServicesSuccess = (items) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {items}
});

export const changeServiceField = (name, value) => ({
    type: CHANGE_SERVICE_FIELD,
    payload: { name, value },
});

export const editServicesRequest = () => {
    return {
        type: EDIT_SERVICE_REQUEST,
    }
};

export const editServicesSuccess = (item) => {
    return {
        type: EDIT_SERVICE_SUCCESS,
        payload: {item}
    }
};

export const removeServiceRequest = (id) => ({
    type: REMOVE_SERVICE_REQUEST,
    payload: id
});

export const removeServiceFailure = (error) => ({
    type: REMOVE_SERVICE_FAILURE,
    payload: {error}
});

export const removeServiceSuccess = (id) => ({
    type: REMOVE_SERVICE_SUCCESS,
    payload: id
});

export const addServiceRequest = () => ({
    type: ADD_SERVICE_REQUEST
});

export const addServiceFailure = (error) => ({
    type: ADD_SERVICE_FAILURE,
    payload: {error}
});

export const addServiceSuccess = () => ({
    type: ADD_SERVICE_SUCCESS,
});

export const fetchServices = () => async (dispatch) => {
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

export const editServices = (item, signal) => async (dispatch) => {
    dispatch(editServicesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${item.id}`, {signal});
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(editServicesSuccess(data));
    } catch (e) {
        dispatch(addServiceFailure(e.message));
    }
};

export const saveService = (item) => async (dispatch) => {
    dispatch(addServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${item.id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...item}),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        dispatch(addServiceSuccess());

    } catch (e) {
        dispatch(addServiceFailure(e.message));
    }
};

export const addService = (item, history) => async (dispatch) => {
    dispatch(addServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...item}),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        dispatch(addServiceSuccess());

    } catch (e) {
        dispatch(addServiceFailure(e.message));
    }
    history.push('/services')
};

export const removeService = (id) => async (dispatch) => {
    dispatch(removeServiceRequest(id));
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        dispatch(removeServiceSuccess());

    } catch (e) {
        dispatch(removeServiceFailure(e.message));
    }
    dispatch(fetchServices());
};