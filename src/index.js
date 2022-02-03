import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Componets/Login';
import SignUp from './Componets/Signup';


ReactDOM.render(

  <Router>
  
  <Routes> <Route path='/App'element={<App/>}/> </Routes>
  <Routes> <Route path='/Login'element={<Login/>}/> </Routes>
  <Routes> <Route path='/SignUp'element={<SignUp/>}/> </Routes>
  </Router>, 
      
      
      
      document.getElementById('root'));
   
  
