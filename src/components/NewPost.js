import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";


class NewPost extends Component {

  constructor(props){
    super(props)
    this.titleInput = React.createRef();
    this.contentInput = React.createRef();
  }


    state = {};




  handleLogin(e){
      const title = this.titleInput.current.value;
      const content = this.contentInput.current.value;

      axios({
        method: 'post',
        url: '/saveArticle',
        data: {
          title: title,
          content: content
        }
      }).then(
        res => {
          alert(res.message)
        })
        .catch(error => {
          alert(error.message)
        });
      e.preventDefault()
  }

    render() {
        return (
            <Form onSubmit = {e => this.handleLogin(e)}>
                <Form.Label>
                    <div style={{ fontSize: "20px", fontFamily: "serif" }}>
                        Blog Title
                    </div>
                </Form.Label>
                <Form.Control ref={this.titleInput} type="text" placeholder="Title" />
<br/>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        <div style={{ fontSize: "20px", fontFamily: "serif" }}>
                            Content:
                        </div>
                    </Form.Label>
                    <Form.Control ref={this.contentInput} as="textarea" rows="20" placeholder="Transform MS. Word to html, then paste here ~~" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default NewPost;
