
import {Card, CardFooter, Image,  } from "@heroui/react";
import Link from "next/link";
const ImageCard = ({data}:any) => {
  return (
    <div>
      {data?.news?.map((item: any) => (
        <div key={item.id}>
          <Link href={`/news/${item.id}`} >
     <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={item?.image}
        height={180}
        width={1000}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-left text-white">{item?.title?.slice(0,100)}</p>
      </CardFooter>
    </Card></Link>
        </div>
      ))}
     
    </div>
  );
};

export default ImageCard;