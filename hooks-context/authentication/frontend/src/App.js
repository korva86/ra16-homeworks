import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import {useAuth} from "./hooks/auth.hook";
import {News} from "./components/News";
import IndexContent from "./components/IndexContent";
import Loader from "./components/Loader";

function App() {
    const {token, ready} = useAuth();
    const isAuthenticated = !!token;
    //if(ready || !ready) {console.log('ready', ready); }
    if(!ready) {return <Loader/>}

    return (
        <div className="container">
            <Navbar isAuthenticated={isAuthenticated} />

            {!isAuthenticated && <IndexContent />}
            {isAuthenticated && <News />}
        </div>
    );
}

export default App;
