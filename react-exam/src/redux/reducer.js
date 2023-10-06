import { combineReducers } from "redux";
import RegistrationReducer from "./reducers/RegistrationReducer";
const rootReducer = combineReducers({
  registration: RegistrationReducer,
});

export default rootReducer;
