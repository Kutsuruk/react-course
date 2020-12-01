import React, { Component } from 'react'
import Radium from 'radium'
import './Car.scss'


class Car extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Car getDerivedStateFromProps', nextProps, prevState)
        return prevState
    }

    getSnapshotBeforeUpdate() {
        console.log('Car getSnapshotBeforeUpdate')
    }

    render() {
        console.log('Car render!')
        const inputClasses = ['input']

    if(this.props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if(this.props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        border: '1px solid #ccc',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer',
        }
    }

    return(
        <div className='Car' style={style}>
            <h3>Car name: {this.props.name} {this.props.model}</h3>
            <p>
                <strong>
                    Year: {this.props.year}
                </strong>
            </p>
            <input 
                onChange={this.props.onChangeName}  
                value={this.props.name} 
                className={inputClasses.join(' ')}
            />
            <button className='btn-delete' onClick={this.props.onDelete}>Delete</button>
        </div>
    )
    }
}


export default Radium(Car);