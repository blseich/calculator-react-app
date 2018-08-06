import React, { Component } from 'react'
import Button from './Button'

const EqualsButton = (props) => {
    return (
        <Button value='=' onClick={props.onClick}/>
    )
}

export default EqualsButton
