 
// 'use client'
// import { Image } from "@heroui/image";
// import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";


// import LongCard from "../Card/LongCard";
// import ShortCard from "../Card/ShortCard";

// import img from "@/src/assets/banner-logo-45db0059.png";
// import Somoy from "../Somoy";
// import Tag from "../Tag";
// import Slider2 from "../Slider2";
// import { useGetAllNews } from "@/src/hooks/news.hook";
// import { useGetAllCategory } from "@/src/hooks/categoy.hook";


// const Section1 = () => {
 
// const {data} = useGetAllCategory('জাতীয়')

// const national = data?.data?.map((news :any)=> news)
// console.log('national',{national})
//   return (
//     <div className="grid grid-cols-12 gap-4 p-4 ">
//       {/* First Div - 25% */}
//       <div className="col-span-12 lg:col-span-3">
//         <div className="bg-red-600 inline-block text-white px-4 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
//         <div className="border-t-2 border-red-600 " />
        
//         <div className="h-[150px] border-2 p-2 mt-2">
//           <Somoy />
//         </div>

//         <div className="w-full mt-4">
//           <Slider2 />
//         </div>
//       </div>

//       {/* Middle Div - 50% */}
//       <div className="col-span-12 lg:col-span-6 ">
//         <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
//         <div className="border-t-2 border-red-600 " />

//         <div className="my-4">
//           <Image src={img.src} />
//         </div>

//         <div className="mb-2">
//          <Tag tag='জাতীয়'/>
//         </div>

//         {/* Content Grid */}
//         <div className="flex flex-col lg:flex-row gap-2">
//           <div className="flex-1 h-[350px]">
//            {national?.slice(0,1).map((item) => (
//                 <LongCard key={item.id} data={item} />
//               ))}
//           </div>
//           <div className="flex-1 h-[350px]">
//             <div className="grid grid-cols-2 gap-2 ">
//               {national?.slice(0,4)?.map((item) => (
//                 <ShortCard key={item.id} data={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Last Div - 25% */}
//       <div className="col-span-12 lg:col-span-3">
//       <Tag tag='সামাজিক মিডিয়া'/>
//        <div className="flex  gap-6 mt-4 text-3xl text-gray-700">
//               <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
//                 <FaTwitter className="hover:text-blue-500 transition duration-200" />
//               </a>
//               <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank">
//                 <FaInstagram className="hover:text-pink-500 transition duration-200" />
//               </a>
//               <a href="https://wa.me/" rel="noopener noreferrer" target="_blank">
//                 <FaGithub className="hover:text-green-500 transition duration-200" />
//               </a>
//                <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
//                         <FaFacebookF className="hover:text-blue-700 transition duration-200" />
//                       </a>
//                       <a href="https://youtube.com/" rel="noopener noreferrer" target="_blank">
//                         <FaYoutube className="hover:text-red-600 transition duration-200" />
//                       </a>
//                       <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank">
//                         <FaLinkedinIn className="hover:text-blue-600 transition duration-200" />
//                       </a>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default Section1;

'use client'
import { Image } from "@heroui/image";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";

import img from "@/src/assets/banner-logo-45db0059.png";
import Somoy from "../Somoy";
import Tag from "../Tag";
import Slider2 from "../Slider2";

const SkeletonBox = ({ height = "h-[150px]" }: { height?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${height}`}></div>
);

const Section1 = ({national,isLoading}:{national:any,isLoading:any}) => {
  
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Left Sidebar */}
      <div className="col-span-12 lg:col-span-3">
        <div className="bg-red-600 inline-block text-white px-4 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
        <div className="border-t-2 border-red-600 " />

        <div className="h-[150px] border-2 p-2 mt-2">
          <Somoy />
        </div>

        <div className="w-full mt-4">
          <Slider2 />
        </div>
      </div>

      {/* Middle Content */}
      <div className="col-span-12 lg:col-span-6">
        <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
        <div className="border-t-2 border-red-600 " />

        <div className="my-4">
          <Image src={img.src} />
        </div>

        <div className="mb-2">
          <Tag tag='জাতীয়' />
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex-1 h-[350px]">
            {isLoading ? (
              <SkeletonBox height="h-[350px]" />
            ) : (
              national.length > 0 && <LongCard key={national[0].id} data={national[0]} />
            )}
          </div>

          <div className="flex-1 h-[350px]">
            <div className="">
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <SkeletonBox key={i} height="h-[150px]" />
                  ))
                : national?.slice().map((item:any) => (
                    <ShortCard key={item.id} data={item} />
                  ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-12 lg:col-span-3">
        <Tag tag='সামাজিক মিডিয়া' />
        <div className="flex gap-6 mt-4 text-3xl text-gray-700">
          <a href="https://twitter.com/" target="_blank" rel="fg noreferrer"><FaTwitter className="hover:text-blue-500 transition duration-200" /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-pink-500 transition duration-200" /></a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer"><FaGithub className="hover:text-green-500 transition duration-200" /></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF className="hover:text-blue-700 transition duration-200" /></a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer"><FaYoutube className="hover:text-red-600 transition duration-200" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn className="hover:text-blue-600 transition duration-200" /></a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
