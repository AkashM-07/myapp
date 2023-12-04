import React from "react";
import JioLogo from "./images/jio_navy.png";
function ListItem() {
  return (
    <li style={{paddingTop: "12px"}}>
      <img
        src={JioLogo}
        style={{
          width: "48px",
          height: "48px"
        }}
      />
    </li>
  );
}
// function ListItem2(props)
// {
//      return <span><ListItem /></span>
// }
export default ListItem;
