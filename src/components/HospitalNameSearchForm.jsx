import React from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Form
} from 'react-bootstrap';

class HospitalNameSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentWillReceiveProps(props) {
        this.setState(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    
    handleNameChange(e){
        this.setState({
            element: e.target.value
        })
    }
        

    render() {
        return (
            <Form name="HospitalSearch" onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        type = "text"
                        placeholder="Type in name of Hospital"
                        className="mr-sm-2"
                        aria-label="Name Research:"
                        aria-describedby="basic-addon2"
                        value = {this.state.element}
                        onChange = {this.handleNameChange}
                    />
                    <InputGroup.Append>
                        <Button type = "submit" variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        )
    };
}

export default HospitalNameSearchForm;