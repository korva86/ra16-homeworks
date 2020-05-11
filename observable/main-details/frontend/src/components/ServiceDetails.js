import React, {useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {detailsService, detailsServiceRequestEpic} from "../actions/actionCreators";
import Loader from "./Loader";
import Error from "./Error";

function ServiceDetails() {
    const {item, loading, error} = useSelector(state => state.serviceDetails);
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useParams();

    const handleCancel = () => {
        history.push(`/`);
    };

    useEffect(() => {
        detailsService(dispatch, id);
    }, [dispatch, id]);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error error={error} handleRetry={() => dispatch(detailsServiceRequestEpic(id))} />
    }

    if (item) {
        return (
            <div className="col-lg-6 pl-0 mt-3 mb-3">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Название</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Описание</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.content}</td>
                    </tr>
                    </tbody>
                </table>
                <button type='button' disabled={loading} onClick={handleCancel} className="btn btn-secondary mr-2">Отмена</button>
            </div>
        );
    }

}

export default ServiceDetails;
