import React, {Component} from 'react'

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    minusCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return(
            <React.Fragment>
                <h3>Counter: {this.state.counter}</h3>
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.minusCounter}>-</button>
            </React.Fragment>
        )
    }

    /* render() {
        return[
            <h3 key={'1'}>Counter: {this.state.counter}</h3>,
            <button key={'2'} onClick={this.addCounter}>+</button>,
            <button key={'3'} onClick={this.minusCounter}>-</button>,
        ]
    } */
}