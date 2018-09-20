import React, {Component} from 'react';

export default class DrumPad extends Component {
    render(){
        console.log(this.props, this.key)
        return (
        <div className="drum-pad">
            <div className="drum-pad-overlay" id={"drum-pad-" + this.props.keyPress} onMouseDown={this.props.handlePadClick}>
            </div>
            <div className="drum-pad-key">
                {this.props.keyPress}
            </div>
            <div className="drum-pad-label">
                {this.props.audio.name}
            </div>
            <audio className="clip" id={this.props.keyPress} preload="auto" src={this.props.audio.src}></audio>
        </div>
        );
    }
}