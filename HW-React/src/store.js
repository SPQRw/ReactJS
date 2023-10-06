import { createStore } from "redux";
import computerReducer from "./reducers";

const store = createStore(computerReducer);

export default store;
