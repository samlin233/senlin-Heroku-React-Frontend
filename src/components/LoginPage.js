import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginPageForm from '../components/LoginPageForm';
import { Login } from '../actions/LoginAndRegisterAction';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class LogInPage extends Component {

    handleSubmit(data) {
        Login(data);
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="success" variant="light" sticky="top">
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
                            <Nav.Link href="/home">Post</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-light" href="/RegisterPage" onClick={() => this.props.modalShow(true)}>
                                Sign Up
                  </Button>
                            <Button variant="outline-light" href="/LogInPage" onClick={() => this.props.modalShow2(true)}>
                                Log In
                  </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <LoginPageForm onSubmit={this.handleSubmit.bind(this)}></LoginPageForm>
            </div>
        );
    }
}
