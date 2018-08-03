import React, { Component } from 'react'
import Operators from './Operators'

class InteractiveArea extends Component {
    render(){
        return (
            <div className="interactiveArea">
                <Operators />
            </div>
        )
    }
}

export default InteractiveArea