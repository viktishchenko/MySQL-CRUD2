/* rafce */
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Page not found :/</h1>
      <p>
        Go to the: <Link to={"/"}>Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
