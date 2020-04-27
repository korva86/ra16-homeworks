import React, {useContext} from 'react';
import AuthForm from "./AuthForm";
import Logout from "./Logout";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";

export default () => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="row mb-2">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <Link to="/news">
                        <h2 className="navbar-brand">Neto Social</h2>
                    </Link>

                    {!isAuthenticated ? <AuthForm /> : <Logout />}
                </nav>
            </div>
        </div>
    )
}