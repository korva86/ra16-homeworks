import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authLogout, privateGetProfile} from "../actions/actionCreators";

export default () => {
    const {profile} = useSelector(state => state.private);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authLogout());
    };

    useEffect(() => {
        dispatch(privateGetProfile())
    }, []);

    if (profile.name) {
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
    return <span className="spinner-border spinner-border-sm"/>

}