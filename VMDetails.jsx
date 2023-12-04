import React, { useState } from "react";
import ReactDom from "react-dom";
// import NavBar from "./NavBar.jsx";
import LoggedInNavBar from "./LoggedInNavBar.jsx";
import {TableTop,TableBottom} from "./Table.jsx";
function VMDetails() {
  return (
    <div>
      <LoggedInNavBar />
      <div
        style={{
          textAlign: "center",
          margin: "4vw 0",
          fontFamily: "sans-serif",
          fontWeight: "1000"
        }}
      >
        
          <h1 style={{fontSize:"50px",fontWeight:"bold"}}>Your VM Details</h1>
        <p>Thanking for filling form, your details are given below </p>
      </div>
      <TableTop />
      <TableBottom />
      <center><button className="btn3">Delete VM</button></center>
    </div>
  );
}
export default VMDetails;
