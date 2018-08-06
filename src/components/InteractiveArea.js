import React, { Component } from 'react'
import Operators from './Operators'
import Numbers from './Numbers'

const InteractiveArea = (props) => {
    return (
        <div className="interactiveArea">
            <Operators />
            <Numbers onClick={props.onClick}/>
        </div>
    )
}

export default InteractiveArea
