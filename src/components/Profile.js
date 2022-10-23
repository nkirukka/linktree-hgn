import React from "react";

const Profile = (props) => {
  return (
      <div className="Profile">
          <img src={props.src} id="profile__img" />
          <p>Nkiruka Ebele</p>
      </div>
  )
}

export default Profile;