import React from 'react';
import ExpenseDashboardPage from '../components/expensedashboardpage.js';
import AddExpensePage from '../components/addExpensePage.js';
import EditExpensePage from '../components/editExpensePage.js';
import HelpPage from '../components/helpPage.js';
import NotFoundPage from '../components/notfoundpage.js';
import Header from '../components/Header.js';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
  
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;