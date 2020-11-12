import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginPageForm from '../components/LoginPageForm';
import { Login } from '../actions/LoginAndRegisterAction';

export default class CreatNewPost extends Component {

    handleSubmit(data) {
        Login(data);
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div>
                <LoginPageForm onSubmit={this.handleSubmit.bind(this)}></LoginPageForm>
            </div>
        );
    }
}
