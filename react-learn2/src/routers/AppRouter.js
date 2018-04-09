import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter key="1">
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage} exact={true}></Route>
                <Route path="/edit" component={EditExpensePage} exact={true}></Route>
                <Route path="/help" component={HelpPage} exact={true}></Route>
                <Route component={NotFoundPage} exact={true}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;