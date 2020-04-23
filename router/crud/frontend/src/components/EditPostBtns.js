import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Context from "../Context";

const EditPostBtns = ({post}) => {
    const history = useHistory();
    const {currentPost, setCurrentPost, getPost, editMode, setEditMode, setShowEditBtns} = useContext(Context);

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/posts/${post.id}`, {
            method: "DELETE"
        })
            .then(() => {
                setEditMode(false);
                setShowEditBtns(false);
                getPost();
                history.push('/');
            })
    };

    const handleEdit = () => {
        setEditMode(prevEditMode => {
            if (!prevEditMode) {
                setCurrentPost(post.content);
            } else {
                setCurrentPost('');
            }
            return true;
        });
    };

    const handleSave = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
            method: "POST",
            body: JSON.stringify({
                id: post.id,
                content: currentPost
            })
        })
            .then(() => {
                setCurrentPost('');
                setEditMode(false);
                getPost();
                history.push(`/posts/${post.id}`);
            });
    };

    if (editMode) {
        return (
            <div className="row" style={{marginBottom: 14}} >
                <button className="btn btn-primary pull-right" onClick={handleSave} style={{marginRight: 15}}>Save</button>
                <button className="btn btn-primary pull-right" onClick={handleDelete} style={{marginRight: 15}}>Delete</button>
            </div>
        )
    }
    return (
        <div className="row" style={{marginBottom: 14}}>
            <button className="btn btn-primary pull-right" onClick={handleEdit} style={{marginRight: 15}}>Edit</button>

        </div>
    )
};

export default EditPostBtns;