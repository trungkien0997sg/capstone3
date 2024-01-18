import axios from "axios";
import React, { Component } from "react";
import "./homepage.css";

export default class HomePage extends Component {
  state = {
    movieArr: [],
    movieBannerArr: [],
  };
  //load ds phim
  componentDidMount() {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU",
      },
    })
      .then((res) => {
        this.setState({ movieArr: res.data.content });
      })
      .catch(function (err) {
        console.log(err);
      });
    //banner
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU",
      },
    })
      .then((res2) => {
        this.setState({ movieBannerArr: res2.data.content });
      })
      .catch((err2) => {
        console.log(err2);
      });
  }
  renderMovieBanner = () => {
    let fm = this.state.movieBannerArr[0];
    if (fm) return <img className="object-fit-cover w-100" src={fm.hinhAnh} />;
  };

  renderMovieList = () => {
    return this.state.movieArr.map((item) => {
      return (
        <img className="col-3 m-0 p-0 rounded" src={item.hinhAnh} alt="" />
      );
    });
  };
  render() {
    console.log("movieArr", this.state.movieArr);
    console.log("movieArr", this.state.movieBannerArr);
    return (
      <div className="banner">
        <div className="bannerPhim">{this.renderMovieBanner()}</div>
        <div className="row w-100 justify-content-center object-fit-cover my-3 gap-3">
          {this.renderMovieList()}
        </div>
      </div>
    );
  }
}
