import React from 'react';
import AuthForm from "./AuthForm";
import Logout from "./Logout";

export default ({isAuthenticated}) => {

    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <h2 className="navbar-brand">Neto Social</h2>
                    {!isAuthenticated ? <AuthForm /> : <Logout />}
                </nav>
            </div>
        </div>
    )
}