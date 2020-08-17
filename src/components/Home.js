import React, { Component } from 'react';
// import './staticfile/highlight.pack'
import '../staticfile/flexboxgrid-6.3.1.min.css'
import Header from './Header';

class Home extends Component {
  constructor(props) {
    super(props)
    this.changePageToTest = this.changePageToTest.bind(this)
    this.changePageToHome = this.changePageToHome.bind(this)
    this.changePageToArticle = this.changePageToArticle.bind(this)
    this.changePageToLogin = this.changePageToLogin.bind(this)
    this.changePageToProjects = this.changePageToProjects.bind(this)
}

    state = { 


     }

     changePageToTest(){
       this.props.changePage('test')
     }

     changePageToHome(){
      this.props.changePage('home')
    }
    changePageToArticle(){
      this.props.changePage('article')
    }

    changePageToLogin(){
      this.props.changePage('login')
    }

    changePageToProjects(){
      this.props.changePage('projects')
    }



    render() { 
      
        return ( 
            <article className="posts">
        <div className="row">
          <div className="col-xs-12">
            {<Header changePageToHome = {this.props.changePageToHome} changePageToTest={this.changePageToTest} changePageToLogin={this.changePageToLogin} changePageToProjects={this.changePageToProjects}></Header>}
            <div className="header-line" />
            <div id="posts-list">
              <section>
                <h1 className="site-date-catalog">2020</h1>
                <div className="row posts-line">
                  <div className="posts-date col-xs-2"><time dateTime="2020-06-14 00:00:00 UTC">Jun 14</time>
                  </div>
                  <div className="posts-title col-xs-10">
                    <div className="row">
                      <div className="col-xs-9 col-sm-10"><a onClick={this.changePageToArticle}>分布式文件系统的演化</a>
                      </div>
                      <div className="col-xs-3 col-sm-2 posts-categories">
                        <div className="posts-category"><a href="https://blog.joway.io/categories/tech/"><strong>Tech</strong></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </section>
            </div>
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
 
export default Home;