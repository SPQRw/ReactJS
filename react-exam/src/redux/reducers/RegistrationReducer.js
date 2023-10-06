import React from "react";

const RegistrationReducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTRATION_USER":
      console.log(action);
    default:
      return state;
  }
};

export default RegistrationReducer;
