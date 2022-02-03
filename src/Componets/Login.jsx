import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Login = () => {

    const theValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(theValues);
    const [formError, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formError);
      if (Object.keys(formError).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formError]);
    const validate = (values) => {
      const error = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        error.username = "Name is required!";
      }
      if (!values.email) {
        error.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        error.email = "Please check the email !";
      }
      if (!values.password) {
        error.password = "Password is required!";
      } else if (values.password.length < 7) {
        error.password = "Password must be more than 7 characters";
      }
      return error;
    };
  

    

  return (


    
    <div className='container'>
      <Navbar />
    <div className="form-content-right-Login">
    <form  onSubmit={handleSubmit} className="form">

    <h1>meets</h1>

    
           <div className="form-Login">

               <label htmlFor="username" className="form-label"> NAME  </label>

               <input id='username' type="text" name='username' className="form-input" placeholder='Enter your Name' value={formValues.username} onChange={handleChange} />
               <p>{formError.username}</p>
           </div>
           

           <div className="form-Login">

               <label htmlFor="email" className="form-label"> E-MAIL ADDRESS  </label>

               <input id='email' type="email" name='email' className="form-input" placeholder='example@email.com 'value={formValues.email} onChange={handleChange} />
               <p>{formError.email}</p>
           </div>
           

           <div className="form-Login">

              <label htmlFor="password" className="form-label"> PASSWORD  </label>

              <input id='password' type="password" name='password' className="form-input" placeholder='Enter your password' value={formValues.password} onChange={handleChange} />
              <p>{formError.password}</p>

              <spam className="form-input-Forget">
         <a href='#s'> Forget password?</a> </spam>
         </div> 
        

         <button className="form-inbut-btn" type='submit' > Login  </button>


         <spam className="form-input-navigation"> Not a member yet?<Link to='/Signup'> Signup </Link> </spam>


         </form>

         </div>

         </div>


  );
};

export default Login;
