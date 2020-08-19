import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import moment from 'moment';


class Article extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        currentArticle: -1,
        article: ''
    };

    componentDidMount(){
        axios
            .get("/getArticle/"+this.props.articleId)
            .then((res) => {
                console.log(res);
              this.setState({
                article: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
    }

    



    render() {
        return (
            <article className="post 简体中文" id="article">
                <div className="row">
                    <div className="col-xs-12">
                        <header className="post-header">
                            <h1 className="post-title">{this.state.article.title}</h1>
                            <div className="row post-desc">
                                <div className="col-xs-6">
                                    <time
                                        className="post-date"
                                        dateTime="2020-03-02 00:00:00 UTC"
                                    >
                                        {moment(this.state.article.createDate).format('MMM Do YYYY')}
                                    </time>
                                </div>
                                <div className="col-xs-6">
                                    <div className="post-author">
                                        <a
                                            target="_blank"
                                            href="https://joway.io/"
                                        >
                                            @Danlin
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="post-content markdown-body">
                            {this.state.article.content}
                        </div>
                        <div className="row middle-xs">
                            <div className="col-xs-12">
                                <div className="post-category">
                                    <a href="https://categories/thought/">
                                        Thought
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Article;
