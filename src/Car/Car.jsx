import React from 'react'

const Car = props => {
    return(
        <div style={{
            border: 'solid 1px black',
            margin: '10px',
            padding: '10px',
            display: 'block',
        }}>
            <h3>Car name: {props.name} {props.model}</h3>
            <p>
                <strong>
                    Year: {props.year}
                </strong>
            </p>
            {/* <button onClick={props.onChangeTitle}>Change title</button> */}
            <input onChange={props.onChangeName}  value={props.name} />
        </div>
    )
}


export default Car;