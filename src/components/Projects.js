import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";


import {Form, Button, CardGroup, Card} from 'react-bootstrap';





class Projects extends Component {
    state = { 
      projects:[]
     }



  componentDidMount(){

  }



    render() { 
        return (  
          <CardGroup>
  <Card style={{margin: '10px'}}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{margin: '10px'}}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{margin: '10px'}}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>);
    }
}
 
export default Projects;