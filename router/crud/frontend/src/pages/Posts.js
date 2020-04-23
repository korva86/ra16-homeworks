import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Post from "../components/Post";
import Context from "../Context";

const Posts = ({post}) => {
    const history = useHistory();
    const {setShowEditBtns} = useContext(Context);

    const handleClick = () => {
        setShowEditBtns(true);
        history.push(`/posts/${post.id}`);
    };

    return (
        <Post post={post} handleClick={handleClick} />
    );
};

export default Posts;