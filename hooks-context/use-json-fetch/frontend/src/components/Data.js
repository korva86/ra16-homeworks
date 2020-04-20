import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

export default ({url}) => {
    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_BASE_URL}${url}`);
    if(loading) {
        return <p>Loading...</p>
    }
    if (data) {
        return <p>{data.status}</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }
    return null
}