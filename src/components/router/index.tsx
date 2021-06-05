import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/views/home';

/**
 * Application router
 * @returns 
 */
const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;