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


    render() {
        return (<div className="Calculator">
            <Display value={this.state.output}/>
            <InteractiveArea/>
        </div>);
    }
}

export default App;
