import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./learn-useState/counter";
import Effect from "./learn-useEffect/index";
import Context from "./learn-useContext/index";
import NewHook from "./TugasNewHook";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/ref">Use Ref</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="/effect" exact element={<Effect />} />
          <Route path="/context" exact element={<Context />} />
          <Route path="/ref" exact element={<NewHook />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
