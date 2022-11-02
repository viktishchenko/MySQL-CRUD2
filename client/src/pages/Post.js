/* rafce */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate} from "react-router-dom";

const Post = () => {
  let { id } = useParams();

  // const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8800/posts/${id}`).then((res) => {
      setPost(res.data);
    });

    axios.get(`http://localhost:8800/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  /* nfn */
  const addComment = () => {
    axios
      .post(
        "http://localhost:8800/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
          alert("You need to login!");
          // navigate("/login");
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: res.data.username,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

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
          <div className="body commentList">
            {comments.map((comment, key) => {
              return (
                <div className="speech" key={key}>
                  {comment.commentBody}
                  <br />
                  <tt>from: {comment.username}</tt>
                </div>
              );
            })}
          </div>
          <div className="footer commentContainer">
            <input
              type="text"
              autoComplete="off"
              value={newComment}
              placeholder="Type Something..."
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
            />
            <button onClick={addComment}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
