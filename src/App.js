import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestComponent from './components/TestComponet';
import Article from './components/Article';
import Login from './components/Login';
import Projects from './components/Projects';
import NewPost from './components/NewPost'

class App extends Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
    this.mainContent = this.mainContent.bind(this)
}

  state = { 
    currentPage: 'newPost',
    articleId: -1,
   }

   changePage(pageName, event) {
      this.setState({
        currentPage: pageName,
        articleId: event !== undefined && event.target.getAttribute("data-id"),
      })
   }

   mainContent = () => {
    if (this.state.currentPage === 'home'){
      return (<Home changePage = {this.changePage} />)
    }

    if (this.state.currentPage === 'test'){
      return < TestComponent />
    }
    
    if (this.state.currentPage === 'article'){
      return <Article articleId = {this.state.articleId}/>
    }

    if (this.state.currentPage === 'login'){
      return < Login></Login>
    }

    if (this.state.currentPage === 'projects'){
      return <Projects></Projects>
    }

    if (this.state.currentPage === 'newPost'){
      return <NewPost></NewPost>
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
    



      </div>

    )

    
    

    
    
  }
}
 
export default App;
