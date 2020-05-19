import React from 'react';

export const News = ({item}) => {

    return (
            <div className="card text-center mt-3">
                <div className="card-header">
                    {new Date(item.date * 1000).toLocaleDateString("ru-RU")}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Post #{item.id}</h5>
                    <p className="card-text">{item.text}</p>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-sm btn-outline-info mr-1"><i className="fa fa-comment mr-1"></i> {item.comments.count}</button>
                    <button className="btn btn-sm btn-outline-info mr-1"><i className="fa fa-thumbs-up"></i> {item.likes.count}</button>
                    <button className="btn btn-sm btn-outline-info mr-1"><i className="fa fa-reply"></i> {item.reposts.count}</button>
                    <button className="btn btn-sm btn-outline-info mr-1"><i className="fa fa-eye"></i> {item.views.count}</button>
                </div>
            </div>
    )
};