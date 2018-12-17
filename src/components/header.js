import React, { Component } from 'react';
import './header.css'

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <div className="bar-left">
                        <span className="span-logo">
                            <i className="fab fa-angrycreative"></i>
                        </span>
                        <span className="left-nav">
                            <a href="/html/">Home</a>
                            <a href="/css/">Documentation</a>
                            <a href="/js/">Themes</a>
                            <a href="/jquery/">Blog</a>
                        </span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
