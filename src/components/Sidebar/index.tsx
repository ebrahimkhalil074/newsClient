"use client";

import Link from "next/link";
import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useUser } from "@/src/context/user.context";
// import { useUser } from "@/src/context/user.context";
// import { useUser } from "@/src/context/user.context";

const Sidebar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={user?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
