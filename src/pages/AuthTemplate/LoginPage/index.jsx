import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acFetchUserLogin } from "../../../store/userReducer/actions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  useEffect(() => {
    console.log("errors", formState.errors);
  }, [formState]);

  const onSubmit = (formValues) => {
    dispatch(acFetchUserLogin(formValues));
  };

  useEffect(() => {
    if (data) {
      if (data.maLoaiNguoiDung === "QuanTri") {
        alert(`đăng nhập thành công với quyền admin`);
        navigate("/");
      } else {
        alert(`khách hàng đăng nhập thành công`);
        navigate("/");
      }
    }
  }, [data]);

  return (
    <div style={{ height: "30vh" }} className="text-center pt-3">
      <h1 style={{ marginBottom: "20px" }}>Đăng nhập</h1>
      <form
        style={{ height: "30vh" }}
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          placeholder="Tài khoản..."
          {...register("taiKhoan")}
        />
        {formState.errors.taiKhoan?.message && (
          <small className="text-danger">
            {formState.errors.taiKhoan?.message}
          </small>
        )}
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          placeholder="Mật khẩu..."
          {...register("matKhau")}
        />

        <button disabled={loading} type="submit" className="btn btn-success">
          {loading && (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
