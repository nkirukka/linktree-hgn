import React from "react";
import "./styles/Profile.css";


const Profile = (props) => {
  return (
      <div className="Profile">
      <img src={props.src}
        id="profile__img"
        alt="profile pic"
      />
      <h1 className="Username" id="twitter">@nkirukka</h1>
      <p id="slack">nkirukka</p>
      </div>
  )
}

export default Profile;