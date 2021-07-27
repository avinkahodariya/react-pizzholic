import userpassword from "./userpassword";
import useremail from "./useremail";
import username from "./username";
import submit from "./submit";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  userpassword,
  useremail,
  username,
});

export default rootReducer;
