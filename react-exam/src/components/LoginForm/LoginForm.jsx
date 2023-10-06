import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { login_user } from "../../redux/action";
// import styles from "./Registration/Registration.module.css";

const LoginForm = ({ login_user, users, setUsers }) => {
  let login = useSelector((store) => store.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
  };
  const nav = useNavigate();
  const Check = (email, id) => {
    // console.log(email);
    const isExist = users.some((r) => r.email === email);
    if (isExist) {
      const filteredUsers = users.filter((user) => user.email === email);
      console.log(filteredUsers);
      nav(`/User/${filteredUsers[0].id}`, { state: filteredUsers[0] });
    } else {
      console.log(isExist);
      nav("/Login");
    }
  };
  return (
    <div>
      <h2>Логин</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button
          onClick={() => {
            Check(email);
            let userAfter = { email };
            login_user(userAfter);
          }}
        >
          Логин
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  login_user,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
