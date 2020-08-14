import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.inc = this.inc.bind(this);
    }
    inc(){
        this.setState({count: this.state.count+1});
    }
    render(){
        return (
            <div>
                <button onClick={this.inc}>Press it</button>
                <h1>Counter: {this.state.count}</h1>
            </div>
        );
    }

}

export default Counter;