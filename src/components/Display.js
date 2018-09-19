import React from 'react';

export default class Display extends React.Component {
    render(){
        return(
        <div id="display">
            <span className="display-text">{this.props.text}</span>
        </div>
        );
    }
}