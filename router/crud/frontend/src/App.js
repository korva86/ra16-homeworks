import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import './App.css';
import Posts from "./pages/Posts";
import PostId from "./components/PostId";
import PostNew from "./pages/PostNew";
import Context from "./Context";

function App() {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showEditBtns, setShowEditBtns] = useState(false);

    const getPost = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/posts`)
            .then(res => res.json())
            .then(res => setPosts(res))
    };

    useEffect(() => {
        getPost()
    }, []);
    return (
        <Context.Provider value={{getPost, currentPost, setCurrentPost, editMode, setEditMode, showEditBtns, setShowEditBtns}}>
            <div className="App">
                <Router>
                    <div className="btn-group" style={{margin: 15}}>
                        <Link to="/posts/new" className="btn btn-primary pull-left">Создать</Link>
                    </div>

                    <Switch>
                        <Route path="/" exact >
                            {posts.map((post) => <Posts post={post} key={post.id} />)}
                        </Route>
                        <Route path="/posts/new" exact>
                            <PostNew />
                        </Route>
                        <Route exact path="/posts/:id">
                            <PostId posts={posts} />
                        </Route>
                        <Redirect to="/" />
                    </Switch>

                </Router>

            </div>
        </Context.Provider>

    );
}

export default App;
