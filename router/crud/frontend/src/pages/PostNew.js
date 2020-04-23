import React, {useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import Context from "../Context";

const PostNew = () => {
    const history = useHistory();
    const {getPost} = useContext(Context);
    const [textPost, setTextPost] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
            fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
                method: "POST",
                body: JSON.stringify({
                    id: 0,
                    content: textPost
                })
            })
                .then(() => {
                    getPost();
                    history.push('/');
                });
    };

    return (
        <div className="container">
            <div className="well col-md-5">
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <button type="button" className="close" onClick={() => history.push('/')}>
                        ×
                    </button>
                    <h4>What's New</h4>
                    <div className="form-group" style={{padding: 14}}>
                        <textarea className="form-control" placeholder="Create new post" onChange={e => setTextPost(e.target.value)} />
                    </div>
                    <button className="btn btn-primary pull-right" type="submit">Create post</button>
                    <ul className="list-inline">
                        <li><a href=""><i className="glyphicon glyphicon-upload"></i></a></li>
                        <li><a href=""><i className="glyphicon glyphicon-camera"></i></a></li>
                        <li><a href=""><i className="glyphicon glyphicon-map-marker"></i></a></li>
                    </ul>
                </form>
            </div>
        </div>
    )
};

export default PostNew;