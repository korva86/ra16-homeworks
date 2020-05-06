import React from 'react';
import AuthForm from "./AuthForm";
import Logout from "./Logout";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

const Navbar = (props) => {
    const { isAuthenticated } = props;
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
};

const mapStateToProps = (state) => {
    const { auth } = state;
    return auth
};

export default connect(mapStateToProps)(Navbar)
