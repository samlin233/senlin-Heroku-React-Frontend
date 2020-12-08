import React from 'react';
import HospitalNameSearchForm from './HospitalNameSearchForm';
import HospitalZipSearchForm from './HospitalZipSearchForm';
import { ZipSearch, NameSearch } from '../actions/HospitalSearch';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Map, GoogleApiWrapper } from 'google-maps-react';
export default class HospitalSearch extends React.Component {

    handleSubmit(data) {
        ZipSearch(data);
        this.props.history.push('/HospitalSearch');
    }
    handleSubmit2(data) {
        NameSearch(data);
        this.props.history.push('/HospitalSearch')
    }

    render() {
        const mapStyles = {
            width: '180',
            height: '100',
          };
        let form;
        if (localStorage.getItem('hospitals') === undefined || localStorage.getItem('hospitals').length > 1) {
            let mapOfHospital = JSON.parse(localStorage.getItem('hospitals'));
            form =
                mapOfHospital.map(hospital => (
                    <div class="row no-gutters bg-light position-relative" key={hospital.id}>
                        <Card style={{ width: '18rem' }}>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={
                                {
                                    lat: -1.2884,
                                    lng: 36.8233
                                }
                                }
                            />
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{hospital.properties.NAME}</Card.Title>
                                <Card.Text>
                                {hospital.properties.CITY + hospital.properties.STATE}
                                {hospital.author}
                                <hr />
                                <p>{hospital.properties.NAICS_DESC}</p>
                                </Card.Text>
                                <Button variant="primary" href={hospital.properties.SOURCE}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
        }
        else {
            form = null
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
                        <CardGroup>
                            {form}
                        </CardGroup>
                    </div>
                </div>
            </main>
        );
    }
}