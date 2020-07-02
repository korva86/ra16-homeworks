import React, {useRef, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {changeServiceField, editServices, saveService} from "../actions/actionCreators";

function ServiceEdit() {
    const {item, loading, error, saveLoading} = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        let controller = new AbortController();
        dispatch(editServices({id}, controller.signal));

        return () => {
            controller.abort();
        };
    }, [id]);

    const handleChange = useRef(evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(saveService(item));
        history.push(`/services`);
    };

    const handleCancel = useRef(evt => {
        evt.preventDefault();
        history.push(`/services`);
    });

    return (
        <form className="col-lg-6 pl-0 mt-3 mb-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Название</label>
                <input id="name" name='name' disabled={loading || saveLoading} onChange={handleChange.current} value={item.name} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Цена</label>
                <input id="price" name='price' disabled={loading || saveLoading} onChange={handleChange.current} value={item.price} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="content">Описание</label>
                <input id="content" name='content' disabled={loading || saveLoading} onChange={handleChange.current} value={item.content} className="form-control" />
            </div>
            <div className="text-nowrap pb-2">
                <button type='button' disabled={loading || saveLoading} onClick={handleCancel.current} className="btn btn-secondary mr-2">Отмена</button>
                {
                    saveLoading
                        ? <button type="button" className="btn btn-danger">
                            <span className="spinner-border spinner-border-sm"/>
                        </button>
                        : <button type='submit' disabled={loading} className="btn btn-danger">Сохранить</button>
                }
            </div>
            {error && <div className="alert alert-danger">{error}, try again</div>}
        </form>
    );
}

export default ServiceEdit;
