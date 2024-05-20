import React from "react";
import HeThongRap from "./_components/HeThongRap";
import Banner from "./_components/Banner";
import ListMovie from "./_components/ListMovie";
import LichChieuTheoRap from "./_components/LichChieuTheoRap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actFetchListData } from "../../../store/listMovieReducer/actions";
import { actFetchBanner } from "../../../store/bannerReducer/actions";
import { actFetchRap } from "../../../store/heThongRapReducer/action";
import { actFetchLichChieuData } from "../../../store/lichChieuReducer/actions";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";

export default function HomePage() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.listMovieReducer
  );

  const { loadingBanner, dataBanner } = useSelector(
    (state) => state.bannerReducer
  );

  const { loadingRap, dataRap } = useSelector(
    (state) => state.heThongRapReducer
  );

  const { loadingLich, dataLich } = useSelector(
    (state) => state.lichChieuReducer
  );

  useEffect(() => {
    dispatch(actFetchRap());
    dispatch(actFetchBanner());
    dispatch(actFetchListData());
    dispatch(actFetchLichChieuData());
  }, [dispatch]);

  const renderListMovie = () => {
    if (loading) return <div>Loading...</div>;

    if (data && data.length > 0) {
      return data.map((movie) => (
        <ListMovie key={movie.maPhim} movie={movie} />
      ));
    }
  };

  const renderBanner = () => {
    if (loadingBanner) return <div>Loading...</div>;

    if (dataBanner && dataBanner.length > 0) {
      const banner = dataBanner[0];
      return <Banner key={banner.ID} banner={banner} />;
    }
  };

  const renderIconRap = () => {
    if (loadingRap) return <div>Loading...</div>;
    if (dataRap && dataRap.length > 0) {
      return dataRap.map((rap) => <HeThongRap rap={rap} />);
    }
  };

  const renderLichChieu = (id) => {
    if (loadingLich) return <div>Loading..........</div>;
  };

  return (
    <div className="">
      <div className="" style={{ height: "90vh" }}>
        {renderBanner()}
      </div>
      <div className="container">
        <h2 className="title text-center text-decoration-underline pt-2">
          DANH SÁCH PHIM
        </h2>
        <div className="row">{renderListMovie()}</div>

        <div className="pt-3 cinema">
          <h2 className="title text-center text-decoration-underline py-2">
            HỆ THỐNG RẠP
          </h2>
          <div className=" col-1 cinema__logo ">
            <div className="">{renderIconRap()}</div>
          </div>
          <div className="col-11 cinema__schedule">
            <LichChieuTheoRap />
          </div>
        </div>
      </div>
    </div>
  );
}
