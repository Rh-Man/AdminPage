import { IoAddOutline } from "react-icons/io5";
import InProgressOrderItem from "./InProgressOrderItem";

const InProgress = () => {
  return (
    <>
      <div className=" flex justify-between  items-center pb-5">
        <div>
          <h1 className="text-3xl font-semibold font-sans ">In Progress</h1>
        </div>
        <div>
          <button className="bg-primary rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
            <IoAddOutline size={20} />
            <span>Add Order</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg flex-1 p-5 border border-gray-200 ">
        <InProgressOrderItem retention={75} />
        <InProgressOrderItem retention={40} />
        <InProgressOrderItem retention={68} />
        <InProgressOrderItem retention={68} />
        <InProgressOrderItem retention={68} />
        <InProgressOrderItem retention={68} />
      </div>
    </>
  );
};

export default InProgress;
