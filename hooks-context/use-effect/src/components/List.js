import React, {useState, useEffect} from 'react';
import ListItem from "./ListItem";

export default function List() {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(`${process.env.REACT_APP_URL}users.json`);

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();

                if (data && Array.isArray(data)) {
                    setListItems(data);
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="list-group">
            {listItems.map(({id, name}) =>
                <ListItem name={name} id={id} key={id} /> )}
        </div>
    )
}
