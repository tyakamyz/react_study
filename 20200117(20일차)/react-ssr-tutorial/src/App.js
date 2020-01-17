import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
    return (
        <div>
            <h1>React Server Side Rendering Tutorial</h1>
            <Menu />

            <Switch>
                <Route path="/red" component={RedPage} />
                <Route path="/blue" component={BluePage} />
            </Switch>
        </div>
    );
};

export default App;
