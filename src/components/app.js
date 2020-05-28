import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Menu from "./menu/menu";
import Tweets from "./tweet/tweets";
import MyTweets from "./tweet/myTweets";
import NewTweet from "./tweet/newTweet/newTweet";

import Login from "./login/login";
import firebase from "firebase/app";
import history from "../history";
import { isLoggedIn } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCGkwGHqDEHBuJV0gaNlHvgBsP0Oj2BqHc",
      authDomain: "twitterklon-react-7b211.firebaseapp.com",
      databaseURL: "https://twitterklon-react-7b211.firebaseio.com",
      projectId: "twitterklon-react-7b211",
      storageBucket: "twitterklon-react-7b211.appspot.com",
      messagingSenderId: "312535984581",
      appId: "1:312535984581:web:0d5a18cd6cdf2b74c8c3ac",
    });
    this.props.isLoggedIn();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Menu />

          <Switch>
            <Route path="/" exact component={Tweets} />
            <Route path="/myTweets" component={MyTweets} />
            <Route path="/newTweet" component={NewTweet} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(null, { isLoggedIn })(App);
