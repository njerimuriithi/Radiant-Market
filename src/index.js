import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
//import {store}  from "./store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
    <App />
  
    
    </BrowserRouter>
 
  </React.StrictMode>
);


