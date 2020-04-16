import React, {useContext, useEffect, useState} from 'react';
import Context from "../Context";

export default function Details() {
    const {info} = useContext(Context);
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            if (!info.id) {
                return
            }
            setLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_URL}${info.id}.json`);

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();

                setPerson(data);
                setLoading(false);

            } catch (e) {
                console.error(e);
                setLoading(false)
            }
        };

        fetchData();
    }, [info.id]);


    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>)
    }

    if (Object.keys(person).length) {
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

    return null

}

