import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import TopNavigation from './Components/Navigation/TopNavigation';
import {Container,Row,Col} from 'react-bootstrap'
import MainNavigation from './Components/Navigation/MainNavigation';
//import AllCategories from './Pages/AllCategories'; //for later version
import SolarLights from './Pages/SolarLights';
import ContactUs from './Pages/ContactUs';
//import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import SeeMore from './Pages/SeeMore';
import ProductDetails from './Pages/Product/ProductDetails';
import Login from './Pages/OtherPages/Login';
//import Login from './Pages/OtherPages/SignupPage';
import SignupPage from './Pages/OtherPages/SignupPage';
import CartItem from './Pages/CartItem';

function App() {
  // <Route path="*" element={<ErrorPage/>}/>

  return (
    <div >

  <TopNavigation/>
  <MainNavigation/>

    <Routes>
   <Route path ="/" element ={<SolarLights/>}/>
    <Route path ="SolarLights" element ={<SolarLights/>}/>
    <Route path ="ContactUs" element ={<ContactUs/>}/>
    <Route path ="/Login" element ={<Login/>}/>
    <Route path="signup" element ={<SignupPage/>}/>
    <Route path ="AddtoCart" element ={<CartItem/>}/>
    <Route path="/seemore/:Itemid" element={<ProductDetails/>}/>

  </Routes>


    </div>
  );
}

export default App;
