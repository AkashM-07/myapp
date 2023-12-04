import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Home from "./Home.jsx";
import App1 from "./App1.jsx";
import VMDetails from "./VMDetails.jsx";
import Logged from "./Logged.jsx";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
function App() {
  return (
    // <div>
    <Router>
      <Fragment>
        <Routes>
          {/* <PrivateRoute path="/app1" element={<App1 />} /> */}
          <Route path="/app1" element={<PrivateRoute />}>
            <Route path="/app1" element={<App1 />}/>
          </Route>
          <Route path="/" element={<Home />} />
          {/* <PrivateRoute path="/show" element={<VMDetails />} /> */}
          <Route path="/show" element={<PrivateRoute />}>
            <Route path="/show" element={<VMDetails />}/>
          </Route>
          <Route path="/logged" element={<Logged />} />
        </Routes>
      </Fragment>
    </Router>
    // </div>
  );
}
export default App;
