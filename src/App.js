import React from "react";
import "./App.css";
//step # 01
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Router Example</h1>
      {/* step # 03 */}
      <Router>
        <Link to="/home">Home Page</Link>
        <br></br>
        <br></br>
        <Link to="/about">AboutUs Page</Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" exact = {true} element={<About />} />
        </Routes>
      </Router>
    </div>
  );

  //step # 02
  function Home() {
    return (
      <div>
        <h1>Home</h1>
        <p>This is home page</p>
      </div>
    );
  }

  //step # 02
  function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is abount us page</p>
      </div>
    );
  }
}

export default App;
