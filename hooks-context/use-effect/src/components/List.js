import React, {useState, useEffect} from 'react';

export default function List({setInfo}) {
    const [listItems, setListItems] = useState([]);

    function handleClick(id, name) {
        setInfo({id, name});
    }

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
            {listItems.map((item) =>
                <button type="button"
                        className="list-group-item list-group-item-action"
                        key={item.id}
                        onClick={() => handleClick(item.id, item.name)}
                >{item.name}</button>)}
        </div>
    )
}
