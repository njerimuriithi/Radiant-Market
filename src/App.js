import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavigation from './Components/Navigation/TopNavigation';
import {Container,Row,Col} from 'react-bootstrap'
import MainNavigation from './Components/Navigation/MainNavigation';

function App() {
  return (
    <div >
  
  <TopNavigation/>
  <MainNavigation/>
    </div>
  );
}

export default App;
