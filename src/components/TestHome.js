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
        {/* <Router>

          <MDBNavbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Show Your Beauty</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Home">View Posts</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/CreatNewPost">Write a Post</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router> */}
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
                    We provide a social media platform for patients and potential customers to post about their surgery experience, talk about the quality of services they received, compare prices, and rate hospitals so that other users would be able to decide which surgeries and hospitals would be best for them. It is a platform for them to divulge and share unseen information regarding plastic surgeries.
                    </h6>
                    <Fragment>
                      <MDBBtn className="margin-right-10" rounded color="success" href="/CreatNewPost">New Post</MDBBtn>
                      <MDBBtn rounded color="info" href="/Home">View Newest Post </MDBBtn>
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