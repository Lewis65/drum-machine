import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/main.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return <div>
            <h1>Welcome to your React App.</h1>
            <p>Hot reloading is enabled. Saving changes to files in /src or /dist/views triggers a reload. Hot!</p>
            </div>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

module.hot.accept();