import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Bell,
  House,
  Inbox,
  Files,
  Users,
  StepBack,
  StepForward,
  UserRoundPen,
  GraduationCap,
  ClipboardList,
  MessagesSquare,
  BadgeIndianRupee,
} from "lucide-react";
import { useState } from "react";
import logo from "/logo-no-background.svg";
import { ModeToggle } from "./ui/mode-toggle";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleMode = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="flex flex-col h-screen top-10 left-0 antialiased bg-gray-50 dark:bg-[#000000] text-gray-950 dark:text-gray-100">
      <div className="flex m-2 mb-10  ">
        {/*   logo */}
        <div className="p-4 flex items-center flex-shrink-0">
          <a href="/" className="flex items-center space-x-3">
            <div className="ml-4">
              <img src={logo} className="h-8" alt="ClassConnect" />
            </div>
          </a>
        </div>
        <div className="mt-4">
          <button onClick={toggleMode}>
            {toggleMenu ? (
              <StepBack className="size-10 p-1 hover:bg-gray-900 rounded-full" />
            ) : (
              <StepForward className="size-10 p-1 hover:bg-gray-900 rounded-full" />
            )}
          </button>
        </div>
      </div>
      <div className="fixed flex flex-col w-64 h-full border-r">
        {/* Scrollable Section */}
        <div className="overflow-y-auto flex-grow">
          <ul className="flex flex-col">
            <li className="px-5 mt-10 ">
              <div className="flex flex-row items-center h-8"></div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <House />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <Inbox />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Inbox
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </a>
            </li>
            <li>
              <Link
                to="/clubs"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MessagesSquare />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Clubs
                </span>
              </Link>
              <ul className="pl-6">
                {" "}
                {/* Indent for sub-routes */}
                <li>
                  <Link
                    to="/clubs/members"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <GraduationCap />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Club Member
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clubs/all"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <Users />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      All Clubs
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <Bell />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Notifications
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </a>
            </li>
            <Separator className="my-2" />
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <h1 className="tracking-wide text-xl font-bold mb-2 text-center">
                  Tasks
                </h1>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ClipboardList />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Available Tasks
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <Files />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Resources ( pdf ,links etc )
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BadgeIndianRupee />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Jobs
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span>
              </a>
            </li>
            <Separator className="my-2" />

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <h1 className="tracking-wide text-xl font-bold mb-2 text-center">
                  Settings
                </h1>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <UserRoundPen />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </a>
            </li>

            <li>
              <Logout />
            </li>

            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ModeToggle />
                  Toggle theme
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
