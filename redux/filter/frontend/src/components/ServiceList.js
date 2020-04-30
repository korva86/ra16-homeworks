import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    changeEditId,
    changeServiceField,
    clearServiceField,
    removeService, searchService
} from '../actions/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const search = useSelector(state => state.serviceSearch);
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

    const handleSearch = (e) => {
        dispatch(searchService(e.target.value))
    };

    const searchItems = search.searchValue ? items.filter((i) => i.name.indexOf(search.searchValue) !== -1 ) : items;

    return (
        <>
            <div>
                Search
                <input value={search.searchValue} onChange={handleSearch}/>
            </div>
            <ul>
                {searchItems.map(o =>
                    <li key={o.id}>
                        {o.name} {o.price}
                        <button onClick={() => handleEdit(o)}><FontAwesomeIcon icon={faPencilAlt} /></button>
                        <button onClick={() => handleRemove(o.id)}>&times;</button>
                    </li>)}
            </ul>
        </>

    )
}

export default ServiceList;