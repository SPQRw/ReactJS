// RegistrationForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { registration_user } from "../../redux/action";

const RegistrationForm = ({ registration_user }) => {
  let registration = useSelector((store) => store.registration);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    // dispatch({ type: "REGISTER_USER", payload: user });
    // console.log(user);
  };
  return (
    <div>
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
        />
        <button
          onClick={() => {
            let userAfter = { setFirstName };
            registration_user(userAfter);
          }}
        >
          Поиск
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  registration_user,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
