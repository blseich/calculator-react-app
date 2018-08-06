import React, {Component} from 'react'

const Button = (props) => {
    return (
        <button
        className="button"
        label={props.value}
        onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Button
