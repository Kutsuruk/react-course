import classes from './App.module.scss';
import React, {Component} from 'react';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    console.log('App constructor!')
    super(props)

    this.state = {
    cars: [
      {name: 'Tesla', year: 2015, model: 'S'},
      {name: 'BMW', year: 2013, model: '328i'},
      {name: 'Audi', year: 2019, model: 'A8 long'},
    ],
    pageTitle: 'React components',
    showCars: false,
    clicked: false,
  }
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

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name

    const cars = [...this.state.cars] // clone new array from cars array with spread operator
    cars[index] = car

    this.setState({
      cars
    })
  }

  deleteHandler(index) {
    // console.log('Deleted')
    const cars = [...this.state.cars]
    cars.splice(index, 1)

    this.setState({
      cars
    })
  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render!')

    const divStyle = {
    textAlign: 'center',
  }

  let cars = null

  if(this.state.showCars) {
    cars = this.state.cars.map((car, index) => {
      return(
        <ErrorBoundary key={index}>
          <Car 
            name={car.name}
            year={car.year}
            index={index}
            model={car.model}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        </ErrorBoundary>
      )
    })
  }
  
  return (
      <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>

          <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
          </ClickedContext.Provider>
          

          <hr />

          <button className={classes['btn-toggle']} onClick={this.toogleCarsHandler}>Toggle cars</button><br />

          <input type='text'  onChange={this.handleInput} />

          {/* <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>
              Change title
          </button> */}

          <button onClick={() => {this.setState({clicked: true})}}>Change clicked</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20,
        }}>
          { cars }
        </div>
          

      </div>
    );
  }
}

export default App;
