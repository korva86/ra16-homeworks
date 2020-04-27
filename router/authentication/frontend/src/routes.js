import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import IndexContent from "./components/IndexContent";
import {News} from "./components/News";
import {NotFound} from "./components/NotFound";

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/news" exact>
                    <News />
                </Route>
                <Route path="/404">
                    <NotFound />
                </Route>
                <Route path="/news/:id">
                    <News />
                </Route>
                <Redirect to="404" />
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