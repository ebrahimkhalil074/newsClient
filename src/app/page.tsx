'use client'
import CategorySection from "../components/CategorySection";
import Banner from "../components/home/Banner";
import LatestNews from "../components/home/LatestNews";
import LatestVideo from "../components/home/LatestVideo";
import Marque from "../components/home/Marque";
import { LatestNewsSkeleton } from "../components/Skeleton/LatestNewsSkeleton";
import { LatestVideoSkeleton } from "../components/Skeleton/LatestVideoSkeleton";
import { useGetAllNews } from "../hooks/news.hook";
import { useGetAllVideos } from "../hooks/video.hook";

export default function Home() {
   const {data:newsData,isError,isLoading:newsLoading} =useGetAllNews();
   console.log(newsData)
   const {data:videoData,isError:videoError,isLoading:videoLoading} =useGetAllVideos();
   
  const news = newsData?.data 
  const video = videoData?.data 
  
  console.log(video)
   
  return (
    <section className=" container mx-auto flex flex-col  gap-4 ">
     
<Banner />
<Marque title="সর্বশেষ সংবাদ " data={news}/>

{newsLoading ? (
  <LatestNewsSkeleton />
) : (
  <LatestNews data={news} />
)}

{videoLoading ? (
  <LatestVideoSkeleton />
) : (
  <LatestVideo title="সর্বশেষ ভিডিও" items={video} />
)}
    </section>
  );
}
