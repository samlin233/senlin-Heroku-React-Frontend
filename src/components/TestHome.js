import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBIcon,
  MDBDropdownMenu,
  MDBAnimation
} from "mdbreact";
import{
  Navbar,
  Nav,
  Form,
  Button
}from "react-bootstrap";
import "../css/TestHome.css";

class TestHome extends React.Component {

    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>

          
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
                                <Nav.Link href="/Home">Home</Nav.Link>
                                <Nav.Link href="/Post">Post</Nav.Link>
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
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Make your review about your surgery!
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae iste.
                    </h6>
                    <Fragment>
                      <MDBBtn rounded color="success" href="/CreatNewPost">New Post</MDBBtn>
                      <MDBBtn rounded color="info" href="/Post">View Newest Post </MDBBtn>
                    </Fragment>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://www.dailaimei.com/uploads/allimg/05/t4518601938945024.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default TestHome;