import React from "react";
import BackIcon from "../images/icons/back.svg";
import NotificationIcon from "../images/icons/notification.svg";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={BackIcon} alt="" />
      <h3>자유톡</h3>
      <img src={NotificationIcon} alt="" />
    </div>
  );
}

export default Header;
