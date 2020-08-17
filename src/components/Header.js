import React, { Component } from "react";

function Header(props) {
    return (
        <div>
            <header>
                <div className="signatures site-title">
                    <a onClick={props.changePageToHome}>Danlin Hou</a>
                </div>
            </header>
            <div className="row end-xs float">
                <div className="lang-switch col-xs-8 col-xs-offset-9">
                    {" "}
                    <a onClick={props.changePageToProjects}>
                        Projects
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    {""}
                    <a onClick={props.changePageToTest}>
                        Danlin's Resume
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {" "}
                    <a onClick={props.changePageToLogin}>
                        Login
                    </a>
                    
                </div>

                <div className="lang-switch col-xs-3 col-xs-offset-9">
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
