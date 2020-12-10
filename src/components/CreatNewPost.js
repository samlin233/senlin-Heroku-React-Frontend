
import React, { Component } from 'react';
import NewPostForm from './NewPostForm';
import { createBlogPost } from '../actions/blogPostActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class CreatNewPost extends Component {

    handleSubmit(data) {
        createBlogPost(data);
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div className="main-container">
                {/* <Navbar collapseOnSelect expand="lg" bg="success" variant="light" sticky="top">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://media.discordapp.net/attachments/292092110394621952/777003861139128321/logoimage.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                  Show Your Beauty
          </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">Post</Nav.Link>
                            <Nav.Link href="/HospitalSearch">Hospital</Nav.Link>
                            <Nav.Link href="/CreatNewPost">Write a New Post</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-light" href='/Users/${localStorage.username}' >
                                {localStorage.username}
                            </Button>
                            <Button variant="outline-light" onClick={() => window.localStorage.removeItem('username')} href="/Home" >
                                Log off
            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar> */}
                <div className="panel-block margin-top-20">
                    <NewPostForm onSubmit={this.handleSubmit.bind(this)}></NewPostForm>
                </div>
            </div>
        );
    }
}
