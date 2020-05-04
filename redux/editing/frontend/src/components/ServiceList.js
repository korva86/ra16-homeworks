import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    changeEditId,
    changeServiceField,
    clearServiceField,
    removeService
} from '../actions/actionCreators';

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
        <div className="col-lg-6 pl-0">
            <ul className="list-group">
                {items.map(o =>
                    <li key={o.id} className="list-group-item d-flex align-items-center justify-content-between">
                        {o.name} - {o.price}
                        <span className="text-nowrap">
                            <button onClick={() => handleEdit(o)} className="btn btn-danger ml-2 mr-2">✎</button>
                            <button onClick={() => handleRemove(o.id)} className="btn btn-danger" >&times;</button>
                        </span>
                    </li>)}
            </ul>
        </div>
    )
}

export default ServiceList;