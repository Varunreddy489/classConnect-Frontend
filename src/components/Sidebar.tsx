import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Bell,
  Menu,
  House,
  Inbox,
  Files,
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
// import Profile from "@/pages/Profile";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col top-0 left-0 h-screen bg-gray-50 dark:bg-[#000000] text-gray-950 dark:text-gray-100 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >

      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className={`flex items-center space-x-3 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            <img src={logo} className="h-8" alt="ClassConnect" />
          </a>
        </div>
        {/* Toggle Button */}
        <button onClick={toggleSidebar}>
          <Menu className="size-10 p-1 hover:bg-gray-900 rounded-full" />
        </button>
      </div>

      <div className="flex flex-col w-full  h-screen  border-r ">
        <ul className="flex flex-col space-y-2">
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <House className="ml-4 size-6 " />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <Inbox className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Inbox
              </span>
              <span
                className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                New
              </span>
            </a>
          </li>
          <li>
            <Link
              to="/clubs"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <MessagesSquare className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                All Clubs
              </span>
            </Link>
            <li>
              <Link
                to="/clubs/members"
                className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
              >
                <div>
                  <GraduationCap className="ml-4" />
                </div>
                <span
                  className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                    isCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Club Member
                </span>
              </Link>
            </li>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <Bell className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Notifications
              </span>
              <span
                className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                1.2k
              </span>
            </a>
          </li>
          <Separator className="my-2" />
          <li className="px-5">
            <div className="flex items-center h-8">
              <h1
                className={`tracking-wide text-xl font-bold mb-2 text-center ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Tasks
              </h1>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <ClipboardList className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Available Tasks
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <Files className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Resources (pdf, links, etc)
              </span>
              <span
                className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                15
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <BadgeIndianRupee className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Jobs
              </span>
              <span
                className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                15
              </span>
            </a>
          </li>
          <Separator className="my-2" />
          <li className="px-5">
            <div className="flex items-center h-8">
              <h1
                className={`tracking-wide text-xl font-bold mb-2 text-center ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Settings
              </h1>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <UserRoundPen className="ml-4" />
              </div>
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Profile
              </span>
            </a>
          </li>
          <li>
            <button className="relative flex items-center h-11 w-full hover:bg-gray-900 pr-6 group">
              <Logout />
              <span
                className={`ml-2 text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Logout
              </span>
            </button>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center h-11 hover:bg-gray-900 pr-6 group"
            >
              <div>
                <ModeToggle />
              </div>
              <span
                className={` text-sm tracking-wide truncate transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Toggle theme
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
