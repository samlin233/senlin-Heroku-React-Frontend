import React ,{useState}from 'react';
import '../css/Home.css';
import '../css/bootstrap.min.css';
import 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { render } from '@testing-library/react';
import '../image/logoimage.png'


class MyVerticallyCenteredModal extends React.Component{
  render(){
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign up for new account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Creat New Account</h4>
          <p>
            User Name:
          </p>
          <p>
            <FormControl type="text" name="username" value={this.username} onChangeUsername={this.onChangeUsername} placeholder="Enter Your User Name" className="mr-sm-2" />
          </p>
          <p>
            Pass Word:
          </p>
          <p>
            <FormControl type="text" name="password" value={this.password} onChangePassword={this.onChangePassword} placeholder="Enter Your Password" className="mr-sm-2" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onHide} type='submit'>Sign Up</Button>
        </Modal.Footer>
      </Modal>
    );
  };
}
class MyVerticallyCenteredModal2 extends React.Component{
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign in with your user account and password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            User Name:
          </p>
          <p>
            <FormControl type="text" name="username" value={this.username} onChangeUsername={this.onChangeUsername} placeholder="Enter Your User Name" className="mr-sm-2" />
          </p>
          <p>
            Pass Word:
          </p>
          <p>
            <FormControl type="text" name="password" value={this.password} onChangePassword={this.onChangePassword} placeholder="Enter Your Password" className="mr-sm-2" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onHide} type='submit' >Log In</Button>
        </Modal.Footer>
      </Modal>
    );
  };
}

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      isLoggedIn: false,
      username: "",
      password: "",
      modalShow: false,
      modalShow2: false
    };
    // this.MyVerticallyCenteredModal = this.MyVerticallyCenteredModal.bind(this);
    // this.MyVerticallyCenteredModal2 = this.MyVerticallyCenteredModal2.bind(this);
    // this.Navbarp = this.Navbarp.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({ name: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    // get our form data out of state
    const { username, password } = this.state;

    axios.post('https://cs148-python-backend.herokuapp.com/api/login', { username, password })
      .then((result) => {
        //access the results here....
      });
  }
  componentDidMount() {

    fetch('https://cs148-python-backend.herokuapp.com/api/posts')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result.posts
          });
        },
        //handle errors here
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch('https://cs148-python-backend.herokuapp.com/api/check_status')
        .then(res2 => res2.json())
        .then(
          (result2) => {
            // if(result2.check == "True"){
              this.setState({
                isLoggedIn: true
              })
            // }
          },
          (error) => {
            this.setState({
              isLoggedIn: false,
              error
            });
          }
        )
  }
  render() {
    const { error, isLoaded, posts} = this.state;

    let form;
    // if(!this.state.isLoggedIn){
      form = <Form inline>
                  <Button variant="outline-light" href="/RegisterPage" onClick={() =>this.props.modalShow(true)}>
                    Sign Up
                  </Button>

                  <Button variant="outline-light" href="/LogInPage" onClick={() =>this.props.modalShow2(true)}>
                    Log In
                  </Button>

                </Form>;
    // }
    // else{
    //   form = <Form inline>
    //   <Button variant="outline-light" href="/Home" onClick={() =>this.state.isLoggedIn(false)}>
    //     Log off
    //   </Button>
    //   </Form>
    // }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>Plastic Surgery</title>
          {/* Bootstrap core CSS */}
          <link href="../css/bootstrap.min.css" rel="stylesheet" />
          {/* Custom styles for this template */}
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet" />
          <link href="../css/Home.css" rel="stylesheet" />

          <main role="main" className="container">
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light" sticky="top">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="../image/logoimage.png"
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
                  <Nav.Link href="/CreatNewPost">New Post</Nav.Link>
                </Nav>
                {form}
              </Navbar.Collapse>
            </Navbar>
            <div className="row">
              <div className="col-md-8 blog-main">
                <h1 className="pb-3 mb-4 font-italic border-bottom">
                  Newest Post
              </h1>
                {posts.map(post => (
                  <div class="row no-gutters bg-light position-relative" key={post.id}>
                    <div class="col-md-6 mb-md-0 p-md-4">
                      <img src={post.image} class="w-100" alt="..."></img>
                    </div>
                    <div class="col-md-6 position-static p-4 pl-md-0">
                      <h5 class="mt-0">{post.title}</h5>
                      <p className="blog-post-meta" >{String(post.time)}<a href="#">{post.author}</a></p>
                      <hr />
                      <p>{post.text}</p>
                      <a href={post.image} class="stretched-link">Go somewhere</a>
                    </div>
                    <hr />
                  </div>
                ))}

                <nav className="blog-pagination">
                  <a className="btn btn-outline-primary" href="#">Show More</a>
                  <a className="btn btn-outline-secondary disabled" href="#">Show Less</a>
                </nav>
              </div>{/* /.blog-main */}
              <aside className="col-md-4 blog-sidebar">
                <div className="p-3 mb-3 bg-light rounded">
                  <h4 className="font-italic">About</h4>
                  <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>
                <div className="p-3">
                  <h4 className="font-italic">Hottest post of the month</h4>
                  <ol className="list-unstyled mb-0">
                    <li><a href="#">March 2020</a></li>
                    <li><a href="#">February 2020</a></li>
                    <li><a href="#">January 2020</a></li>
                    <li><a href="#">December 2019</a></li>
                    <li><a href="#">November 2019</a></li>
                    <li><a href="#">October 2019</a></li>
                    <li><a href="#">September 2019</a></li>
                    <li><a href="#">August 2019</a></li>
                    <li><a href="#">July 2019</a></li>
                    <li><a href="#">June 2019</a></li>
                    <li><a href="#">May 2019</a></li>
                    <li><a href="#">April 2019</a></li>
                  </ol>
                </div>
                <div className="p-3">
                  <h4 className="font-italic">Follow Us</h4>
                  <ol className="list-unstyled">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                  </ol>
                </div>
              </aside>{/* /.blog-sidebar */}
            </div>{/* /.row */}
          </main>{/* /.container */}
          <main>
            <footer className="blog-footer">
              <p>
                <a href="#">Back to top</a>
              </p>
            </footer></main>
        </div>
      );
    }
  };
}
export default Home;
