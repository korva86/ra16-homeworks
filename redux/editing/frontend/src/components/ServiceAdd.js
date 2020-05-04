import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeServiceField, addService, clearServiceField} from '../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addService(item.name, item.price, item.editId));
    };

    const handleCancelEdit = () => {
        dispatch(clearServiceField())
    };

    return (
        <form onSubmit={handleSubmit} className="form-inline mt-3 mb-3">
            <input name='name' onChange={handleChange} value={item.name} className="form-control mr-2"/>
            <input name='price' onChange={handleChange} value={item.price} className="form-control mr-2 mt-2 mt-sm-0" />
            <button type='submit' className="btn btn-primary mr-2 mt-2 mt-sm-0" >Save</button>
            {item.editId && <button type='button' onClick={handleCancelEdit} className="btn btn-secondary mt-2 mt-sm-0">Cancel</button>}
        </form>
    )
}

export default ServiceAdd;