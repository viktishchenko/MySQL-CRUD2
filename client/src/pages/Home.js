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
        // add update like post logic
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (res.data.liked) {
                // change Likes array (only length thatswhay0)
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                // just remove last element
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
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
                <label>{post.Likes.length}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
