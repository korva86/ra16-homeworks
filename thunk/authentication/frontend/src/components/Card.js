import React from 'react';
import {Link} from "react-router-dom";

export default ({item}) => {
    return (
        <div className="col-md-6 mt-2">
            <div className="card">
                <Link to={`/news/${item.id}`}>
                    <img src={item.image} className="card-img-top" alt={item.title}/>
                </Link>
                <div className="card-body">
                    <Link to={`/news/${item.id}`}>
                        <h5 className="card-title">{item.title}</h5>
                    </Link>
                    <p className="card-text">{item.content}</p>
                </div>
            </div>
        </div>
    )
}