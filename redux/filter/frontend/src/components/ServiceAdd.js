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
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
            {item.editId && <button type='button' onClick={handleCancelEdit}>Cancel</button>}
        </form>
    )
}

export default ServiceAdd;