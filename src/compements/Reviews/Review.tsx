import { FiDownload } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { RxDotsVertical } from "react-icons/rx";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { BiShare } from "react-icons/bi";

const Review = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className=" flex justify-between  items-center pb-5">
        <div>
          <h1 className="text-3xl font-semibold pl-6 font-sans ">
            Review & Rating
          </h1>
        </div>
        <div className="pr-7">
          <button className="bg-primary rounded-xl py-3 px-7 flex items-center space-x-2 text-white">
            <FiDownload size={20} />
            <span>Export reviews</span>
          </button>
        </div>
      </div>
      {/*  */}
      <div className=" rounded-sm flex-1 m-5 border-gray-200 ">
        <div className="grid grid-cols-3 gap-4 ">
          {/* debut 1er card */}
          <div className="bg-white 1card py-3 rounded-lg">
            <div className="flex justify-between mx-4 pb-4 ">
              <div className="mt-1 text-lg font-medium">
                <h1>Comments</h1>
              </div>
              <div>
                <button className=" bg-white text-red-600 border  rounded-lg py-1.5 border-red-600 px-3  flex items-center space-x-2 ">
                  <span>See All</span>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=58"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="px-4 pb-2"> Rhman</p>
                  <p className="px-4 pb-3 text-gray-500"> 3hrs ago </p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>C'était incroyable, je vous conseil grave vraiment</p>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-3 mx-3" />

            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=12"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="px-4 pb-3"> Matar</p>
                  <p className="px-4 pb-3 text-gray-500"> 3hrs ago </p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>Pas mal le service etait rapide ca vallait le coup </p>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-3 mx-3" />
            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src=" https://i.pravatar.cc/150?img=35"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="px-4 pb-3"> Fatima</p>
                  <p className="px-4 pb-3 text-gray-500"> 3hrs ago </p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>C'était incroyable, je vous conseil grave vraiment</p>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-3 mx-3" />
          </div>
          {/* fin 1 card */}
          {/* debut 2eme card */}
          <div className="bg-white 2card py-3 rounded-lg">
            <div className="flex justify-between mx-4 pb-4 ">
              <div className="mt-1 text-lg font-medium">
                <h1>Rating Quality</h1>
              </div>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold  hover:bg-gray-50">
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
            </div>

            {/*
             */}
            <div className=" flex justify-center ">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-500">
                <span className="text-white text-lg font-semibold">3.3</span>
              </div>
            </div>

            <div className=" pt-4 flex justify-center ">
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div className="text-tiers  flex justify-center pt-2">
              <p>124 ratings</p>
            </div>
            <div
              className="mx-4 pt-5"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>3</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{
                    width: "75%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="mx-4 pt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>2</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: "40%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="mx-4 pt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>1</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-red-700 h-2.5 rounded-full"
                  style={{
                    width: "75%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* fin 2 eme card */}
          {/* debut 3 eme card */}
          <div className="bg-white rounded-lg py-3 ">
            <div className="flex justify-between mx-4 pb-4 ">
              <div className="mt-1 text-lg font-medium">
                <h1>Rating Quality</h1>
              </div>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold  hover:bg-gray-50">
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
            </div>

            {/*
             */}
            <div className=" flex justify-center ">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-600">
                <span className="text-white text-lg font-semibold">4.5</span>
              </div>
            </div>

            <div className=" pt-4 flex justify-center ">
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div className="text-tiers  flex justify-center pt-2">
              <p>124 ratings</p>
            </div>
            <div
              className="mx-4 pt-5"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>3</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{
                    width: "75%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="mx-4 pt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>2</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: "40%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="mx-4 pt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>1</span>
              <div
                className="rounded-full"
                style={{
                  flex: 1,
                  height: "10px",
                  backgroundColor: "#e0e0e0",
                  marginLeft: "8px",
                  position: "relative",
                }}
              >
                <div
                  className="bg-red-700 h-2.5 rounded-full"
                  style={{
                    width: "75%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* fin 3eme card */}
        </div>
      </div>
      <div className="rounded-lg m-5 bg-white">
        <div className=" flex justify-between  items-center pb-5">
          <div>
            <h1 className="text-3xl font-semibold pl-6 pt-4 font-sans ">
              Review
            </h1>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold  hover:bg-gray-50">
              <div className="flex items-center pt-7">
                <RxDotsVertical
                  //@ts-ignore
                  className="-mr-1 h-7 w-7 text-gray-400 "
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
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
        <hr className=" border-gray-300  mx-5 pt-3" />
        {/* debut 1 review */}
        <div className="grid grid-cols-4 p-3">
          <div className="col-span-1 ">
            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=12"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="pl-3 pb-1 font-semibold"> Matar</p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>8 days ago </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="  flex justify-start ">
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
            <div className="flex gap-4">
              <div className=" pt-3 pl-1 ">
                <SlLike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <SlDislike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <BiShare size={33} color="grey" />
              </div>
            </div>
          </div>
        </div>
        {/* fin 1 review */}

        <hr className=" border-gray-300 mt-4  mx-5" />
        {/* debut 2 eme review */}
        <div className="grid grid-cols-4 p-3">
          <div className="col-span-1 ">
            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=35"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="pl-3 pb-1 font-semibold"> Fatima</p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>8 days ago </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="  flex justify-start ">
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
            <div className="flex gap-4">
              <div className=" pt-3 pl-1 ">
                <SlLike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <SlDislike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <BiShare size={33} color="grey" />
              </div>
            </div>
          </div>
        </div>
        {/* fin 2 eme review */}
        <hr className=" border-gray-300  mx-5 pt-3" />
        {/* debut 3eme review */}
        <div className="grid grid-cols-4 p-3">
          <div className="col-span-1 ">
            <div className="flex items-center mx-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=51"
                alt=""
              />
              <div className="flex flex-col w-full ">
                <div className="flex  justify-between">
                  <p className="pl-3 pb-1 font-semibold"> Rhman</p>
                </div>
                <div className="text-gray-500 ml-3">
                  <p>8 days ago </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="  flex justify-start ">
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-5   h-5 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
            <div className="flex gap-4">
              <div className=" pt-3 pl-1 ">
                <SlLike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <SlDislike size={30} color="grey" />
              </div>
              <div className=" pt-3 pl-1 ">
                <BiShare size={33} color="grey" />
              </div>
            </div>
          </div>
        </div>
        {/* fin 3 eme review */}
        <hr className=" border-gray-300 mt-4  mx-5" />
      </div>
    </>
  );
};

export default Review;
