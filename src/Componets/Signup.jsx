import { useState, useEffect } from "react";
import Navbar from './Navbar';
import { Link } from "react-router-dom";


const SignUp = () => {

    const theValues = { username: "", email: "", password: "" , conpassword:""};
    const [formValues, setFormValues] = useState(theValues);
    const [formError, setFormErrors] = useState({});
    const [SubmitIT, setIsSubmit] = useState(false);
  
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
      if (Object.keys(formError).length === 0 && SubmitIT) {
        console.log(formValues);
      }
    }, [formError]);
    const validate = (values) => {
      const error = {};
      
      if (!values.username) {
        error.username = "Name is required !";
      }
      if (!values.email) {
        error.email = "Email is required!";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = "Email has invalid format !";
      }
      if (!values.password) {
        error.password = "Password is required !";
      } else if (values.password.length < 7) {
        error.password = "Password must be more than 7 characters";
      } if(!values.conpassword ){
        error.conpassword= "please enter the Password  ";
      }else if(values.password != values.conpassword ){

        error.conpassword= "please repeat the Password  "
      }
      return error;
    };
  

    
  return (
<div className='container'>
<Navbar />


  <div className="form-content-right-Signup">

     <form onSubmit={handleSubmit} className="form">

       <h1>meets</h1>

       
              <div className="form-Signup">

                  <label htmlFor="username" className="form-label"> NAME  </label>

                  <input id='username' type="text" name='username' className="form-input" placeholder='Enter your Name' value={formValues.username} onChange={handleChange} />
                  <p>{formError.username}</p>
              </div>
              
              <div className="form-Signup">

                  <label htmlFor="email" className="form-label"> E-MAIL ADDRESS  </label>

                  <input id='email' type="email" name='email' className="form-input" placeholder='example@email.com ' value={formValues.email} onChange={handleChange} />
                  <p>{formError.email}</p>
              </div>
            

              <div className="form-Signup">

                 <label htmlFor="password" className="form-label"> PASSWORD  </label>

                 <input id='password' type="password" name='password' className="form-input" placeholder='Enter your password' value={formValues.password} onChange={handleChange} />
                 <p>{formError.password}</p>
            </div> 
            

            <div className="form-Signup">

                 <label htmlFor="conpassword" className="form-label"> Confirm Password  </label>

                 <input id='conpassword' type="password" name='conpassword' className="form-input" placeholder='Enter the password again' value={formValues.conpassword} onChange={handleChange} />
                 <p>{formError.conpassword}</p>
            </div> 
            
            <div className="form-Signup">

                 <label htmlFor="location" className="form-label"> Location  </label>

                 <input id='location' type="l" name='location' className="form-input" placeholder=' your location' />

            </div> 


            <button className="form-inbut-btn" type='submit' > Signup  </button>
          


            <spam className="form-input-navigation">
            Already a member?<Link to='/Login'> Login </Link>
            </spam>





    </form>

 </div>
</div>




  );
};

export default SignUp;

