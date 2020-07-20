import React from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './signup.css';
import '../images/icons/favicon.ico';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css';
import '../vendor/daterangepicker/daterangepicker.css';
import '../css/util.css';
import '../css/main.css';
import $ from 'jquery';
import '../request'
import { OldSocialLogin as SocialLogin } from 'react-social-login'
import {FacebookLoginButton,GoogleLoginButton} from '../config_button'
import { signup } from '../request';

function Signup() {
    return (
      <div className="Signup" style={{backgroundcolor: "#666666"}}>
	<div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                   Create account
                </span>
                
                
                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" id="username"></input>
                    <span className="focus-input100"></span>
                    <span className="label-input100">Email</span>
                </div>
                
                
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" id="password"></input>
                    <span className="focus-input100"></span>
                    <span className="label-input100">Password</span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" id ="confirm_pass"></input>
                    <span className="focus-input100"></span>
                    <span className="label-input100">Confirm Password</span>
                </div>

                <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
                        <label className="label-checkbox100" htmlFor="ckb1">
                            Remember me
                        </label>
                    </div>

                    <div>
                        <a href="#" className="txt1">
                            Forgot Password?
                        </a>
                    </div>
                </div>

                <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
                        <label className="label-checkbox100" htmlFor="ckb1">
                        I accept the Terms of Use
                        </label>
                    </div>

                    <div>
                    <Link to="/login">
                        <a className="txt1">
                        Already have an account? Login
                        </a>
                     </Link>
                    </div>
                </div>
        

                <div className="container-login100-form-btn">
                
                    <button className="login100-form-btn"onClick={function(){signup(document.getElementById('username').value,document.getElementById('password').value,document.getElementById('confirm_pass').value)}}>
                        Create account
                    </button> 
                </div>
                
                <div className="text-center p-t-46 p-b-20">
                    <span className="txt2">
                        or Login using
                    </span>
                </div>

                <div  className="login100-form-social flex-c-m">
                    
                    <SocialLogin
                        provider='facebook'
                        appId='265646601091231'
                        >
                        <FacebookLoginButton>
                            <span></span>
                        </FacebookLoginButton>    
                       </SocialLogin>
                       

                     <SocialLogin
                        provider='google'
                        appId="1083402848248-v0tnkpjf885sr84i0rnb79mlglum9e9b.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                      >
                          <GoogleLoginButton>
                            <span></span>
                          </GoogleLoginButton>
                          
                        </SocialLogin> 
                </div>
            </form>

            <div className="login100-more" style={{backgroundImage:'url('+require("../images/one_enroll.jpg")+')'}}>
            </div>
        </div>
    </div>
</div>
</div>  
    );
}

export default Signup;