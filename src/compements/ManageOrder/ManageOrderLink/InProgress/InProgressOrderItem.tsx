const InProgressOrderItem = ({ retention }: { retention: number }) => {
  return (
    <div className="border  rounded-lg  p-2  mb-4">
      <h1 className="font-semibold pb-1">Sunday</h1>
      <p className="font-semibold">200 Users</p>
      <div className="grid grid-cols-4 pt-1.5 gap-8 ">
        <div className=" ">
          <h6 className="text-neutral-500">
            Retention :
            <span
              className={`inline-flex items-center text-xs font-medium px-2.5 py-2 rounded-lg ${
                retention < 60
                  ? "bg-red-200 text-red-500"
                  : "bg-green-100 text-green-500 "
              }`}
            >
              {retention < 60 ? "Low" : "High"}
            </span>
          </h6>
          <h6 className="text-neutral-500 pt-1">Suvery response : 75%</h6>
        </div>
        <div className="">
          <div className="flex justify-between pb-1">
            <div>
              <span className="font-semibold">75% Featured</span>
            </div>
            <div>
              <span className="text-neutral-500">200 Users</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <h6 className="text-neutral-500 pt-1">Suvery response : 75%</h6>
        </div>
        <div className="">
          <div className="flex justify-between pb-1">
            <div>
              <span className="font-semibold">25% Failed</span>
            </div>
            <div>
              <span className="text-neutral-500">200 </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "42%" }}
            ></div>
          </div>
          <h6 className="text-neutral-500 pt-1">Industry standard :42%</h6>
        </div>
        <div className="">
          <span className="font-semibold">
            What makes users return to app
            <h2 className="text-blue-700">
              <a className="cursor-default no-underline ">Good Delivery</a>
            </h2>
            <div className="flex justify-between pt-3">
              <div>
                <p className="text-neutral-500 font-medium">90 Responses</p>
              </div>
              <div>
                <p className=" pt-1 text-xs mr-2 ">
                  <a className="text-green-700 cursor-pointer"> View more</a>
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InProgressOrderItem;
