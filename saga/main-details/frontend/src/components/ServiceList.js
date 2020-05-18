import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServices, fetchServicesRequestSaga} from '../actions/actionCreators';
import {Link} from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

function ServiceList() {
    const {items, loading, error} = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServices(dispatch)
    }, [dispatch]);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error error={error} handleRetry={() => dispatch(fetchServicesRequestSaga())} />
    }

    return (
        <>
            <div className="col-lg-6 pl-0 mt-3 mb-3">
                <ul className="list-group">
                    {items && items.map(o =>
                        <li key={o.id} className="list-group-item d-flex align-items-center justify-content-between">
                            <Link to={`/${o.id}/services`}>
                                {o.name}
                            </Link>
                        </li>)}
                </ul>
            </div>
        </>
    )
}

export default ServiceList;