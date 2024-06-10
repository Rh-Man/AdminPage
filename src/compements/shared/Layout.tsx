import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row w-full overflow-x-hidden bg-neutral-100">
      <SideBar />
      <Header />
      <div className="w-full flex justify-end  pt-28  px-5 bg-neutral-100 pb-10">
        {" "}
        <div className="outlet-container">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
