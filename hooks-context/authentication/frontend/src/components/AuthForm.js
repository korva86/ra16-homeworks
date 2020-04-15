import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useAuth} from "../hooks/auth.hook";

export default () => {
    const {login} = useAuth();

    const {request} = useHttp();

    const [form, setForm] = useState({
        login: '', password: ''
    });

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request(`${process.env.REACT_APP_BASE_URL}/auth`, 'POST', {...form});
            login(data.token)
        } catch (e) {}
        window.location.href = `http://localhost:3000`;
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
                value={form.login}
                onChange={changeHandler}
            />
            <input
                id="password"
                name="password"
                className="form-control mr-sm-2"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={form.password}
                onChange={changeHandler}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={loginHandler}
            >
                Login
            </button>
        </form>
    )
}