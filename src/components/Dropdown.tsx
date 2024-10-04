import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";

const data = localStorage.getItem("user");
const userData = data ? JSON.parse(data) : null;

const Dropdown = () => {
  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dark:bg-gray-700 overflow-auto"
      id="user-dropdown"
    >
      <div className="px-4 space-y-2 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          {userData?.name}
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          {userData?.email}
        </span>
      </div>

      <ul className="py-2" aria-labelledby="user-menu-button">
        {/* ORDERS */}
        <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 gap-2 dark:hover:text-white">
          <p>
            <FaShippingFast className="w-5 h-5" />
          </p>
          <Link to="/orders" className="block">
            Orders
          </Link>
        </li>
        {/* Settings */}
        <li className=" flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 gap-2 dark:hover:text-white  ">
          <p>
            <CiSettings className="w-6 h-6" />
          </p>
          <Link to="/settings" className=" ">
            Settings
          </Link>
        </li>

        {/* Profile */}
        <li
          className=" flex items-center
         px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 gap-2 dark:hover:text-white  "
        >
          <p>
            <CgProfile className="w-5 h-5" />
          </p>
          <Link to="/profile" className=" ">
            Profile
          </Link>
        </li>
        {/* Logout */}
        <li>
          <a
            href="#"
            className=" flex items-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
