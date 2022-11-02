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

function App() {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8800/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <div className="navbar">
            <div className="container">
              <div className="link">
                <Link to="/">Home Page</Link>
                <Link to="/createpost">Create A Post</Link>
              </div>
              <div className="user">
                {!authState ? (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registration</Link>
                  </>
                ) : (
                  <button className="logOut">Logout</button>
                )}
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
