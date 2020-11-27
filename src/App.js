import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car'

class App extends Component {
  
  state = {
    cars: [
      {name: 'Tesla', year: 2015, model: 'S'},
      {name: 'BMW', year: 2013, model: '328i'},
      {name: 'Audi', year: 2019, model: 'A8 long'},
    ],
    pageTitle: 'React components',
    showCars: false,
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }


  render() {
    console.log('Render!')

    const divStyle = {
    textAlign: 'center',
    background: 'grey'
  }

  let cars = null

  if(this.state.showCars) {
    cars = this.state.cars.map((car, index) => {
      return(
        <Car 
          key={index}
          name={car.name}
          year={car.year}
          model={car.model}
          onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
        />
      )
    })
  }
  
  return (
      <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>

          <button onClick={this.toogleCarsHandler}>Toggle cars</button><br />

          <input type='text'  onChange={this.handleInput} />

          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>
              Change title
          </button>

          { cars }

      </div>
    );
  }
}

export default App;
