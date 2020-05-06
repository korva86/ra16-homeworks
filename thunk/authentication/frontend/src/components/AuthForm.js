import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import {authChangeField, authLogin} from "../actions/actionCreators";

export default () => {
    const {user, authLoading} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeHandler = (e) => {
        const {name, value} = e.target;
        dispatch(authChangeField(name, value));
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(authLogin(user, history));
    };

    return (
        <form className="form-inline">
            <input
                id="email"
                name="login"
                className="form-control mr-sm-2"
                type="text"
                placeholder="Username"
                aria-label="Username"
                value={user.login}
                onChange={changeHandler}
                disabled={authLoading}
            />
            <input
                id="password"
                name="password"
                className="form-control mr-sm-2"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={user.password}
                onChange={changeHandler}
                disabled={authLoading}
            />
            {!authLoading ?
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={loginHandler}
                >
                    Login
                </button>
            :   <button className="btn btn-outline-success my-2 my-sm-0" type="button">
                    <span className="spinner-border spinner-border-sm"/>
                </button>
            }

        </form>
    )
}