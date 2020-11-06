import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TestHome from './components/TestHome';

function App() { 
    return (
        <main>
            <Switch>
                <Route path="/" component={TestHome} exact />
                <Route path="/Home" component={Home} exact />
                <Route component={Error} />
            </Switch>

        </main>
    );
};
export default App;
