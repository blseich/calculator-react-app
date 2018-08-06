import React, { Component } from 'react'
import Button from './Button'

const Operators = (props) => {
    return (
        <div className="Operators">
            <Button value="+"/>
            <Button value="-"/>
            <Button value="*"/>
            <Button value="/"/>
        </div>
    )
}

export default Operators
