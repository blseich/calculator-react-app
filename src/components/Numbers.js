import React, { Component } from 'react'
import Button from './Button'
import ClearButton from './ClearButton'
import EqualsButton from './EqualsButton'

const Numbers = (props) => {
    return (
        <div className="Numbers">
            <div>
                <Button
                value="1"
                onClick={props.onClick}/>
                <Button
                value="2"
                onClick={props.onClick}/>
                <Button
                value="3"
                onClick={props.onClick}/>
            </div>
            <div>
                <Button
                value="4"
                onClick={props.onClick}/>
                <Button
                value="5"
                onClick={props.onClick}/>
                <Button
                value="6"
                onClick={props.onClick}/>
            </div>
            <div>
                <Button
                value="7"
                onClick={props.onClick}/>
                <Button
                value="8"
                onClick={props.onClick}/>
                <Button
                value="9"
                onClick={props.onClick}/>
            </div>
            <div>
                <ClearButton onClick={props.onClick}/>
                <Button
                value="0"
                onClick={props.onClick}/>
                <EqualsButton onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default Numbers
