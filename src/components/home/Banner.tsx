


// "use client";

// import { useState } from "react";

// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';
// import bannerImg from "@/src/assets/banner-logo-45db0059.png";
// import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";
// import { Image } from "@heroui/image";

// const Banner = () => {
//   const [showScanner, setShowScanner] = useState(false);

//   return (
//     <div className="bg-red-500 to-white flex items-center justify-center relative h-[200px] ">
//       {/* Banner Image */}
//       <div className="">
//         <Image alt="Hero Image" src={bannerImg.src} width={800} height={200} />
//       </div>

//           <div className="flex flex-col justify-center gap-4 p-2 text-1xl  bg-gradient-to-t from-white via-red-600 to-white shadow-lg absolute right-0 z-20">
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="hover:text-blue-500 transition duration-200" />
//             </a>
//             <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="hover:text-pink-500 transition duration-200" />
//             </a>
//             <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//               <FaGithub className="hover:text-black transition duration-200" />
//             </a>
//             <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF className="hover:text-blue-700 transition duration-200" />
//             </a>
//             <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
//               <FaYoutube className="hover:text-red-600 transition duration-200" />
//             </a>
//             <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn className="hover:text-blue-600 transition duration-200" />
//             </a>
//           </div>

//     </div>
//   );
// };

// export default Banner;

"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import bannerImg from "@/src/assets/banner-logo-45db0059.png";
import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";
import { Image } from "@heroui/image";

const Banner = () => {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative h-auto md:h-auto bg-red-500">
      {/* Banner Image */}
      <div className="p-4">
        <Image
          alt="Hero Image"
          src={bannerImg.src}
          width={1000}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Social Icons */}
      <div className="flex flex-row md:flex-col justify-center items-center gap-4 p-2 text-xl bg-white shadow-lg md:absolute md:right-1 rounded-lg  md:top-1/2 md:-translate-y-1/2 md:z-20">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-500 transition duration-200" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition duration-200" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition duration-200" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="hover:text-blue-700 transition duration-200" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600 transition duration-200" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-blue-600 transition duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
