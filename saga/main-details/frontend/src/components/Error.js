import React from 'react';

const Error = ({error, handleRetry}) => {
    return (
        <div className="alert alert-danger mt-3 d-flex justify-content-between">
            <p className="m-2">{error.toString()}</p>
            <button className="btn btn-dark" onClick={handleRetry}>Try again</button>
        </div>
    )
};

export default Error

//TypeError: Cannot destructure property 'error' of 'undefined' as it is undefined.