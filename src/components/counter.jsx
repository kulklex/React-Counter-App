import React, { Component } from 'react'

class Counter extends React.Component {
   constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    add = () => {
        this.setState({number: this.state.number+1})
    }

    cut = () => {
        this.setState({number: this.state.number-1})
    }

    render() { 
        return <div>
            <h1>{this.state.number}</h1>
        </div>;
    }
}
 
export default Counter;

