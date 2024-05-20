import React from "react";
import { NavLink } from "react-router-dom";

export default function HeThongRap(props) {
  const { rap } = props;
  return (
    <div
      className={({ isActive }) =>
        isActive ? "btn btn-primary my-active" : "nav-link"
      }
    >
      <img
        className=""
        style={{ width: "80px", height: "80px" }}
        src={rap.logo}
        alt=""
      />
    </div>
  );
}
