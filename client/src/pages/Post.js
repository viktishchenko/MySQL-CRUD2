/* rafce */
import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post: {id}</h1>
    </div>
  );
};

export default Post;
