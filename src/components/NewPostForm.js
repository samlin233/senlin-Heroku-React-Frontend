import React, { Component } from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';

class NewPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            image: "",
            author: localStorage.getItem('username')
        };
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handletextChange = this.handletextChange.bind(this);
        this.handleimageChange = this.handleimageChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState(props);
    }

    handletextChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    handleimageChange(e) {
        this.setState({
            image: e.target.value
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter your title here" required="required"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        className="form-control" />
                </Form.Group>
                {/* <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select areas this post related to</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text:</Form.Label>
                    <Form.Control type="text" as="textarea" rows={3}
                        id="blog_post_text"
                        required="required"
                        value={this.state.text}
                        onChange={this.handletextChange}
                        className="form-control" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter your title here"
                        value={this.state.image}
                        onChange={this.handleimageChange}
                        className="form-control" />
                </Form.Group>
                <Form.Group>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button type="submit"
                        id="blog_post_submit"
                        className="btn-default btn">
                            Submit
                        </button>
                    </div>
                </Form.Group>
            </Form>
            // <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
            //     <div id="blog_post">
            //         <div className="form-group">
            //             <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
            //             <div className="col-sm-10">
            //                 <input type="text"
            //                        id="blog_post_title"
            //                        required="required"
            //                        value={this.state.title}
            //                        onChange={this.handleTitleChange}
            //                        className="form-control"/>
            //             </div>
            //         </div>
            //         <div className="form-group">
            //             <label className="col-sm-2 control-label required" htmlFor="blog_post_text">text</label>
            //             <div className="col-sm-10">
            //                 <input type="text"
            //                        style={{ height: 200 }}
            //                        id="blog_post_text"
            //                        required="required"
            //                        value={this.state.text}
            //                        onChange={this.handletextChange}
            //                        className="form-control"
            //                        />
            //             </div>
            //         </div>
            //         <div className="form-group">
            //             <label className="col-sm-2 control-label required" htmlFor="blog_post_image">image</label>
            //             <div className="col-sm-10">
            //                 <input type="text"
            //                        id="blog_post_image"
            //                        required="required"
            //                        value={this.state.image}
            //                        onChange={this.handleimageChange}
            //                        className="form-control"/>
            //             </div>
            //         </div>
            //         <div className="form-group">
            //             <div className="col-sm-2"></div>
            //             <div className="col-sm-10">
            //                 <button type="submit"
            //                         id="blog_post_submit"
            //                         className="btn-default btn">
            //                     Submit
            //                 </button>
            //             </div>
            //         </div>
            //     </div>
            // </form>
        );
    }
}

export default NewPostForm;