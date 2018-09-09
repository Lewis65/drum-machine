import React, {Component} from 'react';
import DrumPad from './DrumPad';

export default class DrumMachine extends Component {
    render(){

        let controls = ["q", "w", "e", "a", "s", "d", "z", "x", "c"]
        if(this.props.useNumPad){
            controls = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
        }

        return (
        <div id="drum-machine">
            
            <div id="display">
            {controls.map((key, index) => {
                return(
                    <DrumPad key={key} index={index}/>
                )
            })}
            </div>
            
        </div>
        );
    }
}