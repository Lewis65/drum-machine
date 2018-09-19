import React, {Component} from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

export default class DrumMachine extends Component {
    render(){

        let sounds = [
            {name: "Perc 1", path: "./perc 1.wav"},
            {name: "Perc 2", path: ""},
            {name: "Hihat 1", path: ""},
            {name: "Perc 3", path: ""},
            {name: "Perc 4", path: ""},
            {name: "Hihat 2", path: ""},
            {name: "Kick", path: ""},
            {name: "Clave", path: ""},
            {name: "Snare", path: ""}
        ];

        return (
        <div id="drum-machine">

            <Display text={this.props.display} />
            
            <div id="pads">
            {this.props.controls.map((keyPress, index) => {
                return(
                    <DrumPad 
                    key={index} 
                    id={sounds[index].name}
                    keyPress={keyPress.toUpperCase()} 
                    label={sounds[index].name} 
                    index={index}
                    />
                )
            })}
            </div>

            <div id="control-config">
                <div className="control-heading">Controls</div>
                <div className="control-switch">
                    <span>QWE</span>
                    <label className="toggle" onMouseUp={this.props.handleControlSwitch}>
                        <input type="checkbox"></input>
                        <span className="slider"></span>
                    </label>
                    <span>NUM</span>
                </div>
            </div>
            
        </div>
        );
    }
}