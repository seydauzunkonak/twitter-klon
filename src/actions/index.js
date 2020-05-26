import firebase from "firebase/app";
import "firebase/auth";
import history from "../history";

export const LOGIN = "LOGIN";
const loginSuccess = (dispatch, response) => {
  console.log(response);
  history.push("/");
  dispatch({ type: LOGIN, payload: response.user });
};
export const login = (email, password) => {
  return (dispatch) => {
    //firebase sorgusu
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        loginSuccess(dispatch, response);
      })
      .catch((err) => {
        console.log(err);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            loginSuccess(dispatch, response);
          });
      });
  };
};

export const isLoggedIn = () => {
  firebase.auth().onAuthStateChanged((user) => {});
};
