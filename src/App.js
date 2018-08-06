import React, {Component} from 'react'
import calculate from './functionality/string-calculator'
import Display from './components/Display'
import InteractiveArea from './components/InteractiveArea'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            output: "0"
        }
    }

    buttonPressedIsANumber(buttonPressed){
        return buttonPressed.match(/\d+/)
    }

    lastCharIsANumber(output){
        return output.slice(-1).match(/\d+/)
    }

    handleClick(event) {
        let output = this.state.output.slice()
        let buttonPressed = event.target.getAttribute('label')

        if(buttonPressed === "clr"){
            output = "0"
        } else{
            if(output === "0"){
                if(this.buttonPressedIsANumber(buttonPressed)){
                    output = buttonPressed
                }
            } else{
                if(buttonPressed === "=" && this.lastCharIsANumber(output)){
                    output = calculate(output)
                } else if(this.lastCharIsANumber(output) || this.buttonPressedIsANumber(buttonPressed)){
                    output += buttonPressed
                }
            }
        }

        this.setState({output})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.output}/>
                <InteractiveArea onClick={(e) => {this.handleClick(e)}}/>
            </div>
        );
    }
}

export default App;
