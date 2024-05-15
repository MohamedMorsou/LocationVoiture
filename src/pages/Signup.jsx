import React from "react";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from '../components/UI/CommonSection';
import { Link } from "react-router-dom";
import signupImg from "../assets/all-images/signup.gif";

import "../styles/signup.css";
import { Col, Container, Row } from "reactstrap";

const Signup = () => {
  return (
    <Helmet title="Register">
      {/* <CommonSection title="Register" /> */}
      <section >
        <Container>
          <Row className="signup__info">
            <Col lg='12' md='12' sm='12'>
              <h3 className="sigup__h3">
                Create an <span className="">Account</span>
              </h3>
            </Col>
            <Col lg="5" className="signup__img">
              <figure>
                <img src={signupImg} alt="" className="signup__img-img" />
              </figure>
            </Col>

            {/* sing up form */}
            <Col lg="7" md="12" sm ='12' className="signup__title">
              <form>
                <div className="signup__form">
                  <input
                    type="text"
                    name="name"
                    placeholder="FullName"
                    className="mt-5"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mt-5"
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="mt-5"
                    required
                  />
                </div>

                <div className="mb-5 signup__select">
                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-base leading-7"
                  >
                    Are you a:
                    <select
                      name="role"
                      className="text-textColor font-semibold text-[15px]
                leading-7 px-4 py-3 focus:outline-none"
                    >
                      <option value="patient">Admin</option>
                      <option value="doctor">User</option>
                    </select>
                  </label>

                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-base leading-7"
                  >
                    Gender:
                    <select
                      name="gender"
                      className="text-textColor font-semibold text-[15px]
                leading-7 px-4 py-3 focus:outline-none"
                    >
                      {/* <option value="">Select</option> */}
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </label>
                </div>

                <div className="mt-7 ">
                  <button type="submit" className="signup__btn">
                    Register
                  </button>
                </div>

                <p className="mt-5 p">
                  Already have an account ?
                  <Link to="/login" className="">
                    Login
                  </Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
