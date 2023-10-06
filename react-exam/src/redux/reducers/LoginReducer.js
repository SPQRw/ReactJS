const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(action);
    default:
      return state;
  }
};
export default LoginReducer;
