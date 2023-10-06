export const registration_user = (registration, mass) => ({
  type: "REGISTRATION_USER",
  registration,
  mass,
  // email
});
export const login_user = (login) => ({
  type: "LOGIN_USER",
  login,
});
