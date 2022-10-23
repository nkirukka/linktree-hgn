import React from "react";
import "./styles/Profile.css";


const Profile = (props) => {
  return (
      <div className="Profile">
          <img src={props.src} id="profile__img" />
          <h1 className="Username">Nkiruka Ebele</h1>
      </div>
  )
}

export default Profile;