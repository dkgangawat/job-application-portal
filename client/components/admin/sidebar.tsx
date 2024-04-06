'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`flex flex-col w-64 ${isSidebarOpen ? 'block' : 'hidden'} border-r hidden sm:block`}>
    <div className="flex items-center h-14 border-b border px-4">
        <Image src="/logo.png   " width={50} height={50} alt="logo" />
    </div>
    <nav className="flex-1 overflow-y-auto  font-bold">
      <Link href="/admin/dashboard" className="block py-2 px-4  text-gray-2 border-b  hover:bg-gray-3">Dashboard</Link>
      <Link href="#" className="block py-2 px-4  text-gray-2 border-b  hover:bg-gray-3">Projects</Link>
      <Link href="#" className="block py-2 px-4  text-gray-2 border-b  hover:bg-gray-3">Settings</Link>
      <Link href="#" className="block py-2 px-4  text-gray-2 border-b  hover:bg-gray-3">Logout</Link>
    </nav>
  </div>
  )
}

export default SideBar