import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div className= ' w-100 w-50-m w-25-l center '>
    <img alt='chuck avatar 'src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' className = 'mw5 mw10-ns center pa3 ph5-ns' />
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
