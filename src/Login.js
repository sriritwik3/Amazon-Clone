import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login_section">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
          className="amazon_logo"
        />
      </Link>
      <div className="login_container">
        <h1 className="login_heading">Sign-In</h1>
        <form action="">
          <h5 className="login_label">Email</h5>
          <input
            className="login_input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="login_label">Password</h5>
          <input
            className="login_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signin_button" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p className="login_confirmation">
          By signing-in you agree to our AMAZON CLONE(not really though)
          Conditions.
        </p>
      </div>
      <div className="login_dupcontainer">
        <div className="blockquote_line"></div>
        <blockquote>New to Amazon?</blockquote>
        <div className="blockquote_line"></div>
        {/* <button className="signup_button">Create your Amazon Account</button> */}
      </div>
      <div className="login_dupcontainer">
        <button className="signup_button" onClick={signUp}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};
export default Login;
