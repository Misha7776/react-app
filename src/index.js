import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const contacts = [
  {
    _id: 'sdjdkalj',
    Name: 'Greg',
    Phone: '123231'
  },
  {
    _id: 'zvczcvz',
    Name: 'Jane',
    Phone: '0996668'
  }
];

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
