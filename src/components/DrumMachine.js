import React, {Component} from 'react';
import DrumPad from './DrumPad';

import kick from '../audio/kick.wav';

export default class DrumMachine extends Component {
    render(){
        let controls = ["q", "w", "e", "a", "s", "d", "z", "x", "c"]
        if(this.props.useNumPad){
            controls = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
        }

        let sounds = [
            {name: "Perc 1", path: ""},
            {name: "Perc 2", path: ""},
            {name: "Hihat 1", path: ""},
            {name: "Perc 3", path: ""},
            {name: "Perc 4", path: ""},
            {name: "Hihat 2", path: ""},
            {name: "Kick", path: kick},
            {name: "Clave", path: ""},
            {name: "Snare", path: ""}
        ]

        return (
        <div id="drum-machine">
            <audio ref={(kick) => {this.kick = kick;}}>
                <source src={kick}>
                </source>
            </audio>
            <div id="display">
            {controls.map((keyPress, index) => {
                return(
                    <DrumPad 
                    key={index} 
                    keyPress={keyPress.toUpperCase()} 
                    label={sounds[index].name} 
                    index={index}
                    />
                )
            })}
            </div>
            
        </div>
        );
    }
}