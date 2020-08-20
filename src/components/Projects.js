import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";


import {Form, Button, CardGroup, Card} from 'react-bootstrap';





class Projects extends Component {
    state = { 
      projects:[]
     }



  componentDidMount(){
    axios
            .get("http://localhost:8080/findAllProjects")
            .then((res) => {
              this.setState({
                projects: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
  }


  displayProjects(){
    return this.state.projects.map(project => {

      return <Card style={{margin: '10px'}}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    })

  }



    render() { 
        return (  
          <CardGroup>
            {this.displayProjects()}
          </CardGroup>);
    }
}
 
export default Projects;