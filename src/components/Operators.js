import React, { Component } from 'react'
import Button from './Button'

class Operators extends Component {
    render() {
        return (
            <div className="Operators">
                <Button value="+"/>
                <Button value="-"/>
                <Button value="*"/>
                <Button value="/"/>
            </div>
        )
    }
}

export default Operators