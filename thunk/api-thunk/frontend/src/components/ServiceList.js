import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    editServices,
    fetchServices,
    removeService
} from '../actions/actionCreators';
import {useHistory} from "react-router-dom";
import Loader from "./Loader";

function ServiceList() {
    const {items, loading, error, deleteLoading} = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch]);

    const handleRemove = useRef(id => {
        dispatch(removeService(id));
    });


    const handleEdit = (item) => {
        dispatch(editServices(item));
        history.push(`/services/${item.id}`);
    };

    const handleAddPage = () => {
        history.push(`/services/api/add`);
    };

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <div className="alert alert-danger">{error}, try again</div>;
    }

    return (
        <>
            <div className="col-lg-6 pl-0 mt-3 mb-3">
                <ul className="list-group">
                    {items.map(o =>
                        <li key={o.id} className="list-group-item d-flex align-items-center justify-content-between">
                            {o.name} - {o.price}
                            <span className="text-nowrap">
                            { deleteLoading.includes(o.id) ? <button className="btn btn-danger" ><span
                                    className="spinner-border spinner-border-sm"/></button> :
                                <>
                                    <button onClick={() => handleEdit(o)} className="btn btn-danger ml-2 mr-2">✎</button>
                                    <button onClick={() => handleRemove.current(o.id)} className="btn btn-danger" >&times;</button>
                                </>
                            }
                        </span>
                        </li>)}
                </ul>
            </div>
            <button className="btn btn-danger" type="button" onClick={handleAddPage}>Add</button>
        </>


    )
}

export default ServiceList;