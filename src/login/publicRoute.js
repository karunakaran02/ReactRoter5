import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashBoard } from "./dashboard";
import Login from "./login";

export const Public = () => {

    return (
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/dashboard' component={DashBoard}></Route>
            <Redirect to='/' ></Redirect>
        </Switch>
    )
}