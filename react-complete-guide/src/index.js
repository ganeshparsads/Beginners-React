import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ListAssignment from './assignment-1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<ListAssignment />, document.getElementById('root'));

registerServiceWorker();
