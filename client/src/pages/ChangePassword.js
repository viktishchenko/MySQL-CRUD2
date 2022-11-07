import React from "react";

const ChangePassword = () => {
  return (
    <div className="passPage">
      <h1>Change your passport</h1>
      <input type="text" placeholder="Old Password..." />
      <input type="text" placeholder="New Password..." />
      <button>Save Changes</button>
    </div>
  );
};

export default ChangePassword;
