// import { useState } from "react";
// import Dropdown from "./Dropdown";

import logo from "/logo-no-background.svg";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const data = localStorage.getItem("user");
  // const userData = data ? JSON.parse(data) : null;

  return (
    <nav className="dark:bg-[#000000] bg-slate-500 top-0 left-0 w-full  relative py-1 px-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <div className=" flex-shrink-0 ">
          <a href="/" className="flex items-center space-x-3">
            <div>
              <img src={logo} className="h-8  " alt="ClassConnect" />
            </div>
          </a>
        </div>

        <div className="flex flex-grow justify-end items-center md:order-2 space-x-6 rtl:space-x-reverse relative">
          <div className="relative">
            {/* <button
              type="button"
              className="flex text-sm bg-gray-800 p-2 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={userData?.profilePic || ""}
                alt="user photo"
              />
            </button> */}
            {/* {isDropdownOpen && <Dropdown />} */}
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
