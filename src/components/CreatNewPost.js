import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from './NewPostForm';
import { createBlogPost } from '../actions/blogPostActions';

export default class CreatNewPost extends Component {

    handleSubmit(data) {
        createBlogPost(data);
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}></Form>
            </div>
        );
    }
}
