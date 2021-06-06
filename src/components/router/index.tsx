import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/views/home';
import History from 'components/views/history';
import { AppContext } from 'components/context';
import { useHistoryState } from 'components/context';

/**
 * Application router
 * @returns 
 */
const Router = (): JSX.Element => {
    const {
        state,
        addHistory
    } = useHistoryState();

    return (
        <AppContext.Provider value={{history: state.history, addHistory}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/history" component={History} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default Router;