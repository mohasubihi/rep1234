import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function Navbar() {
  return <Nav>
      <div className='brand'>
          <div className='container'>
          {/* <img src={logo} alt='' /> */}
                meets
          </div>
          <div className='toggle'></div>
      </div>
      <ul>
      <li><Link to='/App'> HOME </Link></li>
      <li><a href='#section1'>Section1</a></li>
      <li><a href='#section2'>Section2</a></li>
      <li><a href='#section3'>Section3</a></li>
      <li><a href='#section4'>Section4</a></li>
      <li><a href='#section4'>Section4</a></li>
      <li>
          
      </li>
      </ul>
      <button><Link to='/Login'> Login </Link></button>
      
  </Nav>;
}



const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-item:center;
.brand {
    .container {
        cursor:pointer;
        display-flex;
        justify-content:center;
        align-item:center;
        gap:0.4rem; 
        font-size:1.2rem;
        font-weight:900;
        color:#023e8a;
    }
    .toggle {
        display:none;        
    }
   
}
ul{
    display:flex;
    list-style-type:none;
    gap:1rem;
    li{
        a{
            text-decoration:none;
            font-size:1.2rem;
            color: #22577A;
            trainsition:0ms.1s ease-in-out;
            &:hover{
                color:#023e8a;
            }
        }
        &:first-of-type {
            a {
                color:#023e8a;
                font-weight:900;
            }
        }
    }
    
}
button {
    padding:0.5rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    background-color:#57CC99;
    text-transform:uppercase
    font-size:4rem;
    letter-spacing:0.1rem;
    trainsition:0.3s ease-in-out;
    &:hover {
        background-color: #17D7A0;
    }

}
`;