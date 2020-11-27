import React from 'react'

const Car = props => {
    return(
        <div>
            <h3>Car name: {props.name} {props.model}</h3>
            <p>
                <strong>
                    Year: {props.year}
                </strong>
            </p>
            <button onClick={props.onChangeTitle}>Change title</button>
        </div>
    )
}


export default Car;