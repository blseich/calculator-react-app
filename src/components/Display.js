import React from 'react'

const Display = (props) => {
    return (
        <div className="display">
            <div className="output">
                {props.value}
            </div>
        </div>
    )
}

export default Display
