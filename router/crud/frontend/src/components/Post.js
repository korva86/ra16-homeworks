import React, {useContext} from 'react';
import moment from 'moment';
import {useHistory} from "react-router-dom";
import Context from "../Context";
import PostContent from "./PostContent";
import EditPostBtns from "./EditPostBtns";

const Post = ({post, handleClick}) => {
    const history = useHistory();
    const {setEditMode, setShowEditBtns, showEditBtns} = useContext(Context);
    const handleClose = () => {
        setEditMode(false);
        setShowEditBtns(false);
        history.push('/')
    };

    if (!post) return null;
    return (
        <div className="container">
            <div className='col-md-5 panel panel-default'>
                <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={handleClose} >
                        ×
                    </button>
                </div>
                <div className="panel-body" onClick={handleClick || null}>
                    <section className="post-heading">
                        <div className="row">
                            <div className="col-md-11">
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#">
                                            <img className="media-object photo-profile" src="https://thumbs.dreamstime.com/b/print-166109659.jpg" width="40" height="40" alt="avatar" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <a href="#" className="anchor-username"><h4 className="media-heading">Pavel Durov</h4></a>
                                        <p className="anchor-time">{moment(post.created).fromNow(true)} ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="post-body">
                        <PostContent post={post} />
                    </section>
                    <section className="post-footer">
                        <hr />
                        <div className="post-footer-option">
                            <ul className="list-unstyled">
                                <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                {showEditBtns ? <EditPostBtns post={post} /> : null}
            </div>
        </div>
    );
};

export default Post;