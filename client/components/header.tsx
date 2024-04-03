"use client";

import Link from "next/link";
import React from "react";

type headerLinks = {
  title: string;
  url: string;
};

const headerLinks: headerLinks[] = [
  { title: "Feed", url: "#" },
  { title: "Contacts", url: "#" },
  { title: "Jobs", url: "/jobs" },
  { title: "Messages", url: "#" },
  { title: "Updates", url: "#" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className=" flex items-center justify-center  py-4 text-gray-1 relative font-bold border-b">
      <div className=" container flex items-center justify-between">
        <div className="flex items-center">
          {/* mobile menu */}
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden"
            >
              <img src="hamburger.svg" alt="menu" className="w-6 h-6" />
            </button>

            <div
              className={`absolute top-16 sm:hidden left-0 w-full z-10 bg-white shadow-lg rounded-lg p-4 ${
                isMobileMenuOpen ? "" : "hidden"
              }`}
            >
              {headerLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="block py-2 hover:text-black"
                >
                  {link.title}
                </Link>
              ))}

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Create Post
                </button>
              </div>
            </div>
          </div>

          <img src="logo.png" alt="logo" className="w-8 h-8 rounded-full" />
          <div className="ml-4 space-x-4 hidden sm:block">
            {headerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="py-2 hover:text-black"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center relative ">
          <button
            className="font-bold mr-4"
            onClick={() => {
              setIsNotificationOpen(!isNotificationOpen);
              setIsOpen(false);
            }}
          >
            <img src="bell.svg" alt="Notification" className="w-6 h-6" />
            {/* notification Dropdown */}
            <div
              className={`absolute z-10  right-0 top-8 mt-2 py-2 flex flex-col bg-white rounded shadow-lg w-[350px] min-h-[400px] ${
                isNotificationOpen ? "" : "hidden"
              }`}
            >
              <div className="flex flex-1 items-center w-full h-full justify-center">
                <p className="text-gray-1">No Notifications Yet!</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsNotificationOpen(false);
            }}
          >
            <img
              src="avatar.jpg"
              alt="Profile Photo"
              className="w-8 h-8 rounded-full"
            />
          </button>
          <div
            className={`absolute right-0 top-8  mt-2 py-2 w-[200px] bg-white rounded shadow-lg z-10 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <h3 className="text-gray-1 text-center py-2 border-b">John Doe</h3>
            <ul>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
