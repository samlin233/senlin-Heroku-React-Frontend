import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/blogPostActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class PostShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            title: "",
            time: "",
            image: "",
            author: "",
            comments: [],
            id: this.props.match.params
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        fetch(`https://cs148-python-backend.herokuapp.com/api/find_post/${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(res => {
                this.setState({ text: res.post.text });
                this.setState({ title: res.post.title });
                this.setState({ time: res.post.time });
                this.setState({ image: res.post.image });
                this.setState({ author: res.post.author });
                this.setState({ comments: res.comment });
            }).catch(err => console.log(err));
    }

    render() {
        const { text,
            title,
            time,
            image,
            author,
            comments,
            id } = this.state;
        return (
            <main>
                <div>
                    <br />
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
                    </Navbar>
                </div>
                <div class="row no-gutters bg-light position-relative" className="col-md-8 blog-main">
                    <div className="col-md-8 blog-main">
                        <div class="col-md-6 mb-md-0 p-md-4">
                        </div>
                        <div class="col-md-6 position-static p-4 pl-md-0">
                            <header class="Post-Header">
                                <h1 class="Post-Title">{title}</h1>
                                <div class="Post-Author">
                                    <div>
                                        {author} at {time}
                                    </div>
                                </div>
                            </header>
                            <hr />

                            <img src={image} class="w-100" alt="..."></img>
                            <div class="Post-content">
                                {text}
                            </div>
                        </div>
                        <hr />
                        {comments.map(comment=>(
                            <div></div>
                        ))}
                    </div>
                </div>

            </main>

        );
    }
}


export default PostShow;