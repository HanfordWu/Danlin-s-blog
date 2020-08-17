import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestComponent from './components/TestComponet';
import Article from './components/Article';
import Login from './components/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
}

  state = { 
    currentPage: 'home'
   }

   changePage(pageName) {
      this.setState({
        currentPage: pageName
      })
   }


  render() {
    
    if (this.state.currentPage === 'home'){
      return <Home changePage = {this.changePage}></Home>
    }

    if (this.state.currentPage === 'test'){
      return < TestComponent />
    }
    
    if (this.state.currentPage === 'article'){
      return <Article changePageToHome = {this.changePage}></Article>
    }

    if (this.state.currentPage === 'login'){
      return < Login changePageToHome = {this.changePage}></Login>
    }

    if (this.state.currentPage === 'projects'){
      return <Article changePageToProjects = {this.changePage}></Article>
    }

    
    
  }
}
 
export default App;
