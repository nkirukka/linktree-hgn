import React from "react";
import "./styles/Profile.css";


const Profile = (props) => {
  return (
      <div className="Profile">
          <img src={props.src} id="profile__img" alt="profile pic"/>
          <h1 className="Username">Annette Black</h1>
      </div>
  )
}

export default Profile;