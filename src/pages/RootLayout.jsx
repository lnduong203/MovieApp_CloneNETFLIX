import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/Header";
import Loading from "../components/Loading";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default RootLayout;
