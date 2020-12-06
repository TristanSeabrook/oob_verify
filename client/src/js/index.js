import React from 'react';
import ReactDOM from 'react-dom';

let state = require('./state');

console.log(state.multiboxMessage);
import Layout from './components/Layout';

let app = document.getElementById('app');

ReactDOM.render(<Layout state={ state }/>, app);
