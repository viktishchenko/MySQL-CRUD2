import "./App.css";
/* imprrd */
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
