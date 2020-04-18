import { combineReducers } from "redux";
import { POSTDATA, GETDATA } from "../actionTypes";
const postPomodoro = (state = [], action) => {
  switch (action.type) {
    case POSTDATA:
      return action.payload;
   
    default:
      return state;
  }
};


const getPomodoro = (state = [], action) => {
  switch (action.type) {

    case GETDATA:
      return {...state,tasks:action.payload};
    default:
      return state;
  }
};
export default combineReducers({
  postPomodoro,getPomodoro
});
