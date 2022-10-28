/* rafce */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8800/posts/${id}`).then((res) => {
      setPost(res.data);
    });

    axios.get(`http://localhost:8800/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  return (
    <div className="postPage" id="individual">
      <div className="postContainer">
        <div className="post">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
        <div className="post">
          <div className="title">Comments</div>
          {/* <div className="body">{post.postText}</div> */}
          <div className="body commentList">
            {comments.map((comment) => {
              return (
                <div className="speech" key={comment.id}>
                  {comment.commentBody}
                </div>
              );
            })}
          </div>
          <div className="footer commentContainer">
            <input
              type="text"
              autoComplete="off"
              placeholder="Type Something..."
            />
            <button>Send</button>
          </div>
          {/* <div className="commentContainer">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
