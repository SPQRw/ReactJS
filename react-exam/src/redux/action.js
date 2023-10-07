export const registration_user = (registration, mass, per) => ({
  type: "REGISTRATION_USER",
  registration,
  mass,
  per,
  // email
});
export const login_user = (login) => ({
  type: "LOGIN_USER",
  //       console.log("LOgin user acton ==", action.type);
  //       return {
  //         ...state,
  //         currentUser: action.payload,
  //       };
  login,
});
