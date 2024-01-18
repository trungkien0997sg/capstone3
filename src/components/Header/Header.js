import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center my-2">
        <div className="logo">
          <span>TruKie</span>
        </div>
        <div className="links d-flex flex-column flex-md-row">
          <NavLink className="btn btn-link mx-1" to="/">
            Trang chủ
          </NavLink>
          <NavLink className="btn btn-link mx-1" to="/">
            Liên hệ
          </NavLink>
          <NavLink className="btn btn-link mx-1" to="/">
            Tin tức
          </NavLink>
          <NavLink className="btn btn-link mx-1" to="/">
            Ứng dụng
          </NavLink>
        </div>
        <div className="login-container">
          <NavLink className="btn btn-primary mx-2" to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-success" to="/signup">
            Sign up
          </NavLink>
        </div>
      </div>
    );
  }
}
