import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="ui secondary  menu">
      <div className="item">
        <Link to="/myTweets"> Tweetler</Link>
      </div>
      <div className="item">
        <Link to="/myTweets">Benim Tweetlerim</Link>
      </div>
      <div className="right menu"></div>
      <div className="item">
        <Link to="/login"> Giriş Yap </Link>
      </div>
    </div>
  );
};
export default Menu;
