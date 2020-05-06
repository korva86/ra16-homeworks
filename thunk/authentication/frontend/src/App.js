import React, {useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import {useRoutes} from "./routes";
import {authGetToken} from "./actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const {isAuthenticated} = useSelector(state => state.auth);
    const routes = useRoutes(isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isAuthenticated) {
            dispatch(authGetToken());
        }
    }, []);

    return (
        <Router>
            <div className="container">
                <Navbar />
                <Alert />
                {routes}
            </div>
        </Router>

    );
}

export default App;
