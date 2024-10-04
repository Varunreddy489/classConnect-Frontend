import { useState } from "react";
import Dropdown from "./Dropdown";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const data = localStorage.getItem("user");
  const userData = data ? JSON.parse(data) : null;

  return (
    <nav className="dark:bg-[#000000] relative py-1 px-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">

        <div className=" flex-shrink-0 ">
          <a href="/" className="flex items-center space-x-3">
             <div>
              {/* <img src="" className="h-8  " alt="UrbanBazaar Logo" /> */}
              <h1 className="text-3xl font-bold italic text-gray-600 ">
                ClassConnect
              </h1>
              <span className="text-sm italic text=">A Centralized Platform for Students</span>
            </div>
          </a>
        </div>

        <div className="flex flex-grow justify-end items-center md:order-2 space-x-6 rtl:space-x-reverse relative">
          <div className="relative">
            <button
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
            </button>
            {isDropdownOpen && <Dropdown />}
          </div>
        <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
