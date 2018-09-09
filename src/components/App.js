import React, {Component} from 'react';
import Header from './Header';
import DrumMachine from './DrumMachine';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (<div>
            <Header />
            <DrumMachine />
        </div>);
    }
}