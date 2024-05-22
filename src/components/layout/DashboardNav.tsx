"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const DashboardNav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-end items-center p-4 shadow-sm border-b bg-gray-100 hove:bg-white">
      <div className="flex gap-3">
        <div className="flex flex-col justify-end">
          <span className="font-bold">Habibur Rahman</span>
          <span className="text-end ">admin</span>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardNav;
