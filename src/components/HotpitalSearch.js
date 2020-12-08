import React from 'react';
import HospitalNameSearchForm from './HospitalNameSearchForm';
import HospitalZipSearchForm from './HospitalZipSearchForm';
import { ZipSearch, NameSearch } from '../actions/HospitalSearch';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class HospitalSearch extends React.Component {

    handleSubmit(data) {
        ZipSearch(data);
        this.props.history.push('/HospitalSearch');
    }
    handleSubmit2(data) {
        NameSearch(data);
        this.props.history.push('/HospitalSearch')
    }

    render() {
        let form;
        if (localStorage.getItem('hospitals') === undefined || localStorage.getItem('hospitals').length > 1) {
            let mapOfHospital = JSON.parse(localStorage.getItem('hospitals'));
            form =
                mapOfHospital.map(hospital => (
                    <div class="row no-gutters bg-light position-relative" key={hospital.id}>

                        <div class="col-md-6 position-static p-4 pl-md-0">
                            <h5 class="mt-0">{hospital.properties.NAME}</h5>
                            <p className="blog-hospital-meta" >{hospital.properties.CITY + hospital.properties.STATE}<a href="#">{hospital.author}</a></p>
                            <hr />
                            <p>{hospital.properties.NAICS_DESC}</p>
                            <a href={hospital.properties.SOURCE} class="stretched-link">View more</a>
                        </div>
                        <hr />
                    </div>
                ))
        }
        else {
            form =
                <hr />
        }
        return (
            <main>
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
                <div>
                    <HospitalZipSearchForm onSubmit={this.handleSubmit.bind(this)} herf='#'></HospitalZipSearchForm>
                    <HospitalNameSearchForm onSubmit={this.handleSubmit2.bind(this)} herf='#'></HospitalNameSearchForm>
                </div>
                <div className="row">
                    <div className="col-md-8 blog-main">
                        <h1 className="pb-3 mb-4 font-italic border-bottom">
                            Search Result
                        </h1>
                        {form}
                    </div>
                </div>
            </main>
        );
    }
}
export default HospitalSearch;