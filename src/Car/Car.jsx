import React from 'react'

const Car = props => {
    return(
        <div>
            <h3>Car name: {props.name} {props.model}</h3>
            <p>
                <strong>
                    Year: {props.year}
                </strong>
                {props.children}
            </p>
        </div>
    )
}


export default Car;