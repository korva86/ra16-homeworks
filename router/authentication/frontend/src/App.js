import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {AlertState} from "./context/alert/AlertState";
import Alert from "./components/Alert";
import {useRoutes} from "./routes";

function App() {
    const [{login, logout, token, ready}] = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <Router>
            <AuthContext.Provider value={{login, logout, token, ready, isAuthenticated}}>
                <AlertState>
                    <div className="container">
                        <Navbar isAuthenticated={isAuthenticated} />
                        <Alert />
                        {routes}
                    </div>
                </AlertState>
            </AuthContext.Provider>
        </Router>

    );
}

export default App;
