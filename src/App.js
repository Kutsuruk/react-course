import './App.css';
import React from 'react';
import Car from './Car/Car'

function App() {

  const divStyle = {
    textAlign: 'center',
    background: 'grey'
  }

  return (
      <div style={divStyle}>
        <h1>Hello world!</h1>

        <Car name="Tesla" year={2015} model="S">
          <p style={{color: "red"}}>COLOR</p>
        </Car>
        <Car name="BMW" year={2013} model="328i">
          <p style={{color: "white"}}>COLOR</p>
        </Car>
        <Car name="Audi" year={2019} model="A8 long">
          <p style={{color: "black"}}>COLOR</p>
        </Car>
    </div>
    
  );
}

export default App;
