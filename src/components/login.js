import React from 'react';
import './login.css';
import google from "./image 7.png";
import facebook from "./image 6.png";
import { useNavigate, Link} from 'react-router-dom';


const Login = () => {
    return (
        
            
        <div className="logincontainer">
            
            
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                
                <a href="#" className="forgotpassword">Forgotten your password?</a>
                
                <button type="submit" className="loginbutton">Login</button>
                
                <div className="separator">or</div>
                
                <button type="button" className="socialbutton google">
                <img src={google} alt="Google Logo" />

                    
                    Continue with Google
                </button>
                
                <button type="button" className="socialbutton facebook">
                    <img src={facebook} alt="Facebook Logo" />
                    Continue with Facebook
                </button>
            </form>
            
            <p className="signup">Not signed in yet? <a href="#">Sign in</a></p>
        </div>
        
    );
}

export default Login;
