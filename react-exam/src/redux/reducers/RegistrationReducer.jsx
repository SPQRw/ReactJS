import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const RegistrationReducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTRATION_USER":
      console.log(action.mass);
      return (action.mass = state.push(
        action.mass((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            name: action.registration.firstName,
            surname: action.registration.lastName,
            email: action.registration.email,
            password: action.registration.password,
          },
        ])
      ));

    default:
      return state;
  }
};

export default RegistrationReducer;
