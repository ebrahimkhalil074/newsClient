import MiddleCard from "../Card/MiddleCard";
import VideoCard from "../Card/VideoCard";

const LatestVideo = ({title,items}:{title:any,items:any}) => {
    console.log({items})
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-white bg-red-500 text-3xl p-2 m-4 rounded-md">{title}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {
        items?.map((item:any) => <VideoCard key={item.id} item={item} />)
      }
    </div>
    </div>
  );
};

export default LatestVideo;