import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';  จะไปเรียก app.js
// 6 จะไปเรียก myApp.js
import MyApp from './myApp';
import registerServiceWorker from './registerServiceWorker';


//               App คือ code ของ react
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
