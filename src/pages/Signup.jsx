import React from 'react'
import Logo from '../css/klipartz.png'
import '../css/signup.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaDiscord,FaLinkedin,FaTwitter,FaApple} from "react-icons/fa";
function signup() {
  return (
    <div className='contain  '> 
      <div className="companyinfo">
      <div className="icon">
      <img src={Logo} alt="logo" width={100} height={100} />
      </div>
        <h1 class="company-info-logo "> base</h1>
        <div className="icon-div">
          <FaGithub className='social-icons'/>
          <FaDiscord className='social-icons'/>
          <FaLinkedin className='social-icons'/>
          <FaTwitter className='social-icons'/>
        </div>
      </div>
      <div className="signup">
        <h3>Sign in</h3>
        <h4> sign in your account</h4>
        <div className="bttn">
          <button   className='sign-logo'> <FcGoogle/> <span> signin in with Google </span> </button>
          <button className='sign-logo'> <FaApple/> <span> signin in with Apple </span> </button>
        </div>
        <div className="email">
          <label htmlFor="">Email address</label><br/>
          <input type='email' placeholder='johndoe@gmail.com' required/> <br/>
          <label htmlFor="">password</label> <br />
          <input type="password"  placeholder='pasword@123' required/> <br/>
          <a href='#'> Forget password?</a>
          <div className='sign-btn '> 
          <button type='submit'>  Sign In</button>
          </div>
        </div>

        <p> Don't have an account?  <a > Register here </a></p>
      </div>
    </div>
  )
}

export default signup
