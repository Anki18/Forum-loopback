import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>, document.getElementById('root'));
