import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import {store}  from "./store/index"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//import 'bootstrap\dist\css\bootstrap.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <BrowserRouter>
  <App />
</BrowserRouter>
 </Provider>
  
);


