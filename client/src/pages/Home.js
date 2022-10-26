/* rafce */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/posts").then((res) => {
      setListOfPosts(res.data);
    });
  }, []);
  return (
    <div className="homePage">
      <Link to={"/createpost"}>Create A Post</Link>
      <div className="postContainer">
        {listOfPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="title">{post.title}</div>
              <div className="body">{post.postText}</div>
              <div className="footer">{post.username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
