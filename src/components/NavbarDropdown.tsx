import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { useUser } from "../context/user.context";
import { Avatar } from "@heroui/avatar";
import { FaList } from "react-icons/fa6";

const NavbarDropdown = () => {
  const router = useRouter();
  const {user} =useUser()

  // লগআউট ফাংশন
  const handleLogout = async () => {
    console.log("লগআউট হচ্ছে...");
    // await signOut({ callbackUrl: "/" }); // লগআউটের পর হোম পেজে নিয়ে যাবে
  };

  // নেভিগেশন ফাংশন
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  // মেনু আইটেমগুলো আলাদাভাবে বানানো হচ্ছে
  const menuItems = [];

  if (user?.email) {
    menuItems.push(
      <DropdownItem key="/dashboard" onClick={() => handleNavigation("/admin")}>
        ড্যাশবোর্ড
      </DropdownItem>
    );
  }

  // সবার জন্য লগআউট আইটেম
  menuItems.push(
    <DropdownItem
      key="delete"
      onClick={handleLogout}
      className="text-danger"
      color="danger"
    >
      লগআউট
    </DropdownItem>
  );

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
            <FaList />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Menu" disabledKeys={["edit"]}>
          {menuItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
