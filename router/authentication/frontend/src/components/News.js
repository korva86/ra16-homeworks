import React, {useCallback, useEffect, useState, useContext} from 'react';
import {useHttp} from '../hooks/http.hook';
import Loader from '../components/Loader';
import Card from '../components/Card';
import {AuthContext} from "../context/AuthContext";
import {useParams} from "react-router-dom";

export const News = () => {
     const Id = useParams().id;
    const {token, logout} = useContext(AuthContext);
    const [{request, loading}] = useHttp();
    const [news, setNews] = useState(null);
    const newsId = news ? news.find((item) => item.id === Id) : null;

    const getNews = useCallback(async () => {
        if (token) {
            try {
                const fetched = await request(`${process.env.REACT_APP_BASE_URL}/private/news`, 'GET', null, {Authorization: `Bearer ${token}`});
                setNews(fetched)
            } catch (e) {
                logout();
            }
        }
    }, [token, request, logout]);

    useEffect(() => {
        getNews()
    }, [getNews]);

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