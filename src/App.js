import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestComponent from './components/TestComponet';
import Article from './components/Article';
import Login from './components/Login';
import Projects from './components/Projects';
import NewPost from './components/NewPost'
import Type from './components/Type'

class App extends Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
    this.mainContent = this.mainContent.bind(this)
    this.changeLogin = this.changeLogin.bind(this)
}

  state = { 
    currentPage: 'newPost',
    articleId: -1,
    isLogin: false,
    typename: ''
   }

   changePage(pageName, event) {
     console.log(event !== undefined && event.target.getAttribute("data-typename"));
      this.setState({
        currentPage: pageName,
        articleId: event !== undefined && event.target.getAttribute("data-id"),
        typename: event !== undefined && event.target.getAttribute("data-type"),
      })
   }

   changeLogin() {
    this.setState({
        isLogin: !this.state.isLogin
    });
}

   mainContent = () => {
    if (this.state.currentPage === 'home'){
      return (<Home changePage = {this.changePage} isLogin = {this.state.isLogin} />)
    }

    if (this.state.currentPage === 'test'){
      return < TestComponent />
    }
    
    if (this.state.currentPage === 'article'){
      return <Article articleId = {this.state.articleId}/>
    }

    if (this.state.currentPage === 'login'){
      return < Login changeLogin = {this.changeLogin} changePage = {this.changePage}></Login>
    }

    if (this.state.currentPage === 'projects'){
      return <Projects></Projects>
    }

    if (this.state.currentPage === 'newPost'){
      return <NewPost changePage = {this.changePage}></NewPost>
    }

    if (this.state.currentPage === 'type') {
      return <Type typename={this.state.typename} />
    }


   }


  render() {

    return (
      <div>
        <article className="posts">
        <div className="row">
          <div className="col-xs-12">
          <div>
            <header>
                <div className="signatures site-title">
                    <a onClick={e => this.changePage("home")}>Danlin Hou</a>
                </div>
            </header>
            <div className="row end-xs float">
                <div className="lang-switch col-xs-8 col-xs-offset-9">
                    {" "}
                    <a onClick={e => this.changePage("projects")}>
                        Projects
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    {""}
                    <a onClick={e => this.changePage("test")}>
                        Danlin's Resume
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {" "}
                    <a onClick={e => this.changePage("login")}>
                        Login
                    </a>
                    
                </div>

                <div className="lang-switch col-xs-3 col-xs-offset-9">
                    
                </div>
            </div>
        </div>
            <div className="header-line" />
            
            
            {this.mainContent()}
            
            
            
            <div className="site-footer">
              <div className="site-footer-item"><a  target="_blank">Telegram</a></div>
              <div className="site-footer-item"><a  target="_blank">Subscribe</a></div>
              <div className="site-footer-item"><a  target="_blank">RSS</a>
              </div>
              <div className="site-footer-item"><a  target="_blank">Travel</a>
              </div>
              <div className="site-footer-item"><a  target="_blank">About</a></div>
            </div>
          </div>
        </div>
      </article>
    



      </div>

    )

    
    

    
    
  }
}
 
export default App;
