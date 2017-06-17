console.log('Hello!');

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';

ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
);
