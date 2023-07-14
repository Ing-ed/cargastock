import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo3-pWZ6f5u_w2Jbyoj0aj4i4Wp1Wx1ZI",
  authDomain: "cachitosbakery-537fd.firebaseapp.com",
  projectId: "cachitosbakery-537fd",
  storageBucket: "cachitosbakery-537fd.appspot.com",
  messagingSenderId: "338011421421",
  appId: "1:338011421421:web:4757bab1e7253953de6ae4"
};

initializeApp(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
