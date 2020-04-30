import {
    ADD_SERVICE,
    CHANGE_EDIT_ID,
    CHANGE_SEARCH_FIELD,
    CHANGE_SERVICE_FIELD,
    CLEAR_SERVICE_FIELDS,
    REMOVE_SERVICE
} from "./actionTypes";

export function addService(name, price, editId) {
    return {
        type: ADD_SERVICE,
        payload: {name, price, editId}
    };
}

export function removeService(id) {
    return {
        type: REMOVE_SERVICE,
        payload: {id}
    };
}

export function changeServiceField(name, value) {
    return {
        type: CHANGE_SERVICE_FIELD,
        payload: {name, value}
    };
}

export function changeEditId(editId) {
    return {
        type: CHANGE_EDIT_ID,
        payload: {editId}
    }
}

export function clearServiceField() {
    return {
        type: CLEAR_SERVICE_FIELDS,
    }
}

export function searchService(searchValue) {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: {searchValue}
    }
}