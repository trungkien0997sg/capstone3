import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
