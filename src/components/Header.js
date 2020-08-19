import React, { Component } from "react";





class Header extends Component {

    constructor(props){
        super(props);
        this.changePageToHome = this.changePageToHome.bind(this);
        this.changePageToProjects = this.changePageToProjects.bind(this)
    }

    changePageToHome = () => this.props.changePageToHome;
    changePageToProjects = () => this.props.changePageToProjects;

    render(){
    return (
        <div>
            <header>
                <div className="signatures site-title">
                    <a onClick={this.changePageToHome}>Danlin Hou</a>
                </div>
            </header>
            <div className="row end-xs float">
                <div className="lang-switch col-xs-8 col-xs-offset-9">
                    {" "}
                    <a onClick={this.changePageToProjects}>
                        Projects
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    {""}
                    <a onClick={this.changePageToTest}>
                        Danlin's Resume
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {" "}
                    <a onClick={this.changePageToLogin}>
                        Login
                    </a>
                    
                </div>

                <div className="lang-switch col-xs-3 col-xs-offset-9">
                    
                </div>
            </div>
        </div>
    );
}
}

export default Header;
