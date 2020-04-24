import React, {useContext} from 'react';
import AuthForm from "./AuthForm";
import Logout from "./Logout";
import {AuthContext} from "../context/AuthContext";

export default () => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="row mb-2">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <h2 className="navbar-brand">Neto Social</h2>
                    {!isAuthenticated ? <AuthForm /> : <Logout />}
                </nav>
            </div>
        </div>
    )
}