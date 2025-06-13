
import { Image } from "@heroui/image";
 import Link from "next/link";

 const NFlexCard = ({item}:any) => {
   console.log({item})
   return (
     <div className=" shadow-md bg-white p-2  rounded-md  transition-all duration-300  hover:scale-105 hover:shadow-xl">
 
          <Link href={`/news/${item?.id}`}>
     <div className="flex ">
     <div className="flex-1">
         <Image height={100} width={1000} src={item?.image}/>
      </div>
       <div className="flex-1">
         <h1>{item?.title}</h1>
       </div>
     </div>
     </Link>
     </div>
   );
 };

 export default NFlexCard;