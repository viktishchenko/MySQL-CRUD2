import "./App.css";
/* imprrd */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8800/auth/check", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: res.data.username,
            id: res.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "",
      id: 0,
      status: false,
    });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <div className="navbar">
            <div className="container">
              {!authState.status ? (
                <div className="userStart">
                  <Link to="/login">Login</Link>
                  <Link to="/registration">Registration</Link>
                </div>
              ) : (
                <>
                  <div className="link">
                    <Link to="/">Home Page</Link>
                    <Link to="/createpost">Create A Post</Link>
                  </div>
                  <div className="user">
                    <p style={{ color: "white", marginRight: "8px" }}>
                      {authState.username}
                    </p>
                    <button className="logOut" onClick={logout}>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
