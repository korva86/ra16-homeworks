import React, {useEffect} from 'react';
import Loader from '../components/Loader';
import Card from '../components/Card';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {privateGetNews} from "../actions/actionCreators";

export const News = () => {
    const {news, loading} = useSelector(state => state.private);
    const dispatch = useDispatch();

    const Id = useParams().id;
    const newsId = news ? news.find((item) => item.id === Id) : null;

    useEffect(() => {
        dispatch(privateGetNews())
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="row">
            { !Id && news && news.map((item, i) => <Card item={item} key={i} />) }
            {Id && <Card item={newsId} />}
        </div>
    )
};