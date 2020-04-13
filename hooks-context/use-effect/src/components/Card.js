import React from 'react';

function Card({person}) {
    return (
        <div className="card">
            <img src={person.avatar} className="card-img-top" alt={person.name} />
                <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">City: {person.details.city}</li>
                    <li className="list-group-item">Company: {person.details.company}</li>
                    <li className="list-group-item">Position: {person.details.position}</li>
                </ul>
        </div>
    )
}

export default React.memo(Card)