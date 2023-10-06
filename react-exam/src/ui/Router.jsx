import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import App from "../App";
// import LoginForm from "../components/LoginForm/LoginForm";
import RegistartionForm from "../components/RegistrationForm/RegistrationForm";
// import UserProfile from "../components/UserProfile/UserProfile";
// import { useSelector } from "react-redux";
const Router = () => {
  // const currentUser = useSelector((state) => state.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RegistartionForm />} path="/">
          {/* {currentUser ? <UserProfile /> : <LoginForm />} */}
        </Route>
        <Route element={<App />} path="/Home"></Route>
        {/* <Route element={<LoginForm />} path="/Login"></Route> */}
        {/* <Route element={<UserProfile />} path="/User"></Route> */}
        <Route element={<div>Not Found</div>} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
