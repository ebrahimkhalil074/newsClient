
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SmallCard = ({data}:any) => {
  return (
    <div>
      <Link href={`/news/${data.id}`}>
      <div className="flex justify-between items-center border-b-2 border-red-500 p-1 rounded-md">
        <h1 className="font-bold text-small">{data.title}</h1>
       <div className="text-red-500">
       <FaArrowRight size={20} />
       </div>
      </div>
      </Link>
    </div>
  );
};

export default SmallCard;