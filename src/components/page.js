import React, { Component } from 'react';

class Page extends Component {

    render() {
        return (
            <div>
                <img alt={this.props.name} src={this.props.avatar} />
            </div>
        );
    }
}

export default Page;
