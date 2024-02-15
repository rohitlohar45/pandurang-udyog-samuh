// Login.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../firebase/authActions"; // Assuming you have actions for Redux
import { FaRegEnvelope, FaUserAlt } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="container">
      <div className="contact-area mg-top-120 mb-120">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-7">
            <form className="contact-form text-center" onSubmit={handleLogin}>
              <h3>LOGIN</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <label>
                      <FaUserAlt />
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <label>
                      <FaRegEnvelope />
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-base" type="submit">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
