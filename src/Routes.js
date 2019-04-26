import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import courses from './screens/Courses';
import Home from './screens/Home';


export const Routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Courses" component={courses} />
        <Route render={() => <h1>Page not found</h1>} />
    </Switch>
);