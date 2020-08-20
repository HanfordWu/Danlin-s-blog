import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    state = {};

    login(e) {
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        axios({
            method: "post",
            url: "http://localhost:8080/login",
            data: {
                username: username,
                password: password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.code === 200) {
                    this.props.changeLogin();
                    this.props.changePage('home')
                } else {
                    alert("Wrong password");
                }
            })
            .catch((error) => {
                // alert(error.message);
                console.log(error);
            });
        e.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={(e) => this.login(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={this.usernameInput}
                        type="text"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={this.passwordInput}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        );
    }
}

export default Login;
