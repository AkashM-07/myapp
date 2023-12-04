import React, { useState } from "react";
import ReactDom from "react-dom";
const VMForm1Val = [];
const VMForm3Val = [];
function VMForm1() {
  function Update1(e, index) {
    VMForm1Val[index] = e.target.value;
  }
  return (
    <div className="container1">
      <input
        onChange={(e) => Update1(e, 0)}
        type="text"
        placeholder="VM Name"
      />
      <input
        onChange={(e) => Update1(e, 1)}
        type="text"
        placeholder="Username"
      />
    </div>
  );
}
function VMForm3() {
  function Update3(e, index) {
    VMForm3Val[index] = e.target.value;
  }

  return (
    <div className="container1">
      <input
        onChange={(e) => Update3(e, 0)}
        type="text"
        placeholder="DNS Server"
      />
      <input
        onChange={(e) => Update3(e, 1)}
        type="text"
        placeholder="HostName"
      />
      <input
        onChange={(e) => Update3(e, 2)}
        type="text"
        placeholder="Power Applied"
      />
    </div>
  );
}
export { VMForm1, VMForm3, VMForm1Val, VMForm3Val };


// import React, { useState } from "react";
// import ReactDom from "react-dom";

// function VMForm1() {
//   const [formData, setFormData] = useState({ vmName: "", username: "" });
//   const [errors, setErrors] = useState({});

//   const validateField = (name, value) => {
//     let newErrors = { ...errors };

//     if (name === "vmName" && value.trim() === "") {
//       newErrors.vmName = "VM Name is required";
//     } else {
//       delete newErrors.vmName;
//     }

//     if (name === "username" && value.trim() === "") {
//       newErrors.username = "Username is required";
//     } else {
//       delete newErrors.username;
//     }

//     setErrors(newErrors);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   return (
//     <div className="container1">
//       <input
//         onChange={handleInputChange}
//         type="text"
//         name="vmName"
//         placeholder="VM Name"
//       />
//       {errors.vmName && <p className="error">{errors.vmName}</p>}
//       <input
//         onChange={handleInputChange}
//         type="text"
//         name="username"
//         placeholder="Username"
//       />
//       {errors.username && <p className="error">{errors.username}</p>}
//     </div>
//   );
// }

// function VMForm3() {
//   const [formData, setFormData] = useState({
//     dnsServer: "",
//     hostName: "",
//     powerApplied: "",
//   });
//   const [errors, setErrors] = useState({});

//   const validateField = (name, value) => {
//     let newErrors = { ...errors };

//     if (name === "dnsServer" && value.trim() === "") {
//       newErrors.dnsServer = "DNS Server is required";
//     } else if (name === "dnsServer" && !isValidIPv4(value)) {
//       newErrors.dnsServer = "Invalid IPv4 address format";
//     } else {
//       delete newErrors.dnsServer;
//     }

//     if (name === "hostName" && value.trim() === "") {
//       newErrors.hostName = "Host Name is required";
//     } else {
//       delete newErrors.hostName;
//     }

//     if (name === "powerApplied" && value.trim() === "") {
//       newErrors.powerApplied = "Power Applied is required";
//     } else {
//       delete newErrors.powerApplied;
//     }

//     setErrors(newErrors);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const isValidIPv4 = (ip) => {
//     // Regular expression to match a valid IPv4 address
//     const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
//     return ipv4Pattern.test(ip);
//   };

//   return (
//     <div className="container1">
//       <input
//         onChange={handleInputChange}
//         type="text"
//         name="dnsServer"
//         placeholder="DNS Server"
//       />
//       {errors.dnsServer && <p className="error">{errors.dnsServer}</p>}
//       <input
//         onChange={handleInputChange}
//         type="text"
//         name="hostName"
//         placeholder="Host Name"
//       />
//       {errors.hostName && <p className="error">{errors.hostName}</p>}
//       <input
//         onChange={handleInputChange}
//         type="text"
//         name="powerApplied"
//         placeholder="Power Applied"
//       />
//       {errors.powerApplied && <p className="error">{errors.powerApplied}</p>}
//     </div>
//   );
// }

// export { VMForm1, VMForm3 };
