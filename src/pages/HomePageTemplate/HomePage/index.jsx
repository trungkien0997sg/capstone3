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

  // const cinemaSystems = dataRap[0];
  // console.log("cinemaSystems: ", cinemaSystems);

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
          <div className=" col-1 cinema__logo ">
            <div className="">{renderIconRap()}</div>
          </div>
          <div className="col-11 cinema__schedule">
            <LichChieuTheoRap />
          </div>

          {/* <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {dataLich &&
                    dataLich.map((system) => {
                      return (
                        <Nav.Item>
                          <Nav.Link eventKey={system.maHeThongRap}>
                            <img
                              src={system.logo}
                              style={{ width: 120, height: 120 }}
                            />
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {dataLich &&
                    dataLich.map((system) => {
                      return (
                        <Tab.Pane eventKey={system.maHeThongRap}>
                          {system.cumRapChieu.map((item) => {
                            return (
                              <div>
                                {item.tenCumRap}
                                <Row>
                                  {item.lichChieuPhim.map((item, index) => {
                                    return <Col sm={2}></Col>;
                                  })}
                                </Row>
                              </div>
                            );
                          })}
                          {system.tenHeThongRap}
                        </Tab.Pane>
                      );
                    })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container> */}
        </div>
      </div>
    </div>
  );
}
