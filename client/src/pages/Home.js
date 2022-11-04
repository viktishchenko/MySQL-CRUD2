/* rafce */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8800/posts").then((res) => {
      setListOfPosts(res.data);
    });
  }, []);

  const likePost = (postId) => {
    axios
      .post(
        "http://localhost:8800/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((res) => {
        alert(res.data);
      });
  };

  return (
    <div className="homePage">
      <div className="postContainer">
        {listOfPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="title">{post.title}</div>
              <div
                className="body"
                onClick={() => {
                  navigate(`/post/${post.id}`);
                }}
              >
                {post.postText}
              </div>
              <div className="footer">
                {post.username}
                <button
                  onClick={() => {
                    likePost(post.id);
                  }}
                >
                  Like
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
