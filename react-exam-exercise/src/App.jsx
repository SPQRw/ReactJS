import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          {currentUser ? <UserProfile /> : <LoginForm />}
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
