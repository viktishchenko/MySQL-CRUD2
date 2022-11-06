import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); // get id
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);

  // let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8800/auth/userinfo/${id}`).then((res) => {
      setUsername(res.data.username);
    });

    axios.get(`http://localhost:8800/posts/userPosts/${id}`).then((res) => {
      setListOfPosts(res.data);
    });
  }, [id]);

  return (
    <div className="profilePagecontainer">
      <div className="basicInfo">
        <h1>Username: {username}</h1>
      </div>
      <div className="listOfPosts">
        {listOfPosts.map((post, key) => {
          return <div key={key}>{post.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Profile;
