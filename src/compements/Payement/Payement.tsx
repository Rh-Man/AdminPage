import { MdOutlineFileDownload } from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { RxDotsVertical } from "react-icons/rx";
import paypalLogo from "../../assets/1200px-PayPal_logo.svg.png";
import mastercardLogo from "../../assets/Visa_Logo.png";
import Visa from "../../assets/mastercard-new3095.jpg";
const Payement = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className=" flex justify-between  items-center">
        <div>
          <h1 className="text-3xl font-semibold pl-6 font-sans ">Payement</h1>
        </div>
        <div className="pr-7">
          <button className="bg-primary rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
            <MdOutlineFileDownload size={20} />
            <span>Export Payements</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3">
        <div className="rounded-lg my-5 col-span-4">
          <div>premiere partie pas encore fais </div>
          <div className="bg-white rounded-lg">
            <div className=" flex justify-between  items-center pb-5 ">
              <div>
                <h6 className="text-3xl font-semibold pl-6 pt-3 font-sans ">
                  Services
                </h6>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3  text-sm font-semibold  ">
                  <div className="flex items-center ">
                    <RxDotsVertical
                      //@ts-ignore
                      className="  h-7 w-7 mr-4 my-7   text-gray-400 "
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
            <div className="grid grid-cols-2 gap-4 mx-5 pb-3">
              <div className="col-span-1 border rounded-lg flex justify-between">
                <div className="m-6 ">
                  <h1 className="font-semibold text-xl">Invoice</h1>
                  <p className="text-gray-400 font-thin mt-3">
                    Where a payement provider offers mutiples types
                  </p>
                  <h1 className="font-bold h-3 mt-6 mb-4 text-2xl">
                    $99,00 <span className="text-gray-400 font-light">/mo</span>
                  </h1>
                </div>
                <div className="flex flex-col mt-6 mx-4  ">
                  <div className="mb-5">
                    <img
                      className="w-15 h-15"
                      src="..\src\assets\audit.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className=" text-gray-400 bg-white rounded-xl py-3 px-4 flex items-center  border-gray-400 border">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border rounded-lg flex justify-between">
                <div className="m-6 ">
                  <h1 className="font-semibold text-xl">Subscription</h1>
                  <p className="text-gray-400 font-thin mt-3">
                    To fully understand how online payements works
                  </p>
                  <h1 className="font-bold h-3 mt-6 mb-4 text-2xl">
                    $9,00 <span className="text-gray-400 font-light">/mo</span>
                  </h1>
                </div>
                <div className="flex flex-col mt-6 mx-4  ">
                  <div className="mb-5">
                    <img
                      className="w-16 h-16"
                      src="..\src\assets\9169607.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className=" text-gray-400 bg-white rounded-xl py-3 px-4 flex items-center  border-gray-400 border">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-5 pb-6">
              <div className="col-span-1 border rounded-lg flex justify-between">
                <div className="m-6 ">
                  <h1 className="font-semibold text-xl">Shopping</h1>
                  <p className="text-gray-400 font-thin mt-3">
                    Once you've setup up your web page and connected
                  </p>
                  <h1 className="font-bold h-3 mt-6 mb-4 text-2xl">
                    $19,99 <span className="text-gray-400 font-light">/mo</span>
                  </h1>
                </div>
                <div className="flex flex-col mt-6 mx-4  ">
                  <div className="mb-5">
                    <img
                      className="h-16 w-16"
                      src="..\src\assets\shopping-cart-icon-design_2681137.jpg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className=" text-gray-400 bg-white rounded-xl py-3 px-4 flex items-center  border-gray-400 border">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border rounded-lg flex justify-between">
                <div className="m-6 ">
                  <h1 className="font-semibold text-xl">Safty</h1>
                  <p className="text-gray-400 font-thin mt-3">
                    Only the paiement paid for that appear{" "}
                  </p>
                  <h1 className="font-bold h-3 mt-6 mb-4 text-2xl">
                    $29,00 <span className="text-gray-400 font-light">/mo</span>
                  </h1>
                </div>
                <div className="flex flex-col mt-6 mx-4  ">
                  <div className="mb-5">
                    <img
                      className=" ml-2 h-16 w-16"
                      src="..\src\assets\images.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className=" text-gray-400 bg-white rounded-xl py-3 px-4 flex items-center  border-gray-400 border">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 border bg-white mt-4">
          <div className=" flex justify-between  items-center pb-5 ">
            <div>
              <h6 className="text-3xl font-semibold pl-6  font-sans ">
                Services
              </h6>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3  text-sm font-semibold  ">
                <div className="flex items-center ">
                  <RxDotsVertical
                    //@ts-ignore
                    className="  h-5 w-5 mr-4 my-7   text-gray-400 "
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
          <div className="mx-7 ">
            <p className="text-gray-400 pb-5">Checkup Price</p>
            <h1 className="text-orange-600 text-3xl font-semibold">
              $5.69{" "}
              <span className="text-gray-400 text-xl font-light">
                Per Month
              </span>
            </h1>

            <h1 className="mb-3 mt-5"> Payement Method</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="border px-5 py-4 rounded-lg">
                <img src={paypalLogo} alt="" />
              </div>
              <div className="border flex justify-center pt-3  rounded-lg">
                <img src={mastercardLogo} className="h-5 w-15" alt="" />
              </div>
              <div className="border flex justify-center  rounded-lg pt-1 ">
                <img src={Visa} className="h-10 w-17" alt="" />
              </div>
              <div className="flex gap-20 ml-7">
                <p className="ml-5 text-gray-400">PayPal</p>
                <p className="ml-10 text-gray-400">Visa</p>
                <p className="ml-10 text-gray-400">MasterCard</p>
              </div>
            </div>
            <h1 className="pt-5 font-semibold text-xl">Card Number</h1>
            <div className="">
              <div>
                <label
                  htmlFor="card-number-input"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white my-3 "
                ></label>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="****   ****   ****   ****"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1 className="pt-6 font-semibold text-xl mb-2">
                    Valid Until
                  </h1>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      data-datepicker
                      data-datepicker-format="mm/yy"
                      id="card-expiration-input"
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="12/23"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-1  ">
                  <h1 className="mt-6 font-semibold text-xl ml-1 mb-2">CV</h1>
                  <div className="">
                    <label
                      htmlFor="card-number-input"
                      className=" block text-sm font-medium text-gray-900 dark:text-white  "
                    ></label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="****   ****   ****   ****"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                      required
                    />
                  </div>
                </div>
              </div>
              <h1 className="pt-5 font-semibold text-xl">Card Holder</h1>
              <div>
                <label
                  htmlFor="card-number-input"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white my-3 "
                ></label>
                <input
                  type="text"
                  className=" mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your name"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  required
                />
              </div>
              <div className="p-2">
                <p className="text-orange-600">
                  Save card data for future payements
                </p>
              </div>
              <div className="flex justify-center pt-8 mb-4">
                <button className="bg-orange-600 rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
                  <span>Proceded to confirm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payement;
