import React from "react";

export default function Banner(props) {
  const { banner } = props;
  return (
    <img
      style={{ width: "100%", maxHeight: "100%" }}
      src={banner.hinhAnh}
      alt=""
    />
  );
}
