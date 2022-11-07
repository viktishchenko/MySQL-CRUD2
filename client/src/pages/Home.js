/* rafce */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import { AuthContext } from "../helpers/AuthContext";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  // const { authState } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:8800/posts", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((res) => {
          setListOfPosts(res.data.listOfPosts);
          setLikedPosts(
            res.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, [navigate]);

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

        if (likedPosts.includes(postId)) {
          setLikedPosts(
            likedPosts.filter((id) => {
              return id !== postId;
            })
          );
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
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
                <Link to={`/profile/${post.UserId}`}>{post.username}</Link>
                <div className="likeContainer">
                  <ThumbUpIcon
                    onClick={() => {
                      likePost(post.id);
                    }}
                    className={
                      likedPosts.includes(post.id) ? "unlikedBtn" : "likedBtn"
                    }
                  />
                  <label>{post.Likes.length}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
