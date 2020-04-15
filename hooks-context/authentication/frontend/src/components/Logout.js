import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useAuth} from "../hooks/auth.hook";

export default () => {
    const {logout, token} = useAuth();
    const {request} = useHttp();
    const [profile, setProfile] = useState(null);

    const logoutHandler = () => {
        logout();
        window.location.href = `http://localhost:3000`;
    };

    const getProfile = useCallback(async () => {
        if (token) {
            try {
                const fetched = await request(`${process.env.REACT_APP_BASE_URL}/private/me`, 'GET', null, {Authorization: `Bearer ${token}`});
                setProfile(fetched)
            } catch (e) {}
        }

    }, [token, request]);

    useEffect(() => {
        getProfile()
    }, [getProfile]);
    console.log(profile);
    if (profile) {
        return (
            <div className="form-inline">
                <div className="mr-3">Hello, {profile.name}</div>
                <img src={profile.avatar} alt={profile.login} style={{borderRadius: "50%"}} className="mr-3" />
                <button
                    className="btn btn-outline-danger my-2 my-sm-0"
                    type="submit"
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            </div>
        )
    }
    return null

}