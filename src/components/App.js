import React, {Component} from 'react';
import Header from './Header';
import DrumMachine from './DrumMachine';

//Import audio files
import kick from './../audio/kick.wav';
import hh1 from './../audio/hat1.wav';
import hh2 from './../audio/hihat.wav';
import clave from './../audio/clave.wav';
import perc1 from './../audio/perc 1.wav';
import perc2 from './../audio/perc 2.wav';
import perc3 from './../audio/perc 3.wav';
import triangle from './../audio/triangle.wav';
import snare from './../audio/snare.wav';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            controls: [["q", "w", "e", "a", "s", "d", "z", "x", "c"], ["7", "8", "9", "4", "5", "6", "1", "2", "3"]],
            display: "Welcome!",
            useNumPad: false
        }

        //Update this with all sounds and update #display with the names
        this.sounds = [
            {
                name: "Kick",
                src: kick
            },
            {
                name: "Hihat 1",
                src: hh1
            },
            {
                name: "Hihat 2",
                src: hh2
            },
            {
                name: "Perc 1",
                src: perc1
            },
            {
                name: "Perc 2",
                src: perc2
            },
            {
                name: "Perc 3",
                src: perc3
            },
            {
                name: "Triangle",
                src: triangle
            },
            {
                name: "Clave",
                src: clave
            },
            {
                name: "Snare",
                src: snare
            }
        ];

        this.handleControlSwitch = this.handleControlSwitch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePadClick = this.handlePadClick.bind(this);
    }

    handleControlSwitch(){
        this.setState({useNumPad: !this.state.useNumPad});
    }

    handleKeyPress(e){
        let controls = this.state.controls[this.state.useNumPad ? 1 : 0];
        if(controls.includes(e.key)){
            document.getElementById(e.key.toUpperCase()).pause();
            document.getElementById(e.key.toUpperCase()).play();
            this.updateDisplay(this.sounds[controls.indexOf(e.key.toLowerCase())].name)
        }
    }

    handlePadClick(e){
        let controls = this.state.controls[this.state.useNumPad ? 1 : 0];
        let index = e.target.id.slice(-1);
        document.getElementById(index).play();
        this.updateDisplay(this.sounds[controls.indexOf(index.toLowerCase())].name)
    }

    updateDisplay(text){
        this.setState({display: text});
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
            handlePadClick={this.handlePadClick}
            onKeyPress={this.handleKeyPress}
            sounds={this.sounds}
            />

        </div>
        );
    }
}