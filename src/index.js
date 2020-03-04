import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { unstable_ConcurrentMode: ConcurrentMode } = React;

ReactDOM.render(
<ConcurrentMode>
    <App />
</ConcurrentMode>
, document.getElementById('root'));
