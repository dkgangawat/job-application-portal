"use client";

import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className=" flex items-center justify-center py-4 text-gray-1 relative font-bold border-b">
      <div className=" container flex items-center justify-between">
        <div className="flex items-center">
          {/* mobile menu */}
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden"
            >
              <svg
                className="w-6 h-6 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <div
              className={`absolute top-16 sm:hidden left-0 w-full bg-white shadow-lg rounded-lg p-4 ${
                isMobileMenuOpen ? "" : "hidden"
              }`}
            >
              <Link href="#" className="block py-2 hover:text-black">
                Feed
              </Link>
              <Link href="#" className="block py-2 hover:text-black">
                Contacts
              </Link>
              <Link href="/jobs" className="block py-2 hover:text-black">
                Jobs
              </Link>
              <Link href="#" className="block py-2 hover:text-black">
                Messages
              </Link>
              <Link href="#" className="block py-2 hover:text-black">
                Updates
              </Link>

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
            <Link href="#" className=" hover:text-black">
              Feed
            </Link>
            <Link href="#" className=" hover:text-black">
              Contacts
            </Link>
            <Link href="/jobs" className=" hover:text-black">
              Jobs
            </Link>
            <Link href="#" className=" hover:text-black">
              Messages
            </Link>
            <Link href="#" className=" hover:text-black">
              Updates
            </Link>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            {/* notification Dropdown */}
            <div
              className={`absolute right-0 top-8 mt-2 py-2 flex flex-col bg-white rounded shadow-lg w-[350px] min-h-[400px] ${
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
          <div className="ml-2">
            <ul
              className={`absolute right-0 top-8 mt-2 py-2 bg-white rounded shadow-lg ${
                isOpen ? "" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
