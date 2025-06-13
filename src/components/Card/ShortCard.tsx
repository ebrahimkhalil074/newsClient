import { Image } from "@heroui/image";
import Link from "next/link";

const ShortCard = ({ data }: any) => {
  return (
    <div className="grid  grid-cols-2 border-2  gap-2 w-full">
      {data?.news?.map((item: any) => (
        <div
          key={item.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full"
        >
          <Link href={`/news/${item.id}`}>
            <div className="cursor-pointer p-4">
              <Image
                height={100}
                width={1000}
                src={item?.image}
                alt="News Image"
                className="w-full rounded"
              />
              <h1 className="mt-3 text-gray-800">
                {item?.title?.slice(0, 50)}...
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShortCard;
