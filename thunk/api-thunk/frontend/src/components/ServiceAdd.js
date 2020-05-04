import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeServiceField, addService, addServiceSuccess} from '../actions/actionCreators';
import {useHistory} from "react-router-dom";

function ServiceAdd() {
    const {item, saveLoading, error} = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addService(item, history));
    };

    const handleCancelEdit = () => {
        dispatch(addServiceSuccess());
        history.push('/services')
    };

    return (
        <form onSubmit={handleSubmit} className="form-inline mt-3 mb-3">
            <input name='name' onChange={handleChange} value={item.name} disabled={saveLoading} className="form-control mr-2" />
            <input name='price' onChange={handleChange} value={item.price} disabled={saveLoading} className="form-control mr-2" />
            <button type='submit' disabled={saveLoading} className="btn btn-primary mr-2" >Save</button>
            <button type='button' onClick={handleCancelEdit} className="btn btn-secondary" disabled={saveLoading} >Cancel</button>
            {error && <div className="alert alert-danger mb-2">{error}, try again</div>}
        </form>
    )
}

export default ServiceAdd;