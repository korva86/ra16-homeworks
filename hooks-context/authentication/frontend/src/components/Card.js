import React from 'react';


export default ({item}) => {
    return (
        <div className="col-md-6 mt-2">
            <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                </div>
            </div>
        </div>
    )
}