import React, { useState } from 'react'
import './login.css';
import { IconButton } from '@mui/material';
import { EmailRounded, HttpsRounded, Person2Rounded} from '@mui/icons-material';
const Login = () => {
    const [login, setlogin] = useState(false);
    const [data, setdata] = useState("");

    const password =document.getElementById('password');
    const confirmpassword =document.getElementById('confirmpassword');

    function handlelogin () {
        setlogin(true)
    }
    function handlesignup () {
        setlogin(false) 
    }
    function handleinputs(event) {
      setdata(event.target.value)  
    }
    function handleSubmit (event) {
      if(login){
        event.preventDefault();
        loginformreset();
      }else{
        event.preventDefault();
        const passwordvalue =password.value.trim();
        const  confirmpasswordvalue = confirmpassword.value.trim();
        
        if(passwordvalue !== confirmpasswordvalue){   
          setError();
          }else{
            formreset();
          }
      }
       }
    
   
 
    function setError() {
      const error=document.querySelector('small')
      error.className='error'
    }
    function formreset() {
      const error=document.querySelector('small')
      error.className='none'
      document.getElementById('forms').reset();
    }
    function loginformreset() {
      document.getElementById('forms').reset();
    }
  return (
   <section>
     <form className="login-page" onSubmit={handleSubmit} id='forms'>
        
          <div className='titles'>
           <h2 onClick={handlesignup } className={login?'login':'signup' }>Sign up</h2>
          
           <h2 onClick={handlelogin} className={login? 'login':'signup' }>Login</h2>
          </div>
         
    
   {
    login?
      <div >
        
      </div>
    :
  <div className='input-container'>
       <IconButton>
       <Person2Rounded />
      </IconButton>
     <input type="text" placeholder='User name' required minLength={5} onChange={handleinputs} className="inputfield"/>
      
  </div>
   }
   <div  className='input-container'>
       
   <input type="email" placeholder='Email'  required className="inputfield"/>
    <IconButton>
    <EmailRounded />
   </IconButton>
   </div>
   

   <div  className='input-container'>
   <IconButton>
    <HttpsRounded />
   </IconButton>
   <input type="password" placeholder='Password'  required minLength={5} className="inputfield"  id='password'/>
  
   </div>
    {
  login?
  <div></div>
  :
  <div  className='input-container'>
     <input type="password" placeholder='Confirm Password'  required  minLength={5} className="inputfield" id='confirmpassword'/>
  <IconButton>
    <HttpsRounded />
   </IconButton>
  <small className=''>password does not match</small>
  </div>
 }

  <div className='checkbox'>
  {login?
   <p>Fogot password <span><a href="#">Click here</a></span></p>
  :
   <div>
     <input type="checkbox" id='terms'  required name='terms'/>
     <label htmlFor="terms">I accept the <a href="#">terms& conditions</a></label>
    </div>
  }
   
  </div>

      <div className='buttons'>
        {
            login?
            <button type='submit'>Login </button>
            :
            <button type='submit'>Sign up</button>
        }
        
          
      </div>
    </form>
   </section>
  )
      }

export default Login