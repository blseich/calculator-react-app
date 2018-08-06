import React from 'react'
import Button from './Button'

const ClearButton = (props) => {
    return (
        <Button value="clr" onClick={props.onClick}/>
    )
}

export default ClearButton
