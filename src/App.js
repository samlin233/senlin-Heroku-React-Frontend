import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TestHome from './components/TestHome';
import CreatNewPost from './components/CreatNewPost';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() { 
    return (
        <main>
            <Switch>
                <Route path="/" component={TestHome} exact />
                <Route path="/Home" component={Home} exact />
                <Route path="/CreatNewPost" component={CreatNewPost} exact />
                <Route path="/LogInPage" component={LoginPage} exact />
                <Route path="/RegisterPage" component={RegisterPage} exact/>
                <Route component={Error} />
            </Switch>

        </main>
    );
};
export default App;
