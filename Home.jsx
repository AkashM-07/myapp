import React from "react";
import NavBar from "./NavBar.jsx";
import SignIn from "./SignIn.jsx";

function Home() {
  console.log("Home");
  return (
    <div>
      <NavBar />
      <div
        style={{
          textAlign: "center",
          margin: "4vw 0",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{fontSize:"50px",fontWeight:"bold"}}>Welcome to IPM manager</h1>
        <p>Login to your account</p>
      </div>
      <SignIn />
    </div>
  );
}
export default Home;
