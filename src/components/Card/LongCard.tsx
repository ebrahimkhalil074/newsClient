
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";
const LongCard = ({data}:{data:any}) => {
  console.log('long',data)
  return (
    <div>
      <Link href={`/news/${data?.news?.[0]?.id}`}>
      <Card className="py-4">
       
        <CardBody className="overflow-visible h-full w-full py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={data?.news[0]?.image}
           height={200}
    
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{data?.news[0]?.title}</p>
          <small className="text-default-500">{data?.news[0]?.summary}</small>
          <h4 className="font-bold text-large">{data?.news[0]?.content}</h4>
        </CardHeader>
      </Card></Link>
    </div>
  );
};

export default LongCard;
