import React, { useState } from "react";
import ReactDom from "react-dom";
import NavBar from "./NavBar.jsx";
import App1 from "./App1.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

let emailSignIn="";
function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  
  function handlemail(event) {
    //console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handlepass(event) {
    //console.log(event.target.value);
    setPass(event.target.value);
  }
  function handleClick() {
  //  console.log(email,pass); 
   emailSignIn=email;
  axios.post('http://localhost:8082/vms/api/login', { "username" : email , "password" :pass })
  .then(response => {

    console.log(response); // Handle the response data here
    const recievedSessionToken = response.data.message;
    console.log(recievedSessionToken);
    // Cookies.set('testCookie', 'testCookieValue'); // working well
    Cookies.set('sessionToken', recievedSessionToken,{expires: 0.000231}); // expires are in days, divide by 86400 for seconds
    // Cookies.set('usrEmail', email,{expires: 0.000231});
    localStorage.setItem("email", email);
    navigate("/app1");
  })
  .catch(error => {
    setErrorMessage("Invalid Credentials!")
  });
  }
  return (
    <div>
      <div className="container0">
        <input onChange={handlemail} type="text" placeholder="email ID" />
        <input onChange={handlepass} type="password" placeholder="password" />
        <button className="btn4" onClick={handleClick}>Log In</button>
        {errorMessage && <h2> {errorMessage} </h2>}
      </div>
    </div>
  );
}
export default SignIn;
export {emailSignIn};
// export {recievedSessionToken};