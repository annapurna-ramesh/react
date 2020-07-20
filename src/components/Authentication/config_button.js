import {createButton} from "react-social-login-buttons";
 
const config = {
  text: "",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: {
       background: "#3b5998" ,
       borderRadius: '50%'
    },
 // activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const FacebookLoginButton = createButton(config);


const config_google = {
    text: "",
    icon: "facebook",
    iconFormat: name => `fa fa-google`,
    style: {
         background: "#cd201f" ,
         borderRadius: '50%'
      },
   // activeStyle: { background: "#293e69" }
  };
  /** My Facebook login button. */
  const GoogleLoginButton = createButton(config_google);

export {FacebookLoginButton,GoogleLoginButton};