import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    changeEditId,
    changeServiceField,
    clearServiceField,
    removeService
} from '../actions/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const editId = useSelector(state => state.serviceAdd.editId);
    const dispatch = useDispatch();

    const handleRemove = id => {
        if (editId) {
            dispatch(clearServiceField())
        }
        dispatch(removeService(id));
    };

    const handleEdit = (item) => {
        const {id, name, price} = item;
        dispatch(changeServiceField('name', name));
        dispatch(changeServiceField('price', price));
        dispatch(changeEditId(id));
    };

    return (
        <ul>
            {items.map(o =>
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleEdit(o)}><FontAwesomeIcon icon={faPencilAlt} /></button>
                    <button onClick={() => handleRemove(o.id)}>&times;</button>
                </li>)}
        </ul>
    )
}

export default ServiceList;