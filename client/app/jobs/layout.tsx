import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "job portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` flex flex-col items-center`}>
      <div className=" px-4 container w-full sm:w-[90%] mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
