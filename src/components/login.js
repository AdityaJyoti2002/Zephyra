import React from 'react';
import './login.css';
import google from "./image 7.png";
import facebook from "./image 6.png";


const Login = () => {
    return (
        
            
              
                
        <div className="login-container">
            
            
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                
                <a href="#" className="forgot-password">Forgotten your password?</a>
                
                <button type="submit" className="login-button">Login</button>
                
                <div className="separator">or</div>
                
                <button type="button" className="social-button google">
                <img src={google} alt="Google Logo" />

                    
                    Continue with Google
                </button>
                
                <button type="button" className="social-button facebook">
                    <img src={facebook} alt="Facebook Logo" />
                    Continue with Facebook
                </button>
            </form>
            
            <p className="signup">Not signed in yet? <a href="#">Sign in</a></p>
        </div>
        
    );
}

export default Login;
