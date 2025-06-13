// 'use client'
// import {
//   Navbar as HeroUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { Button } from "@heroui/button";
// import { Kbd } from "@heroui/kbd";
// import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
// import { link as linkStyles } from "@heroui/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "../config/site";
// import { ThemeSwitch } from "./theme-switch";
// import { Logo, SearchIcon } from "./icons";
// import { usePathname } from "next/navigation";

// export const Navbar = () => {
//   const pathname = usePathname()
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       endContent={
//         <Kbd className="hidden lg:inline-block" keys={["command"]}>
//           K
//         </Kbd>
//       }
//       labelPlacement="outside"
//       placeholder="Search..."
//       startContent={
//         <SearchIcon className="text-base  text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//     />
//   );

//   return (
//     <HeroUINavbar className = "flex  border-2 border-red-500" maxWidth="xl" position="sticky">
//       <NavbarContent className="w-full border-2 border-red-500 felx-1" >
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-evenly  items-center gap-1" href="/">
//             <Logo />
//             <p className="font-bold text-inherit">ACME</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden lg:flex gap-4 justify-evenly ml-2">
//           {siteConfig.navItems.map((item) => {
//             const isActive = pathname === item.href
//             return (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   isActive
//                   ? "bg-green-500"
//                   : "bg-red-500 hover:bg-red-600",
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//             )

// })}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
        
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <ThemeSwitch />
//         </NavbarItem>
//         <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
    
//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </HeroUINavbar>
//   );
// };


"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { SearchIcon } from "@/src/components/icons";
import Logo from "@/src/assets/footer-logo-4d56d219.png";
import Image from "next/image";
import { useUser } from "../context/user.context";
import NavbarDropdown from "./NavbarDropdown";
// import { useCustomSession } from "../context/sessonContext";


export const Navbar = () => {
  const pathname = usePathname();
  // const { session, status } = useCustomSession();
  const {user} =useUser()
console.log(
  user
)
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Left Logo & Nav Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image width={50} height={50} alt="logo" src={Logo.src} />
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "px-4 py-2 rounded-md text-white transition",
                    isActive
                      ? "bg-green-500"
                      : "bg-red-500 hover:bg-red-600"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      {/* Desktop Search + Theme + Auth */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          {user?.email ? (
             <NavbarDropdown />
            
          ) : (
            <Link href="/login">Login</Link>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {searchInput}

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* Navigation links */}
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 rounded-md text-white block",
                    isActive
                      ? "bg-green-500"
                      : "bg-red-500 hover:bg-red-600"
                  )}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}

          {/* Divider */}
          <hr className="my-2 border-default-300" />

          {/* Mobile auth controls */}
          {user?.email ? (
            <>
              <NavbarMenuItem>
                <Link
                  href="/dashboard"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white block"
                >
                  Dashbord
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  href="/logout"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white block"
                >
                  LogOut
                </Link>
              </NavbarMenuItem>
            </>
          ) : (
            <NavbarMenuItem>
              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white block"
              >
                Login
              </Link>
            </NavbarMenuItem>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
