import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _ from 'lodash';
import store from 'store';
import App from './App';

if (_.isUndefined(store.get('documents'))) {
    store.set('documents', []);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
