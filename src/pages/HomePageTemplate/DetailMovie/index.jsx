import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchDetail } from "../../../store/movieDetailReducer/action.js";

export default function DetailMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loadingDetail, dataDetail } = useSelector(
    (state) => state.movieDetailReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(actFetchDetail(id));
    }
  }, [id]);

  if (loadingDetail) return <p>Loading...</p>;
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-3">
          <img
            src={dataDetail?.hinhAnh}
            className="w-100 rounded"
            style={{ objectFit: "cover" }}
            height={400}
            alt={dataDetail?.tenPhim}
          />
        </div>
        <div className="col-9 d-flex flex-column justify-content-between">
          <div>
            <h4 className="font-weight-bold">
              Tên phim: {dataDetail?.tenPhim}{" "}
            </h4>
            <p>Mô tả: {dataDetail?.moTa} </p>
            <p>Đánh giá: {dataDetail?.danhGia}</p>
            {/* DD/MM/YYYY hh:mm */}
            {/* <p>Ngày khởi chiếu: {dayjs(date).format("DD/MM/YYYY")}</p> */}
          </div>
          <div style={{ width: 200 }}>
            <button className="btn btn-success">Xem trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
