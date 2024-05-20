import React from "react";
import { Link } from "react-router-dom";

export default function ListMovie(props) {
  const { movie } = props;
  return (
    <div className="col-md-3 mt-3">
      <div className="card btn btn-primary">
        <img
          className="card-img-top"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          src={movie.hinhAnh}
          alt=""
        />
        <div
          style={{ height: "150px" }}
          className="card-body d-flex flex-column align-content-center justify-content-center"
        >
          <h5 style={{ height: "50px" }} className="card-title">
            {movie.tenPhim}
          </h5>
          <Link to={`/detail/${movie.maPhim}`} className="btn btn-success">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
