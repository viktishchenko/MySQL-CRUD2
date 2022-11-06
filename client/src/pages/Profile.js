import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); // get id

  return (
    <div className="profilePagecontainer">
      <div className="basicInfo">
        <h1>Username: {id}</h1>
      </div>
      <div className="listOfPosts">posts</div>
    </div>
  );
};

export default Profile;
