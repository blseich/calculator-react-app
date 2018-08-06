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
        let number = event.target.getAttribute('label')
        this.setState({output: number})
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
