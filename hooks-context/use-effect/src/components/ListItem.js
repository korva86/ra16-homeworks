import React, {useContext} from 'react';
import Context from "../Context";

export default function ListItem({id, name}) {
    const {setInfo} = useContext(Context);
    return (
        <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => setInfo({id, name})}
        >{name}</button>
    )
}
