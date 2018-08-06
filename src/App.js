import React, {Component} from 'react'
import Display from './components/Display'
import InteractiveArea from './components/InteractiveArea'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            output: "0"
        }
    }

    handleClick(event) {
        let output = this.state.output.slice()
        let number = event.target.getAttribute('label')

        if(output === "0"){
            output = number
        } else {
            output += number
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
