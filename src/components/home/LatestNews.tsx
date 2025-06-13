import MiddleCard from "../Card/MiddleCard";
import NMiddleCard from "../Card/NmiddleCard";

const LatestNews = ({data}:{data:any}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-white bg-red-500 text-3xl p-2 rounded-md">সর্বশেষ সংবাদ</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {
        data?.map((item:any) => <NMiddleCard key={item.id} data={item} />)
      }
    </div>
    </div>
  );
};

export default LatestNews;