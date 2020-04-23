import React, {useContext} from 'react';
import Context from "../Context";

const PostContent = ({post}) => {
    const {currentPost, setCurrentPost, editMode} = useContext(Context);

    if (editMode) {
        return (
            <input value={currentPost} onChange={e => setCurrentPost(e.target.value)} />
        )
    }
    return <p>{post.content}</p>
};

export default PostContent;