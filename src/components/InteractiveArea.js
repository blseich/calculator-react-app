import React from 'react'
import Operators from './Operators'
import Numbers from './Numbers'

const InteractiveArea = (props) => {
    return (
        <div className="interactiveArea">
            <Operators onClick={props.onClick}/>
            <Numbers onClick={props.onClick}/>
        </div>
    )
}

export default InteractiveArea
