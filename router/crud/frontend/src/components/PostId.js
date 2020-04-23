import React from 'react';
import Posts from "../pages/Posts";
import {useParams} from "react-router-dom";

const PostId = ({posts}) => {
    const id = useParams().id;
    const post = posts.find((item) => parseInt(item.id) === parseInt(id));
    return (
        <Posts post={post} />
    )
};

export default PostId;