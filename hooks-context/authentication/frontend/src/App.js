import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import {useAuth} from "./hooks/auth.hook";
import {News} from "./components/News";
import IndexContent from "./components/IndexContent";
import {AuthContext} from "./context/AuthContext";
import {AlertState} from "./context/alert/AlertState";
import Alert from "./components/Alert";

function App() {
    const [{login, logout, token, ready}] = useAuth();
    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{login, logout, token, ready, isAuthenticated}}>
            <AlertState>
                <div className="container">
                    <Navbar isAuthenticated={isAuthenticated} />
                    <Alert />
                    {!isAuthenticated && <IndexContent />}
                    {isAuthenticated && <News />}
                </div>
            </AlertState>
        </AuthContext.Provider>
    );
}

export default App;
