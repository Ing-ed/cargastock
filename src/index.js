import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context, Provider } from './Context/Context';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIUQy46qVHkhD6eV8FgMxLKIhwYgbW5Ns",
  authDomain: "cachitosbakery-52d03.firebaseapp.com",
  projectId: "cachitosbakery-52d03",
  storageBucket: "cachitosbakery-52d03.appspot.com",
  messagingSenderId: "541850060285",
  appId: "1:541850060285:web:d36a108fe2b5cae9494594"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
