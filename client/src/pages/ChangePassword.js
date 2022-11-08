import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = () => {
    axios
      .put(
        "http://localhost:8800/auth/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        }
      });
  };

  return (
    <div className="passPage">
      <h1>Change your passport</h1>
      <input
        type="text"
        placeholder="Old Password..."
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New Password..."
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />
      <button onClick={changePassword}>Save Changes</button>
    </div>
  );
};

export default ChangePassword;
