import React from 'react'
import './Car.css'


const Car = props => {

    const inputClasses = ['input']

    if(props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if(props.name.length > 4) {
        inputClasses.push('bold')
    }

    return(
        <div className='Car'>
            <h3>Car name: {props.name} {props.model}</h3>
            <p>
                <strong>
                    Year: {props.year}
                </strong>
            </p>
            <input 
                onChange={props.onChangeName}  
                value={props.name} 
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}


export default Car;