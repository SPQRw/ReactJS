import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentsComp from "./components/StudentsComp/StudentsComp";
import HomeComp from "./components/HomeComp/HomeComp";
import AboutComp from "./components/AboutComp/AboutComp";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeComp></HomeComp>}></Route>
        <Route path="/students" element={<StudentsComp></StudentsComp>}></Route>
        <Route path="/about/:aboutId" element={<AboutComp></AboutComp>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
