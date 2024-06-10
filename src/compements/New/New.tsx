import { BsBoxFill } from "react-icons/bs";
import DriverDetail from "./steps/DriverDetail";
import OrderStep from "./steps/OrderStep";
import OrganisationBranch from "./steps/OrganisationBranch";
import { FaTruckFast } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";
const New = () => {
  return (
    <div className="bg-white w-full py-5 px-24 rounded-lg min-h-full flex gap-32 mb-10">
      <div className="w-24 justify-between items-center ">
        <div className="relative flex flex-col items-center text-teal-950">
          <div className="rounded-full transition duration-500 ease-in-out border-2 border-x-gray-300 h-12 w-12 flex items-center justify-center py-3">
            <FaTruckFast size={30} />
          </div>
          <div className="h-24 border-l-8 border-gray-300  "></div>
          <div className="rounded-full transition duration-500 ease-in-out border-2 border-x-gray-300 h-12 w-12 flex items-center justify-center py-3">
            <BsBoxFill size={30} />
          </div>
          <div className="h-24 border-l-8 border-gray-300 "></div>
          <div className="rounded-full transition duration-500 ease-in-out border-2 border-x-gray-300 h-12 w-12 flex items-center justify-center py-3">
            <PiFilesFill size={30} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <OrderStep />
        {/* <DriverDetail /> */}
        {/* <OrganisationBranch /> */}
      </div>
    </div>
  );
};

export default New;
