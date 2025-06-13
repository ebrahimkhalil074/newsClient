// /* eslint-disable prettier/prettier */
// "use client";

// import { useState } from "react";
// import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
// import Link from "next/link";

// const menuItems = [
//   { name: "প্রচ্ছদ" },
//   {
//     name: "নিউজ",
//     dropdown: ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি"],
//   },
//   {
//     name: "অর্থনীতি",
//     dropdown: ["শেয়ার বাজার", "ব্যবসা-বাণিজ্য"],
//   },
//   {
//     name: "জাতীয়",
//     dropdown: ["সরকার", "সংসদ", "প্রশাসন"],
//   },
//   { name: "আন্তর্জাতিক" },
//   { name: "খেলা" },
//   { name: "কৃষি" },
//   { name: "আবহাওয়া" },
//   { name: "বিনোদন" },
//   { name: "শিক্ষা ও বিজ্ঞান" },
//   { name: "স্বাস্থ্য সংবাদ" },
//   { name: "প্রযুক্তি" },
//   { name: "ধর্ম" },
// ];

// export default function Filtering() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (name: string) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <header className="bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-2 items-center">
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative group">
//               <button
//                 className="flex items-center w-full text-left  hover:bg-red-500 py-2 px-1 rounded-md text-gray-800"
//                 onClick={() =>
//                   item.dropdown &&
//                   setOpenDropdown((prev) =>
//                     prev === item.name ? null : item.name,
//                   )
//                 }
//               >
//                 <span>{item.name}</span>
//                 {item.dropdown && <FiChevronDown className="ml-1 w-4 h-4" />}
//               </button>

//               {item.dropdown && openDropdown === item.name && (
//                 <div className="absolute left-0 top-full bg-white border rounded-md shadow-md mt-1 z-10 min-w-[160px]">
//                   {item.dropdown.map((subItem) => (
//                     <Link
//                       key={subItem}
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       href={`/news/category/${(subItem)}`}
//                     >
//                       {subItem}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button (Right Side) */}
//         <button
//           className="lg:hidden text-gray-700 ml-auto"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden px-4 py-2 space-y-2">
//           {menuItems.map((item) => (
//             <div key={item.name} className="border-b pb-2">
//               <button
//                 className="flex justify-between items-center w-full text-left text-gray-700 font-medium focus:outline-none"
//                 type="button"
//                 onClick={() => item.dropdown && toggleDropdown(item.name)}
//               >
//                 <span>{item.name}</span>
//                 {item.dropdown && <FiChevronDown className="w-4 h-4" />}
//               </button>

//               {item.dropdown && openDropdown === item.name && (
//                 <div className="mt-2 ml-4 space-y-1">
//                   {item.dropdown.map((sub) => (
//                     <Link
//                       key={sub}
//                       className="block text-gray-600 hover:text-blue-600"
//                       href={`/news/category/${encodeURIComponent(sub)}`}
//                     >
//                       {sub}
//                     </Link>
//                   ))}
//                 </div>
//               )}

//               {!item.dropdown && (
//                 <Link
//                   className="block mt-2 ml-2 text-sm text-gray-600 hover:text-blue-600"
//                   href={`/news/category/${encodeURIComponent(item.name)}`}
//                 >
//                   দেখুন
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const menuItems = [
  { name: "প্রচ্ছদ" },
  {
    name: "নিউজ",
    dropdown: ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি"],
  },
  {
    name: "অর্থনীতি",
    dropdown: ["শেয়ার বাজার", "ব্যবসা-বাণিজ্য"],
  },
  {
    name: "জাতীয়",
    dropdown: ["সরকার", "সংসদ", "প্রশাসন"],
  },
  { name: "আন্তর্জাতিক" },
  { name: "খেলা" },
  { name: "কৃষি" },
  { name: "আবহাওয়া" },
  { name: "বিনোদন" },
  { name: "শিক্ষা ও বিজ্ঞান" },
  { name: "স্বাস্থ্য সংবাদ" },
  { name: "প্রযুক্তি" },
  { name: "ধর্ম" },
];

export default function Filtering() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white border-b shadow-sm mb-4">
      <div className=" mx-auto px-4 flex justify-between items-center ">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-2 items-center">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <button
                className="flex items-center w-full text-left hover:bg-red-500 py-2 px-2 rounded-md text-gray-800"
                onClick={() =>
                  item.dropdown &&
                  setOpenDropdown((prev) =>
                    prev === item.name ? null : item.name
                  )
                }
              >
                <span>{item.name}</span>
                {item.dropdown && <FiChevronDown className="ml-1 w-4 h-4" />}
              </button>

              {item.dropdown && openDropdown === item.name && (
                <div className="absolute left-0 top-full bg-white border rounded-md shadow-md mt-1 z-10 min-w-[160px]">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={`/news/category/${encodeURIComponent(subItem)}`}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
              {!item.dropdown && (
                <Link
                  className="absolute inset-0 z-0"
                  href={`/news/category/${(item.name)}`}
                >
                  <span className="sr-only">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b pb-2">
              {item.dropdown ? (
                <>
                  <button
                    className="flex justify-between items-center w-full text-left text-gray-700 font-medium focus:outline-none"
                    type="button"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <FiChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub}
                          className="block text-gray-600 hover:text-blue-600"
                          href={`/news/category/${encodeURIComponent(sub)}`}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className="block text-gray-700 font-medium py-2"
                  href={`/news/category/${encodeURIComponent(item.name)}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
