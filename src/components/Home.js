import React, { Component } from "react";
// import './staticfile/highlight.pack'
import "../staticfile/flexboxgrid-6.3.1.min.css";
import Header from "./Header";
import axios from "axios";
import moment from 'moment';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
      articleList: []
    };


   displayArticles = () =>{
      return this.state.articleList.map((element, index) => {
        console.log(element.year);
        return (
            <section key={index}>
                <h1 className="site-date-catalog">
                    {element.year}
                </h1>
                {element.blogs.map((article, index) => {
                    return (
                        <div className="row posts-line" key={index}>
                            <div className="posts-date col-xs-2">
                                <time dateTime="2020-06-14 00:00:00 UTC">
                                    {moment(article.createDate).format('MMM Do')}
                                </time>
                            </div>
                            <div className="posts-title col-xs-10">
                                <div className="row">
                                    <div className="col-xs-9 col-sm-10">
                                        <a data-id = {article.id}
                                            onClick={(e) =>
                                                this.props.changePage(
                                                    "article", e
                                                )
                                            }
                                        >
                                            {article.title}
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-2 posts-categories">
                                        <div className="posts-category">
                                            <a href="https://blog.joway.io/categories/tech/">
                                                <strong>
                                                    {article.type}
                                                </strong>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        );
    })
    }

    componentDidMount(){
          axios
            .get("/getAllArticles")
            .then((res) => {
              this.setState({
                  articleList: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
    }

    render() {
        return (
            <div id="posts-list">
                {this.displayArticles()}
            </div>
        );
    }
}

export default Home;
