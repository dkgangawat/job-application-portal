import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Bookings support",
    links: [
      { title: "COVID-19", url: "#" },
      { title: "Help Center", url: "#" },
      { title: "Support", url: "#" },
      { title: "Trust & Safety", url: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Against Discrimination", url: "#" },
      { title: "Invite friends", url: "#" },
      { title: "Gift cards", url: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "How it works", url: "#" },
      { title: "Careers", url: "#" },
      { title: "About us", url: "#" },
      { title: "Media", url: "#" },
    ],
  },
  {
    title: "Become an employer",
    links: [
      { title: "Post your job", url: "#" },
      { title: "Business account", url: "#" },
      { title: "Resource Center", url: "#" },
      { title: "Community", url: "#" },
    ],
  },
];
const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-10">
      <div className=" py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b pb-4">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-base text-gray-2   hover:text-gray-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2"></div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              © 2021 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
