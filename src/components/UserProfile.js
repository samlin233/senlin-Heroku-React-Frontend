import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NewPostForm from './NewPostForm';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserProfileForm from './UserProfileForm';
import DefaultProfile from '../image/DefaultProfile.png';


class UserProfile extends React.Component{

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <h1>Test</h1>
        )
    }
}
//The above is just dummy code I wrote to make sure the app still compiles. Once I get the link for the fetch requests I will delete it and replace it with
// the code I commented out.

/*    
    constructor(){
        super();
        this.state = {
            loading: true,
            person: null
        }
    }

    async componentDidMount(){
        const url = "";
        const response = await fetch(url) // Edit once I get the url
        const data = await response.json(); 
        this.setState({person: data.results[0], loading = false}) // Edit once I get the url
    }   

    render(){
        return (
            <div>
                <div>
                    {(this.state.loading || !this.state.person) ? 
                    (<h3>Loading...</h3>) : 
                    <div>
                        <h3>User Profile Page</h3>
                        <img src={DefaultProfile} />
                        <h3>Name: {this.state.person.Name}</h3>
                        <h3>Age: {this.state.person.Age}</h3>
                        <h3>Gender: {this.state.person.Gender}</h3>
                        <h3>Bio:</h3>
                        <p>{this.state.person.Bio}</p>
                    </div>
                }
                </div>
            </div>
            )
    }
}
*/
export default UserProfile;
