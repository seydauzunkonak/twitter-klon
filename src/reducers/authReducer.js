import { LOGIN } from "../actions";
const INITIAL_STATE={
  email : ''
  isLoggedIn : false
}
export default (state =INITIAL_STATE, action) => {
  if (action.type === LOGIN) {
    return {
     email: action.payload.email,
     isLoggedIn:true
    } 
  }
  return state;
};
