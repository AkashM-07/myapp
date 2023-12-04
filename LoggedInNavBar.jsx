import React, {useState} from "react";
import JioLogo from "./images/jio_navy.png";
import UserProfile from "./images/user_profile.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom";
import Logged from "./Logged.jsx";
import { emailSignIn } from "./SignIn";
import Cookies from "js-cookie";
// import Modal from "./Modal.jsx";

// function profileClick(){
//     // show pop up

//     console.log("Profile button pressed");
// }



function LoggedInNavBar() {
    // const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();
    // const profileImage = UserProfile;
    // const email = 'user@example.com';
    function handleLogout(){
      // logout implementation
      console.log("User pressed logout");
      const sessionToken = Cookies.get('sessionToken');
      console.log(sessionToken);
      Cookies.remove('sessionToken');
      localStorage.removeItem("email");
      // Cookies.remove('usrEmail');
      // const testCookie = Cookies.get('testCookie');
      // console.log(testCookie); // working well
      // Cookies.remove('testCookie');
      navigate("/logged")
  }
    // const openModal = () => {
    //   console.log("openModal pressed");
    //   setIsModalOpen(true);
    //   console.log(isModalOpen);
    // };
  
    // const closeModal = () => {
    //   setIsModalOpen(false);
    // };
  
    // const handleLogout = () => {
    //   // Implement your log-out logic here
    // };

  return (
    <ul className="styleNav">
      <li style={{paddingTop: "12px"}}>
        <img
          src={JioLogo}
          style={{
            width: "48px",
            height: "48px"
          }}
        />
      </li>
      <li>
        <Popup trigger={
            <button className="profileBtn"><img
            src={UserProfile}
            style={{
                width: "48px",
                height: "48px"
            }}
            /></button>} position="bottom right" > 
            {/* end of popup trigger tag */}
                <div style={{textAlign: "center" ,paddingBottom:"20px"}}>
                <img src={UserProfile} alt="Profile" style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#3535F3",
                    padding: "8px",
                    borderRadius: "8px",
                    marginTop: "16px"
                }} />
                <p style={{paddingTop: "16px"}}>{localStorage.getItem("email")}</p>
                <button onClick={handleLogout} className="btnlogout">Log Out</button>

                </div>
                    
        </Popup>

    //     {/* {isModalOpen && (
    //     <Modal
    //       isOpen={isModalOpen}
    //       onRequestClose={closeModal}
    //       profileImage={profileImage}
    //       email={email}
    //       onLogout={handleLogout}
    //     />
    //   )} }*/}
      </li>
    </ul>
  );
}
export default LoggedInNavBar;

