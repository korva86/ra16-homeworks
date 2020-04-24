import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...action.payload, visible: true};
        case HIDE_ALERT:
            return {...state, visible: false};
        default: return state
    }
};