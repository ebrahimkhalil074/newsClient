'use client'
import Filtering from "@/src/components/Filtering";
import Section1 from "@/src/components/news/Section1";
import Slider from "@/src/components/Slider";
import img from "@/src/assets/banner-logo-45db0059.png";
import Section2 from "@/src/components/news/Section2";
import Section3 from "@/src/components/news/Section3";
import Section4 from "@/src/components/news/Section4";
import { useGetAllNews } from "@/src/hooks/news.hook";
import { useGetAllCategory } from "@/src/hooks/categoy.hook";


const NewsPage = () => {
const {data} = useGetAllNews()

const allNews = data?.data?.map((news :any)=> news)
console.log({allNews})
const { data:nData, isLoading } = useGetAllCategory('জাতীয়');
console.log(nData)
  const national = nData?.data ?? [];
  return (
    <div>
        <Filtering />
        <Slider  slideData={allNews}/>
      <Section1 national={national} isLoading={isLoading} />
       <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default NewsPage;