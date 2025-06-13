import { Button } from "@heroui/button";
import Link from "next/link";

const VideoCard = ({item}:{item:any} ) => {
console.log({item})
  return (

<div className="border-1 shadow-md bg-red-600 ">

    <div className="h-[240px] relative ">
       
          <iframe
            allowFullScreen
            className="w-full h-full rounded"
            src={item?.videoUrl}
            title={item?.title}
          />
      <Link className=" absolute bottom-3 right-0" href={`/video/${item.id}`}><Button className="bg-red-500 text-white">বিস্তারিত দেখুন</Button></Link>
        </div>
      
 
</div>
  );
};

export default VideoCard;