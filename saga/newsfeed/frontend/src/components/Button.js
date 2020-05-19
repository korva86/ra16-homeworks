import React from 'react';
import {useSelector} from "react-redux";

function Button({fetchHandler}) {
    const {loading, fullFetched} = useSelector(state => state.newsList);

    if (loading) {
        return (
            <button className="btn btn-primary mt-2">
                <span className="spinner-border spinner-border-sm"/>
            </button>
        )
    }

    return (
        !fullFetched && <button onClick={fetchHandler} className="btn btn-primary mt-2">к предыдущим записям</button>
    )
}

export default Button;