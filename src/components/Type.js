import React, { Component } from "react";
// import './staticfile/highlight.pack'
import "../staticfile/flexboxgrid-6.3.1.min.css";
import axios from "axios";
import moment from "moment";
import { Badge } from "react-bootstrap";

class Type extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        articleList: [],
    };

    displayArticles = () => {
        console.log(this.state.articleList);
        return this.state.articleList.map((element, index) => {
            return (
                <section key={index}>
                    <h1 className="site-date-catalog">{element.year}</h1>
                
                    {element.blogs.map((article, index) => {
                        return (
                            <div className="row posts-line" key={index}>
                                <div className="posts-date col-xs-2">
                                    <time dateTime="2020-06-14 00:00:00 UTC">
                                        {moment(article.createDate).format(
                                            "MMM Do"
                                        )}
                                    </time>
                                </div>
                                <div className="posts-title col-xs-10">
                                    <div className="row">
                                        <div className="col-xs-9 col-sm-10">
                                            <a
                                                data-id={article.id}
                                                onClick={(e) =>
                                                    this.props.changePage(
                                                        "article",
                                                        e
                                                    )
                                                }
                                            >
                                                {article.title}
                                            </a>
                                        </div>
                                        {this.props.isLogin ? (
                                            <div>
                                                <Badge pill variant="dark">
                                                    edit
                                                </Badge>
                                                <Badge pill variant="dark">
                                                    delete
                                                </Badge>
                                            </div>
                                        ) : (
                                            ``
                                        )}

                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            );
        });
    };

   




    componentDidMount() {
        axios
            .get("http://localhost:8080/getType?typename="+this.props.typename)
            .then((res) => {
                this.setState({
                    articleList: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return <div id="posts-list">
<h1 className="taxonomy-term">{this.props.typename}</h1>

            {this.displayArticles()}
            </div>;
    }
}

export default Type;
