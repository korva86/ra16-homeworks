import React, {useContext} from 'react';
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
    const {hide, alert} = useContext(AlertContext);

    if (!alert.visible) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Warning!</strong>
            &nbsp;{alert.text}
            <button onClick={hide} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

export default Alert;