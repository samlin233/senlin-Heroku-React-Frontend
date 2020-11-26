import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TestHome from './components/TestHome';
import CreatNewPost from './components/CreatNewPost';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HospitalSearch from './components/HotpitalSearch';
import UserProfile from './components/UserProfile';
import UserProfileForm from './components/UserProfileForm';

function App() { 
    return (
        <main>
            <Switch>
                <Route path="/" component={TestHome} exact />
                <Route path="/Home" component={Home} exact />
                <Route path="/CreatNewPost" component={CreatNewPost} exact />
                <Route path="/LogInPage" component={LoginPage} exact />
                <Route path="/RegisterPage" component={RegisterPage} exact/>
                <Route path="/HospitalSearch" component={HospitalSearch} exact/>
                <Route path="/UserProfile" component={UserProfile} exact/>
                <Route path="/UserProfileForm" component={UserProfileForm} exact/>
                <Route component={Error} />
            </Switch>

        </main>
    );
};
export default App;
