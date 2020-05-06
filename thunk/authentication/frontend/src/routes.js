import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import IndexContent from "./components/IndexContent";
import {News} from "./components/News";
import {NotFound} from "./components/NotFound";
import {useSelector} from "react-redux"

export const useRoutes = () => {
    const {isAuthenticated} = useSelector(state => state.auth);
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/news" exact>
                    <News />
                </Route>
                <Route path="/404">
                    <NotFound />
                </Route>
                <Route path="/news/:id" exact>
                    <News />
                </Route>
                <Route path="/" exact>
                    <Redirect to="/news" />
                </Route>
                <Redirect to="/404" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <IndexContent />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
};