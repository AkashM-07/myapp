import React, { useState } from "react";
import ReactDom from "react-dom";
import LoggedInNavBar from "./LoggedInNavBar.jsx";
import { useNavigate } from "react-router-dom";
import { VMForm1, VMForm3, VMForm1Val, VMForm3Val } from "./VMForm.jsx";
function App1() {
  const [VMForm2state, setVMForm2state] = useState([]);
  const navigate = useNavigate();
  function handleClickAdd() {
    const abc = [...VMForm2state, [[]]];
    setVMForm2state(abc);
  }
  function handleClickDelete(index)
  {
     const deleteVal=[...VMForm2state];
     deleteVal.splice(index,1);
     setVMForm2state(deleteVal);

  }
  function handleIP(e, r, c) {
    const input = [...VMForm2state];
    input[r][c] = e.target.value;
    setVMForm2state(input);
    //console.log(VMForm2state);
  }
  function handleClickSubmit() {
    console.log("Clicked");
    console.log(VMForm2state);
    // checkIPV4();
    navigate("/show");
  }
  //console.log(VMForm2state);
  return (
    <div>
      <LoggedInNavBar />
      <div
        style={{
          textAlign: "center",
          margin: "3vw 0",
          fontFamily: "sans-serif"
        }}
      >
        <h1 style={{fontSize:"50px",fontWeight:"bold"}}>VM Details</h1>
        <p>Fill the form with VM details </p>
      </div>
      <VMForm1 />
      <h1
        style={{
          textAlign: "center",
          paddingUp: "100px",
          fontFamily: "sans-serif",
          fontWeight:"bold"
        }}
      >
        VM Interfaces
      </h1>
      {VMForm2state.map((data, ind) => {
        return (
          <div className="container2" id="root1">
            <p style={{paddingLeft:"1.5vw",textAlign:"left",fontWeight:"bolder"}}>eth{ind+1}</p>
            <input
              onChange={(e) => handleIP(e, ind, 0)}
              type="text"
              placeholder="IP address"
            />
            <input
              onChange={(e) => handleIP(e, ind, 1)}
              type="text"
              placeholder="GW Address"
            />
            <input
              onChange={(e) => handleIP(e, ind, 2)}
              type="text"
              placeholder="IPv4 Address"
            />
            <button className="btnr" onClick={()=>handleClickDelete(ind)}>
          Remove Instance{" "}
        </button>
          </div>
        );
      })}
      <center>
        <button className="btn" onClick={handleClickAdd}>
          AddInstance +{" "}
        </button>
      </center>
      <VMForm3 />
      <center>
        <button className="btn4" onClick={handleClickSubmit}>Submit</button>
      </center>
    </div>
  );
}
export default App1;
