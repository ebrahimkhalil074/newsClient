
'use client'
import FlexCard from "@/src/components/Card/FlexCard";
import SmallCard from "@/src/components/Card/SmallCard";
import Slider2 from "@/src/components/Slider2";
import Tag from "@/src/components/Tag";
import {  Button, Image } from "@heroui/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import add2 from "@/src/assets/add2.jpg"
import MiddleCard from "@/src/components/Card/MiddleCard";
import { useGetAllCategory } from "@/src/hooks/categoy.hook";
import { useGetAllNews } from "@/src/hooks/news.hook";
import Filtering from "@/src/components/Filtering";
import noDataImg from "./../../../../../assets/3024051.jpg"
const Page = () => {
  const {category} =useParams()
  const { data:daynamic, isLoading } = useGetAllCategory(category);
console.log(daynamic)
  const daynamicData = daynamic?.data ?? [];
  const { data:allNews,  } = useGetAllNews();
console.log(allNews)
  const allNewsData = allNews?.data ?? [];

  console.log(allNewsData)
const [active, setActive] = useState('সর্বশেষ');
  const filteredData =
  active === 'সর্বশেষ'
    ? [...allNewsData].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // সর্বশেষ
    : [...allNewsData].sort((a, b) => b.likes.length - a.likes.length); // জনপ্রিয়
    console.log({filteredData})
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
     <Filtering />
      </div>
   <div className="col-span-12">
   <Tag tag={decodeURIComponent(category as string)} />
   </div>
  
    {/* Image Section */}
    {daynamicData.length > 0?<div className="col-span-12 lg:col-span-8">
      <div className="relative w-full  rounded overflow-hidden">
        <Image
          src={daynamicData[1]?.image}
          alt={daynamicData[1]?.title}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 z-10">
          <h1 className="text-lg font-semibold text-center">{daynamicData[1]?.title}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {
          daynamicData.map((item:any) => <FlexCard key={item.id} data={item}/>)
        }
      </div>
      {/* add */}
<div>
  <Image width={1000} src={add2.src} />
</div>
{/*  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        {
        daynamicData.map((item:any) => <MiddleCard key={item.id} data={item}/>)
        }
      </div>
    </div>:<div className="col-span-12 lg:col-span-8">
      <h1>NO DATA THIS CATEGORY {`${decodeURIComponent(category as string)}`}</h1>
      <Image height={500} width={1000} src={noDataImg.src}/>

    </div>
  }
    {/* Right Section */}
    <div className="col-span-12 lg:col-span-4">
    <div className="col-span-12">
   <Tag tag='সর্বাধিক পঠিত'/>
   </div>
    <div className="grid grid-cols-1 gap-4 mt-4 ">
             {daynamicData.map((item:any) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
<div className="my-4 mr-8">
  <Slider2 />
</div>

<div className="flex justify-evenly items-center">
      <Button
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'সর্বশেষ' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('সর্বশেষ')}
      >
        সর্বশেষ
      </Button>

     
      <Button
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'জনপ্রিয়' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('জনপ্রিয়')}
      >
        জনপ্রিয়
      </Button>
    </div>
    <div className="flex flex-col gap-4">
   {
      filteredData?.slice(0,10).map(item => <SmallCard key={item.id} data={item}/>)
    }
   </div>


    </div>
  </div>
  
  );
};

export default Page;