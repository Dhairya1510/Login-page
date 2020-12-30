import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import './index.css'


const responseGoogle = (response) => {
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}

const Login = () => {
 return(<> 



    <div className='text-center'>
    <GoogleLogin
    clientId = "1077781755077-bj1a3eo13gl42f31l7ai68c3btnkon6f.apps.googleusercontent.com"
    buttonText="Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    
  />

  <span className='p-3'></span>
  <FacebookLogin
    appId="220764742961371"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    icon="fa-facebook"
    textButton="Facebook"
     />
    </div>

    <div className="text-center pt-3">or login with email</div>
    
 </>)};

export default Login;