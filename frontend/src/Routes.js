import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/SignUp';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
    )
}