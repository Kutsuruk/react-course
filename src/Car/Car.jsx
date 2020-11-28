import React from 'react'
import './Car.css'


const Car = props => {
    return(
        <div className='Car'>
            <h3>Car name: {props.name} {props.model}</h3>
            <p>
                <strong>
                    Year: {props.year}
                </strong>
            </p>
            <input onChange={props.onChangeName}  value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}


export default Car;