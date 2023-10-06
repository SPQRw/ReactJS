import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LogInUser from "./components/LoginForm/LoginForm";
function App() {
  return (
    <>
      <nav>
        <li>
          <Link to="/Login">Login</Link>
          <Link to="/Home">Home</Link>
          <Link to="/"></Link>
        </li>
      </nav>
    </>
  );
}

export default App;
