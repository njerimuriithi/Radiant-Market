import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import TopNavigation from './Components/Navigation/TopNavigation';
import {Container,Row,Col} from 'react-bootstrap'
import MainNavigation from './Components/Navigation/MainNavigation';
import AllCategories from './Pages/AllCategories';
import SolarLights from './Pages/SolarLights';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import SeeMore from './Pages/SeeMore';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div >


  <TopNavigation/>
  <MainNavigation/>

    <Routes>
   <Route path ="/" element ={<AllCategories/>}/>
    <Route path ="SolarLights" element ={<SolarLights/>}/>
    <Route path ="ContactUs" element ={<ContactUs/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="/seemore/:Itemid" element={<ProductDetails/>}/>
  <Route path="*" element={<ErrorPage/>}/>

  </Routes>


    </div>
  );
}

export default App;
