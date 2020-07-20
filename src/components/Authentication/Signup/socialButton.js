
import React from 'react'
import SocialLogin from 'react-social-login'
import { InstagramLoginButton } from "react-social-login-buttons";

   
  
function SocialButton() {
        return (
            <InstagramLoginButton></InstagramLoginButton>
        );
    
}
 
export default SocialLogin(SocialButton);