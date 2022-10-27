/* rafce */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8800/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <div className="postPage" id="individual">
      <div className="postContainer">
        <div className="post">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
        <div className="post">
          <div className="body">Comment Section</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
