import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Authentication.css";


import googleLogin from "../../img/googleLogin.png";
import facebookLogin from "../../img/facebookLogin.png";
import twitterLogin from "../../img/twitterLogin.png";

export default function Signin(props){
  let navigate = useNavigate();
  const [state, setState] = useState({

    email: "",
    password: ""
  });

  console.log(state.email);

  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    setState({ ...state, [id]: value })
}

function handleSignin() {
    let isLoginSuccess = true;
   
    if (!state.email) {
        isLoginSuccess = false;
    } else {
        isLoginSuccess = true;
    }
    if (!state.password) {
        isLoginSuccess = false;
    } else {
        isLoginSuccess = true;
    }

    if (!isLoginSuccess) {
        alert("failed")
        return;
    }

    axios.post("http://localhost:8000/signin", { email: state.email, password: state.password })
        .then(result => {
            if (result.data.status) {     
                navigate("/seat")
            } else {
                alert(result.data.message);
                navigate('/signup');
            }

        }).catch(error => {
            alert("Error handled")
        })

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
              <input type="email" id="email" className="auth-form-input" placeholder="Email" value={state.email} onChange={handleChange}></input>
              {state.email === "" ? <p className="error-msg">Email field mandatory</p> : ""}

            </div>
            <div>
              <input type="password" id="password" className="auth-form-input" placeholder="Password" value={state.password} onChange={handleChange}></input>
              {state.password === "" ? <p className="error-msg">password field mandatory</p> : ""}
            </div>


            <div >
              <button className="auth-button" onClick={handleSignin}> LOGIN </button>
            </div>
            <div className="account">
                        <h5 >No account yet?</h5>
                        <Link className="link" to="/signup">Signup</Link>
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