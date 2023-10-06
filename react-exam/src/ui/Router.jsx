import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import App from "../App";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistartionForm from "../components/RegistrationForm/RegistrationForm";
import UserProfile from "../components/UserProfile/UserProfile";
import { useState } from "react";
import { users as usersData } from "../users.data";
const Router = () => {
  const [users, setUsers] = useState(usersData);
  // const currentUser = useSelector((state) => state.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<RegistartionForm users={users} setUsers={setUsers} />}
          path="/Registration"
        >
          {/* {currentUser ? <UserProfile /> : <LoginForm />} */}
        </Route>
        <Route element={<App />} path="/"></Route>
        <Route element={<LoginForm users={users} />} path="/Login"></Route>
        <Route element={<UserProfile users={users} />} path="/User/:id"></Route>
        <Route element={<div>Not Found</div>} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
