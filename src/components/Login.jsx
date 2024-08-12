import React, { useState } from "react";
import "./Productitem.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState(""); // New state for feedback message

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login submitted", { email, password });
    setMessage("Login Successful!"); // Set success message
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    console.log("Sign Up submitted", { username, email, password });
    setMessage("Sign Up Successful!"); // Set success message
  };

  return (
    <div className="Body">
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={isSignUp ? handleSignUp : handleLogin}
        >
          <h1>{isSignUp ? "Create Your Account" : "Welcome Back !!"}</h1>
          <h2>
            {isSignUp
              ? "To create an account, please enter your info 👇"
              : "To keep connected with us Please Login Your Info 👇"}
          </h2>
          {isSignUp && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        {message && (
          <div className="feedback-message">
            <p>{message}</p>
          </div>
        )}
        <div className="signup-link">
          <p>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Login" : "Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
