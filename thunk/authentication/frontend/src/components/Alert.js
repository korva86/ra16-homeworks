import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {alertHide} from "../actions/actionCreators";

const Alert = () => {
    const {visible, type, text} = useSelector(state => state.alert);
    const dispatch = useDispatch();
    if (!visible) {
        return null
    }

    return (
        <div className={`alert alert-${type || 'warning'} alert-dismissible`}>
            <strong>Warning!</strong>
            &nbsp;{text}
            <button onClick={() => dispatch(alertHide())} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

export default Alert
