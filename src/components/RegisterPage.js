import React, { Component } from 'react';
import { withRouter } from 'react-router';
import RegisterPageForm from './RegisterPageForm';
import { SignUp } from '../actions/LoginAndRegisterAction';

export default class CreatNewPost extends Component {

    handleSubmit(data) {
        SignUp(data);
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div>
                <RegisterPageForm onSubmit={this.handleSubmit.bind(this)}></RegisterPageForm>
            </div>
        );
    }
}
