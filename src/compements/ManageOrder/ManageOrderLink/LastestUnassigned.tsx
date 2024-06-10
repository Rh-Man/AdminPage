import { HiOutlineSearch } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { RxDotsVertical } from "react-icons/rx";

const LastestUnassigned = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className=" flex justify-between  items-center pb-5">
        <div>
          <h1 className="text-3xl font-semibold  font-sans ">
            Lastest Unassigned
          </h1>
        </div>
        <div>
          <button className="bg-primary rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
            <IoAddOutline size={20} />
            <span>New Order</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-sm flex-1 p-12 border border-gray-200 ">
        {/*  */}
        <div className="flex justify-between">
          <div className="flex gap-3 ">
            <button className="bg-white rounded-xl py-3 px-5 flex items-center space-x-2 text-tiers border border-gray-300 ">
              <IoAddOutline size={20} />
              <span>Add Order</span>
            </button>
            <div className="relative ">
              <HiOutlineSearch
                size={20}
                //@ts-ignore
                className={
                  "text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                }
              />
              <input
                type="text"
                placeholder="Search"
                className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-11 pl-11 pr-4 rounded-lg"
              />
            </div>
          </div>
          <div>
            <button className="bg-white rounded-xl py-3 px-7 flex items-center space-x-2 text-tiers  border border-gray-300">
              <CiFilter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light border-collapse">
                  <thead className="font-medium bg-white">
                    <tr className="bg-white text-gray-400">
                      <th className="whitespace-nowrap px-6 py-4 font-medium border-0">
                        <input type="checkbox" color="grey" />
                        id
                      </th>
                      <th scope="col" className="px-6 py-4 border-0">
                        Refer
                      </th>
                      <th scope="col" className="px-6 py-4 border-0">
                        Day
                      </th>
                      <th scope="col" className="px-6 py-4 border-0">
                        Ordered Date
                      </th>
                      <th scope="col" className="px-6 py-4 border-0">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4 border-0 flex gap-2">
                        Submitted Date
                      </th>
                      <th scope="col" className="px-6 py-4 border-0">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {[...Array(10)].map((item, index) => (
                    <tr
                      className="bg-white transition duration-300 ease-in-out hover:bg-neutral-100 cursor-pointer"
                      key={index}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium border-0">
                        <input type="checkbox" className="mr-1" />
                        #4455488
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-0 flex items-center">
                        Courtnet horney
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 border-0">
                        02 Days
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-0">
                        10/05/2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-0">
                        paid
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-0">
                        10/03/2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-0">
                        <div>
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3  text-sm font-semibold  ">
                              <div className="flex items-center ">
                                <RxDotsVertical
                                  //@ts-ignore
                                  className="-mr-1 h-5 w-5 text-gray-400 "
                                  aria-hidden="true"
                                />
                              </div>
                            </MenuButton>
                            <Transition
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1 ">
                                  <MenuItem>
                                    {({ focus }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          focus
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm menu-item-link " // Ajoutez la classe ici
                                        )}
                                      >
                                        Your Profile
                                      </a>
                                    )}
                                  </MenuItem>
                                  <MenuItem>
                                    {({ focus }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          focus
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm menu-item-link" // Ajoutez la classe ici
                                        )}
                                      >
                                        Settings
                                      </a>
                                    )}
                                  </MenuItem>
                                </div>
                                <div className="py-1">
                                  <MenuItem>
                                    {({ focus }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          focus
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm menu-item-link" // Ajoutez la classe ici
                                        )}
                                      >
                                        LogOut
                                      </a>
                                    )}
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </Transition>
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastestUnassigned;
