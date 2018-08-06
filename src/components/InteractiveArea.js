import React, { Component } from 'react'
import Operators from './Operators'
import Numbers from './Numbers'

class InteractiveArea extends Component {
    render(){
        return (
            <div className="interactiveArea">
                <Operators />
                <Numbers />
            </div>
        )
    }
}

export default InteractiveArea
