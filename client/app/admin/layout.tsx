import SideBar from "@/components/admin/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "admin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
        
    <div className="flex h-screen">
      <SideBar />
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <div>Admin Dashboard</div>
        <div>Profile</div>
      </div>
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    </div>
  </div>
  );
}