import React, { Component } from 'react';
import Header from './Header';

import {Form, Button} from 'react-bootstrap';


class Projects extends Component {
    state = {  }
    render() { 
        return (  
          <div id="posts-list">
            <h1 className="taxonomy-term">Tech</h1>

            <section>
              <h1 className="site-date-catalog">2020</h1>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-06-14 00:00:00 UTC">Jun 14</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/deep-into-distributed-filesystem/">分布式文件系统的演化</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-05-13 00:00:00 UTC">May 13</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/how-animal-crossing-online-work/">从动物森友会聊主机游戏联机机制</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="sub-header-line" />
            
            
            <h1 className="taxonomy-term">Tech</h1>

            <section>
              <h1 className="site-date-catalog">2020</h1>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-06-14 00:00:00 UTC">Jun 14</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/deep-into-distributed-filesystem/">分布式文件系统的演化</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-05-13 00:00:00 UTC">May 13</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/how-animal-crossing-online-work/">从动物森友会聊主机游戏联机机制</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="sub-header-line" />
            <h1 className="taxonomy-term">Tech</h1>
            <section>
              <h1 className="site-date-catalog">2020</h1>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-06-14 00:00:00 UTC">Jun 14</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/deep-into-distributed-filesystem/">分布式文件系统的演化</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row posts-line">
                <div className="posts-date col-xs-2">
                  <time dateTime="2020-05-13 00:00:00 UTC">May 13</time>
                </div>
                <div className="posts-title col-xs-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <a href="https://blog.joway.io/posts/how-animal-crossing-online-work/">从动物森友会聊主机游戏联机机制</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}
 
export default Projects;