import React from 'react'
import Button from './Button'

const Operators = (props) => {
    return (
        <div className="Operators">
            <Button value="+" onClick={props.onClick}/>
            <Button value="-" onClick={props.onClick}/>
            <Button value="*" onClick={props.onClick}/>
            <Button value="/" onClick={props.onClick}/>
        </div>
    )
}

export default Operators
