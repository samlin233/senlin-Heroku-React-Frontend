import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CredsForm from './components/SaveCreds';
import index from './index'

function App() { 
    return (
        <main>
            <Switch>
                <Route path="/" component={index} exact />
                {/*<Route path="/creds" component={CredsForm} />*/}
                <Route component={Error} />
            </Switch>
	    <Navbar />
        </main>
    );
};
export default App;
