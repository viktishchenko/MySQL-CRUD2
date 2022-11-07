import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AuthContext } from "../helpers/AuthContext";

const Profile = () => {
  const { id } = useParams(); // get id
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likesCount, setLikesCount] = useState("");
  let postsCount = listOfPosts.length;

  const { authState } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8800/auth/userinfo/${id}`).then((res) => {
      setUsername(res.data.username);
    });

    axios.get(`http://localhost:8800/posts/userPosts/${id}`).then((res) => {
      let c = 0;
      for (let index = 0; index < res.data.length; index++) {
        c += res.data[index].Likes.length;
      }
      setLikesCount(c);
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
          <span style={{ fontWeight: "bold", fontSize: "22px" }}>
            List of posts:
          </span>
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
            <div className="profilePosts">Posts: {postsCount}</div>
            <div className="likeContainer profileFooter ">
              <ThumbUpIcon /> {likesCount}
            </div>
          </div>
          {authState.username === username && (
            <button
              onClick={() => {
                navigate("/changepassword");
              }}
            >
              change password
            </button>
          )}
          <Link to="/">Back →</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
