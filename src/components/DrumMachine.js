import React, {Component} from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

export default class DrumMachine extends Component {
    render(){
        return (
        <div id="drum-machine">

            <Display text={this.props.display} />
            
            <div id="pads">
            {this.props.controls.map((keyPress, index) => {
                return(
                    <DrumPad 
                    key={index}
                    keyPress={keyPress.toUpperCase()}
                    index={index}
                    audio={this.props.sounds[0]}
                    handlePadClick={this.props.handlePadClick}
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