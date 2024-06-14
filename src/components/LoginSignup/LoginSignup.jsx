import React, { useState } from 'react';
import './LoginSignup.css';
import userIcon from '../../assets/userIcon.jpg';
import emailIcon from '../../assets/emailIcon.jpg';
import passwordIcon from '../../assets/password.png';
// import Background from '../../assets/photo-1520209759809-a9bcb6cb3241.avif'

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    
    <div className='main'>
      <div className='container'>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:     <div className="input">
            <img src={userIcon} alt="User Icon" />
            <input type="text" placeholder='Name' />
          </div>}
         
        </div>
        <div className="inputs">
          <div className="input">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder='Email Id' />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Forget password?<span>Click Here</span></div>}
      <div className='forget'>
       
        <div className="submit-container">
          <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign In</button>
          <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
