import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button className="button" label={this.props.value} onClick={() => this.props.clicky(this.props.value)}/>
        )
    }
}

export default Button