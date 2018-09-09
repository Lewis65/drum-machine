import React, {Component} from 'react';

export default class DrumPad extends Component {
    render(){
        return (
        <div className="drum-pad" id={"drum-pad-" + this.props.index}>
            <div className="drum-pad-label">
                {this.props.key}
            </div>
        </div>
        );
    }
}