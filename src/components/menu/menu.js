import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions";

class Menu extends Component {
  render() {
    const { isLoggedIn } = this.Pprops.auth;
    return isLoggedIn === true ? (
      <div className="ui secondary  menu">
        <div className="item">
          <Link to="/myTweets"> Tweetler</Link>
        </div>
        <div className="item">
          <Link to="/myTweets">Benim Tweetlerim</Link>
        </div>
        <div className="item">
          <Link to="/newTweet">Yeni Tweet</Link>
        </div>
        <div className="right menu"></div>
        <div className="item">
          <Link
            to="/"
            onClick={() => {
              this.props.logout();
            }}
          >
            {" "}
            Çıkış Yap{" "}
          </Link>
        </div>
      </div>
    ) : (
      <div className="ui secondary  menu">
        <Link className="item">
          <Link to="/myTweets"> Tweetler</Link>
        </Link>

        <div className="right menu"></div>
        <div className="item">
          <Link to="/login"> Giriş Yap </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logout })(Menu);
