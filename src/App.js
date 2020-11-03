import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyVerticallyCenteredModal from './components/popout';
import Navbar from './components/Navbar';

function App() {
    return (
        <main>
            <Switch>
		<Route path="/" component={Home} exact />
                <Route path="/popout" component={MyVerticallyCenteredModal} />
	        <Route component={Error} />
            </Switch>
	    <Navbar />
        </main>
    );
};
export default App;
