import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const MiddleCard = ({ data }: any) => {
  if (!data) return null;

  return (
    <>
      {data?.news?.map((item: any) => (
        <div key={item.id} className="p-3">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <Link href={`/news/${item.id}`}>
              <div className="space-y-3">
                {/* Image */}
                <Image
                  className="w-full h-[150px] object-cover border-b-4 border-red-500"
                  width={1000}
                  src={item?.image}
                  alt={item?.title || "News Image"}
                />

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    <span className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-md mr-2">
                      শিরোনাম
                    </span>
                    {item?.title?.slice(0, 40)}...
                  </h2>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-md mr-2">
                      তারিখ
                    </span>
                    {item?.createdAt?.slice(0, 10)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default MiddleCard;
