import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CredsForm from './components/SaveCreds';
import Navbar from './components/Navbarp';
import TestHome from './components/TestHome';

function App() { 
    return (
        <main>
            {/*<Navbar />*/}
            <Switch>
                <Route path="/" component={TestHome} exact />
                {/*<Route path="/creds" component={CredsForm} />*/}
                <Route component={Error} />
            </Switch>

        </main>
    );
};
export default App;
