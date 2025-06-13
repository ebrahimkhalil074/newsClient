import Marquee from "react-fast-marquee";
import { FaRegNewspaper } from "react-icons/fa";

type NewsItem = {
  title: string;
};

interface MarqueProps {
  data: NewsItem[];
  title: string;
}

export default function Marque({ data, title }: MarqueProps) {
  return (
    <div className="flex items-center bg-red-100 text-red-800 py-2 px-4 border-b border-red-300">
      {/* Fixed label */}
      <div className="flex items-center shrink-0 font-semibold mr-4 whitespace-nowrap">
        <FaRegNewspaper className="mr-2 text-red-500" />
        {title}:
      </div>

      {/* Scrolling text */}
      <div className="flex-1 overflow-hidden">
        <Marquee pauseOnHover gradient={false} speed={50}>
          {data?.map((item, index) => (
            <span key={index} className="mx-6">
              {item.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
