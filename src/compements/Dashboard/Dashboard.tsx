import DashboardGrid from "./DashboardGrid";
import { IoAddOutline } from "react-icons/io5";
const Dashboard = () => {
  return (
    <>
      <div className=" flex justify-between  items-center">
        <div>
          <h1 className="text-3xl font-semibold pl-6 font-sans ">Dashboard</h1>
        </div>
        <div className="pr-7">
          <button className="bg-primary rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
            <IoAddOutline size={20} />
            <span>Add Order</span>
          </button>
        </div>
      </div>
      <div className="flex gap-4  mx-7 ">
        <DashboardGrid />
      </div>
    </>
  );
};

export default Dashboard;
