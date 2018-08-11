import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/main.scss';

import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

module.hot.accept();