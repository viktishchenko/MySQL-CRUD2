import "./App.css";
/* imprrd */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <div className="container">
            <div className="link">
              <Link to="/">Home Page</Link>
              <Link to="/createpost">Create A Post</Link>
            </div>
            <div className="user">
              <Link to="/login">Login</Link>
              <Link to="/registration">Registration</Link>
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
    </div>
  );
}

export default App;
