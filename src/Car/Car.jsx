import React, { Component } from 'react'
import classes from './Car.module.scss'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

  render() {
    console.log('Car render!')

    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }

    return (
      <React.Fragment>
        <h3>
          Car name: {this.props.name} {this.props.model}
        </h3>
        <p>
          <strong>Year: {this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button className={classes['btn-delete']} onClick={this.props.onDelete}>
          Delete
        </button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
}

export default withClass(Car, classes.Car)
