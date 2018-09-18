import React, {Component} from 'react';

export default class DrumPad extends Component {
    render(){
        console.log(this.props, this.key)
        return (
        <div className="drum-pad">
            <div className="drum-pad-key">
                {this.props.keyPress}
            </div>
            <div className="drum-pad-label">
                {this.props.label}
            </div>
        </div>
        );
    }
}