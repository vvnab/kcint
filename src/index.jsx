import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import "flexboxgrid";
import "flexboxgrid-helpers";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


const config = {
  apiKey: "AIzaSyBwbzq38JJS-RNiBhaKRS8Xg7NWumfnEKM",
  authDomain: "kcint-7328e.firebaseapp.com",
  databaseURL: "https://kcint-7328e.firebaseio.com",
  projectId: "kcint-7328e",
  storageBucket: "kcint-7328e.appspot.com",
  messagingSenderId: "702165886641"
};