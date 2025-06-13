"use client";


import VideoDetails from "@/src/components/VideoDetails";
import { useGetAllNews, useGetNews } from "@/src/hooks/news.hook";
import { useGetAllVideos, useGetVideos } from "@/src/hooks/video.hook";
import { useParams } from "next/navigation";

const VideoDetailsPage = () => {
  const params = useParams();
  const id = params?.id?.toString() || "";
  const {data} =useGetVideos(id);
const video =data?.data
const {data:videoData,isError,isLoading} =useGetAllVideos();
   if (isLoading) {
    return <h1>loding...</h1>
   }
  const allVideos = videoData?.data 
  console.log({allVideos})
  return (
    <div className="container mx-auto">
      <VideoDetails data={video} allVideos ={allVideos} />
    </div>
  );
};

export default VideoDetailsPage;