import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-item ui-input">
          <input type="text" placeholder="İsminiz" />
        </div>
        <div className="login-item ui-input">
          <input type="password" placeholder="Şifreniz" />
        </div>
        <button className="login-item ui primary button">Giriş Yap </button>
      </div>
    </div>
  );
};
export default Login;
