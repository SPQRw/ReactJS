// RegistrationForm.js
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
import { registration_user } from "../../redux/action";
import styles from "./Registration.module.css";

const RegistrationForm = ({ registration_user, users, setUsers }) => {
  let registration = useSelector((store) => store.registration);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let per;
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(user);
    per = user;
  };
  const nav = useNavigate();
  const Check = (email) => {
    // console.log(email);
    const isExist = users.some((r) => r.email === email);
    if (isExist) {
      console.log("YEs");
      nav("/Login");
    } else {
      console.log(isExist);
      nav("/Login");
    }
  };
  return (
    <div className={styles.form}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
            let userAfter = { firstName, lastName, email, password };
            registration_user(userAfter, setUsers);
          }}
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  registration_user,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
