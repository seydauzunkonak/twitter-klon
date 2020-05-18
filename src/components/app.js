import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Tweets from "./tweet/tweets";
import Menu from "./menu/menu";
import myTweets from "./tweet/myTweets";
import Login from "./login/login";

const App = () => {
  return (
    <Router history={createHistory()}>
      <div>
        <Menu />

        <Switch>
          <Route path="/" exact component={Tweets} />
          <Route path="/myTweets" component={myTweets} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
