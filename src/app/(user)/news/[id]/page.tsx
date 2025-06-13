"use client";

import NewsDetails from "@/src/components/NewsDetails";
import { useGetAllNews, useGetNews } from "@/src/hooks/news.hook";
import { useParams } from "next/navigation";

const NewsDetailsPage = () => {
  const params = useParams();
  const id = params?.id?.toString() || "";
  const {data} =useGetNews(id);
const news =data?.data
const {data:newsData,isError,isLoading} =useGetAllNews();
   if (isLoading) {
    return <h1>loding...</h1>
   }
  const allNews = newsData?.data 
  console.log({allNews})
  return (
    <div>
      <NewsDetails data={news} allNews ={allNews} />
    </div>
  );
};

export default NewsDetailsPage;