import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8800/posts").then((res) => {
      console.log("res", res);
    });
  }, []);

  return <div className="App">Hello, World!</div>;
}

export default App;
