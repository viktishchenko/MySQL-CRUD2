import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
    <div className="profileContainer">
      <div className="post">
        <div className="title">
          <h1>Username: {username}</h1>
        </div>
        <div className="body profile">
          <ul>
            {listOfPosts.map((post, key) => {
              return (
                <Link key={key} to={`/post/${post.id}`}>
                  <li>{post.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="footer">
          <div className="proinfo">
            <div className="profilePosts">Posts: 2</div>
            <div className="likeContainer profileFooter ">
              <ThumbUpIcon /> 5
            </div>
          </div>
          <Link to="/">Back →</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
