import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import counterReducer from "./reducers/counterReducer";
import movieReducers from "./reducers/movieReducers";
const rootReducer = combineReducers({
  user: userReducer,
  count: counterReducer,
  movie: movieReducers,
});

export default rootReducer;
