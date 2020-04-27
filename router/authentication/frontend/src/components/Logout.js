import React, {useCallback, useEffect, useState, useContext} from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export default () => {
    const {logout, token} = useContext(AuthContext);
    const [{request}] = useHttp();
    const [profile, setProfile] = useState(null);

    const logoutHandler = () => {
        logout();
    };

    const getProfile = useCallback(async () => {
        if (token) {
            try {
                const fetched = await request(`${process.env.REACT_APP_BASE_URL}/private/me`, 'GET', null, {Authorization: `Bearer ${token}`});
                setProfile(fetched)
            } catch (e) {
                logout();
            }
        }

    }, [token, request]);

    useEffect(() => {
        getProfile()
    }, [getProfile]);

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