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

  useEffect(() => {
    dispatch(actFetchRap());
    dispatch(actFetchBanner());
    dispatch(actFetchListData());
  }, [dispatch]);

  const renderListMovie = () => {
    if (loading) return <div>Loading...</div>;

    if (data && data.length > 0) {
      return data.map((movie) => <ListMovie movie={movie} />);
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

  return (
    <div className="">
      <div className="" style={{ height: "d-lg-90vh" }}>
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
          <div className="row cinema__logo d-flex flex-column">
            <div className="col-1">{renderIconRap()}</div>
          </div>
          <div className="col-11 cinema__schedule">
            <LichChieuTheoRap />
          </div>
        </div>
      </div>
    </div>
  );
}
