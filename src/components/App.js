import React, {Component} from 'react';
import Header from './Header';
import DrumMachine from './DrumMachine';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            controls: [["q", "w", "e", "a", "s", "d", "z", "x", "c"], ["7", "8", "9", "4", "5", "6", "1", "2", "3"]],
            display: "Welcome!",
            useNumPad: false
        }

        this.handleControlSwitch = this.handleControlSwitch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleControlSwitch(){
        this.setState({useNumPad: !this.state.useNumPad});
    }

    handleKeyPress(e){
        let controls = this.state.controls[this.state.useNumPad ? 1 : 0];
        if(controls.includes(e.key)){
            let index = controls.indexOf(e.key);
            console.log("Play sound number " + index);
        }
    }

    componentWillMount(){
        document.addEventListener("keypress", this.handleKeyPress);
    }
    componentWillUnmount(){
        document.removeEventListener("keypress", this.handleKeyPress);
    }

    render(){

        let controlsToUse = this.state.useNumPad ? 1 : 0;

        return (
        <div id="wrapper">

            <Header />

            <DrumMachine
            controls={this.state.controls[controlsToUse]}
            display={this.state.display}
            handleControlSwitch={this.handleControlSwitch}
            handleKeyPress={this.handleKeyPress}
            onKeyPress={this.handleKeyPress}
            />

        </div>
        );
    }
}