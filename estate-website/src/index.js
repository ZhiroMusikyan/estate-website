import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css'


const firebaseConfig = {
    apiKey: "AIzaSyButZ3kdEU1H3iYO0yFMmx8n_2PKNaXwzQ",
    authDomain: "estate-market-1bbaf.firebaseapp.com",
    databaseURL: "https://estate-market-1bbaf-default-rtdb.firebaseio.com",
    projectId: "estate-market-1bbaf",
    storageBucket: "estate-market-1bbaf.appspot.com",
    messagingSenderId: "665789247500",
    appId: "1:665789247500:web:b37a50f9b52afd9d58be29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
