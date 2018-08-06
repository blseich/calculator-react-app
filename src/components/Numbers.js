import React, { Component } from 'react'
import Button from './Button'
import ClearButton from './ClearButton'
import EqualsButton from './EqualsButton'

class Numbers extends Component {
    render() {
        return (
            <div className="Numbers">
                <div>
                    <Button
                    value="1" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="2" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="3" 
                    onClick={this.props.onClick}/>
                </div>
                <div>
                    <Button
                    value="4" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="5" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="6" 
                    onClick={this.props.onClick}/>
                </div>
                <div>
                    <Button
                    value="7" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="8" 
                    onClick={this.props.onClick}/>
                    <Button
                    value="9" 
                    onClick={this.props.onClick}/>
                </div>
                <div>
                    <ClearButton />
                    <Button
                    value="0" 
                    onClick={this.props.onClick}/>
                    <EqualsButton />
                </div>
            </div>
        )
    }
}

export default Numbers
