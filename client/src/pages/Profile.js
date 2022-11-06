import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams(); // get id
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8800/auth/userinfo/${id}`).then((res) => {
      setUsername(res.data.username);
    });
  }, []);

  return (
    <div className="profilePagecontainer">
      <div className="basicInfo">
        <h1>Username: {username}</h1>
      </div>
      <div className="listOfPosts">posts</div>
    </div>
  );
};

export default Profile;
