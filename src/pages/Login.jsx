import React from "react";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    
  return (
    <Helmet title="Login">
      {/* <CommonSection title="Login" /> */}
      <section>
        <div className="login">
          <h3>
            Hello ! <span>Welcome</span> Back
          </h3>
          <form action="">
            <div className="form">
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mt-5"
                required
              />
            </div>

            <div className="mt-7 button">
              <button type="submit">Login</button>
            </div>

            <p className="mt-5 p">
              Don't have an account  ? 
              <Link to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;

