import React, {useCallback, useEffect, useState, useContext} from 'react';
import {useHttp} from '../hooks/http.hook';
import Loader from '../components/Loader';
import Card from '../components/Card';
import {AuthContext} from "../context/AuthContext";

export const News = () => {
    const {token, logout} = useContext(AuthContext);
    const [{request, loading}] = useHttp();
    const [news, setNews] = useState(null);

    const getNews = useCallback(async () => {
        if (token) {
            try {
                const fetched = await request(`${process.env.REACT_APP_BASE_URL}/private/news`, 'GET', null, {Authorization: `Bearer ${token}`});
                setNews(fetched)
            } catch (e) {
                logout()
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
            { !loading && news && news.map((item, i) => <Card item={item} key={i} />) }
        </div>
    )
};