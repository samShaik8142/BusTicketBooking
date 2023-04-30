import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Authentication.css";


import googleLogin from "../../img/googleLogin.png";
import facebookLogin from "../../img/facebookLogin.png";
import twitterLogin from "../../img/twitterLogin.png";

export default function Signup() {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });




  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id);
    console.log("vale", value);
    setSignUp({ ...signUp, [id]: value })

  }

  let navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    let isSignUpSuccess = true;

    if (!signUp.firstName) {
      isSignUpSuccess = false
    } else {
      isSignUpSuccess = true;
    }
    if (!signUp.email) {
      isSignUpSuccess = false
    } else {
      isSignUpSuccess = true;
    }
    if (signUp.password != signUp.confirm_password) {
      isSignUpSuccess = false
    } else {
      isSignUpSuccess = true;
    }
    if (!signUp.password) {
      isSignUpSuccess = false
    } else if (signUp.password.length > 1 && signUp.password == signUp.confirm_password) {
      isSignUpSuccess = true;
    }
    if (!signUp.confirm_password) {
      isSignUpSuccess = false
    } else if (signUp.confirm_password > 1 && signUp.confirm_password == signUp.password) {
      isSignUpSuccess = true;
    }
    if (isSignUpSuccess) {

      axios.post("http://localhost:8000/signup", {
        name: signUp.name,
        email: signUp.email,
        password: signUp.password

      }).then(result => {
        console.log(result.data.status);
        if (result.data.status) {
          navigate("/signin")
        } else {
          alert("failed");
        }
      }).catch(error => {
        alert("Error handled")
      })
    }
    else {
      alert("failed")
      return;
    }
  }


  return (
    <div className="make-responsive">
      <div className="auth">
        <div className="heading">
          <h1>Welcome</h1>
          <p className="sub-heading" color="pink">
            Book a bus seat from the Convinience of you home seat
          </p>
        </div>
      </div>
      <div className="responsive-auth-form">
        <div
          className="auth-form"
        >
          <div className="auth-form-inner">
            <div>
              <input type="email" id="name" className="auth-form-input" placeholder="Name" value={signUp.name} onChange={handleChange}></input>
              {signUp.name === "" ? <p className="error-msg">Email field mandatory</p> : ""}

            </div>
            <div>
              <input type="email" id="email" className="auth-form-input" placeholder="Email" value={signUp.email} onChange={handleChange}></input>
              {signUp.email === "" ? <p className="error-msg">Email field mandatory</p> : ""}

            </div>
            <div>
              <input type="email" id="password" className="auth-form-input" placeholder="Password" value={signUp.password} onChange={handleChange}></input>
              {signUp.password === "" ? <p className="error-msg">PassWord field mandatory</p> : ""}

            </div>
            <div>
              <input type="password" id="confirm_password" className="auth-form-input" placeholder="confirm-Password" value={signUp.confirm_password} onChange={handleChange}></input>
              {signUp.confirm_password === "" && signUp.confirm_password != signUp.password ? <p className="error-msg">password Not Matched</p> : ""}
            </div>


            <div >
              <button className="auth-button" onClick={handleSignUp}> SignUp </button>
            </div>
            <div className="account">
              <h5 >Already ahd an account ?</h5>
              <Link className="link" to="/signin">Login</Link>
            </div>
          </div>


          <div className="social-media">
            <p className="continue-with"> Or continue with</p>
            <div className="social-media-buttons">
              <button className="text-button" >
                <img src={googleLogin} className="social-media-icon" />
              </button>
              <button className="text-button" >
                <img src={facebookLogin} className="social-media-icon" />
              </button>
              <button className="text-button " >
                <img src={twitterLogin} className="social-media-icon-last" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};