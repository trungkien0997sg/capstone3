// import React, { FormEvent, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { acFetchUserLogin } from "./duck/actions";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object({
//   taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
//   matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
// });

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const { loading, data, error } = useSelector((state) => state.userReducer);

//   const navigate = useNavigate();
//   const { register, handleSubmit, formState } =
//     useForm <
//     any >
//     {
//       defaultValues: { taiKhoan: "", matKhau: "" },
//       resolver: yupResolver(schema),
//       criteriaMode: "all",
//     };

//   useEffect(() => {
//     console.log("errors", formState.errors);
//   }, [formState]);

//   const onSubmit = (formValues) => {
//     dispatch(acFetchUserLogin(formValues));
//   };

//   useEffect(() => {
//     if (data) {
//       if (data.maLoaiNguoiDung === "QuanTri") {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }
//     }
//   }, [data]);

//   return (
//     <div className="d-flex align-items-center justify-content-center">
//       <h3>Đăng nhập</h3>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <input
//             type="text"
//             placeholder="Tài khoản..."
//             {...register("taiKhoan")}
//           />
//           {formState.errors.taiKhoan?.message && (
//             <small className="text-danger">
//               {formState.errors.taiKhoan?.message}
//             </small>
//           )}
//         </div>
//         <input type="text" placeholder="Mật khẩu..." {...register("matKhau")} />

//         <button disabled={loading} type="submit" className="btn btn-success">
//           {loading && (
//             <div className="spinner-border" role="status">
//               <span className="sr-only">Loading...</span>
//             </div>
//           )}
//           Đăng nhập
//         </button>
//       </form>
//     </div>
//   );
// }

import React from "react";

export default function LoginPage() {
  return <div>LoginPage</div>;
}
