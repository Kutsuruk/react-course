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
    pageTitle: 'React components'
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


  render() {
    console.log('Render!')

    const divStyle = {
    textAlign: 'center',
    background: 'grey'
  }

  const cars = this.state.cars
  
  return (
      <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>

          <input type='text'  onChange={this.handleInput} />

          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>
              Change title
          </button>

          <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          model={cars[0].model} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
          />
          <Car 
          name={cars[1].name} 
          year={cars[1].year} 
          model={cars[1].model} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)}
          />
          <Car 
          name={cars[2].name} 
          year={cars[2].year} 
          model={cars[2].model}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)} 
          />
      </div>
    );
  }
}

export default App;
