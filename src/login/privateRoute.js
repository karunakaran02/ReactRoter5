import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Userpage } from "./user";
import { UserDetails } from "./userdetail";

export const Private = () => {

    return (
        <Switch>
            <Route exact path='/user' component={Userpage}></Route>
            <Route path='/userdetail/:id' component={UserDetails}></Route>
            <Redirect to='/user'></Redirect>
        </Switch>
    )
}