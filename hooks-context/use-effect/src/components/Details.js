import React, {useEffect, useState} from 'react';
import Card from "./Card";

export default function Details({info}) {
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
            <Card person={person} />
        )
    }

    return null

}

