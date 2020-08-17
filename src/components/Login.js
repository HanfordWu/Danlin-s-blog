import React, { Component } from 'react';
import Header from './Header';

import {Form, Button} from 'react-bootstrap';


class Login extends Component {
    state = {  }
    render() { 
        return (  
            <article className="post 简体中文" id="article">
        <div className="row">
          <div className="col-xs-12">
            <div className="site-header">
                {<Header changePageToHome = {this.changePageToHome} ></Header>}
              <div className="header-line" />
            </div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>



            
            <div className="site-footer">
              <div className="site-footer-item"><a href="https://t.me/biosthinking" target="_blank">Telegram</a></div>
              <div className="site-footer-item"><a href="https://mailchi.mp/a1a0d59e7a19/joway" target="_blank">Subscribe</a></div>
              <div className="site-footer-item"><a href="https://blog.joway.io/index.xml" target="_blank">RSS</a>
              </div>
              <div className="site-footer-item"><a href="https://blog.joway.io/travel" target="_blank">Travel</a>
              </div>
              <div className="site-footer-item"><a href="https://joway.io/" target="_blank">About</a></div>
            </div>
          </div>
        </div>
      </article>
         
         );
    }
}
 
export default Login;