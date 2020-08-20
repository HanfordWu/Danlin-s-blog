import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.contentInput = React.createRef();
        this.imageInput = React.createRef();
    }

    state = {
        type: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit(e) {
        const title = this.titleInput.current.value;
        const content = this.contentInput.current.value;
        const imageURL = this.imageInput.current.value;
        const type = this.state.type;

        if (type === "project") {
            axios({
                method: "post",
                url: "http://localhost:8080/saveProject",
                data: {
                    title: title,
                    description: content,
                    image: imageURL
                },
            })
                .then((res) => {
                    if (res.data.code === 200) {
                        this.props.changePage("projects");
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else {
            axios({
                method: "post",
                url: "http://localhost:8080/saveArticle",
                data: {
                    title: title,
                    content: content,
                    type: type,
                    image: imageURL
                },
            })
                .then((res) => {
                    if (res.data.code === 200) {
                        this.props.changePage("home");
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        }

        e.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Label>
                    <div style={{ fontSize: "20px", fontFamily: "serif" }}>
                        Blog Title
                    </div>
                </Form.Label>
                <Form.Control
                    ref={this.titleInput}
                    type="text"
                    placeholder="Title"
                />
                <br />
                <Form.Check
                    type="radio"
                    id="type"
                    value="1"
                    inline
                    name="type"
                    label={`Thought`}
                    onChange={this.handleChange}
                />
                <Form.Check
                    type="radio"
                    id="type"
                    inline
                    value="3"
                    name="type"
                    label={`Research`}
                    onChange={this.handleChange}
                />
                <Form.Check
                    type="radio"
                    id="type"
                    inline
                    value="2"
                    name="type"
                    label={`Life`}
                    onChange={this.handleChange}
                />
                <Form.Check
                    type="radio"
                    id="type"
                    inline
                    value="project"
                    name="type"
                    label={`Project`}
                    onChange={this.handleChange}
                />
                <br />
                <br />

                <Form.Control
                    ref={this.imageInput}
                    type="text"
                    placeholder="imageURL"
                />

                <Form.Group controlId="formBasicPassword">
                    <br />
                    <Form.Label>
                        <div style={{ fontSize: "20px", fontFamily: "serif" }}>
                            Content:
                        </div>
                    </Form.Label>
                    <Form.Control
                        ref={this.contentInput}
                        as="textarea"
                        rows="20"
                        placeholder="Transform MS. Word to html, then paste here ~~"
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default NewPost;
