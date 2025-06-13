 
'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import ImageCard from "../Card/ImageCard";
import FlexCard from "../Card/FlexCard";

import img from "@/src/assets/banner-logo-45db0059.png";
import { useGetAllCategory } from "@/src/hooks/categoy.hook";
import NflexCard from "../Card/NflexCard";
import NShortCard from "../Card/NShortCard";

const Section2 = () => {
  const { data:crimeData, isLoading } = useGetAllCategory('অপরাধ');

    const crime = crimeData?.data ?? [];
    console.log('crime',crime)
  const { data:internationalData, isLoading:iIsLoading } = useGetAllCategory('আন্তর্জাতিক');

    const international = internationalData?.data ?? [];
   
 console.log({international})

  return (
    <div className="grid grid-cols-12 gap-4 p-4 ">
      
      {/* frist Div - 50% */}
     
      <div className="col-span-12 lg:col-span-6 ">
      <Tag tag='অপরাধ'/>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
         <div className="flex-1">
          <div className="grid grid-cols-1 gap-4">
            {
              crime?.slice(0,3).map((item:any) =><ImageCard key={item.id} data={item}/>)
            }
          </div>
      
         </div>
         <div className="flex-1">
           <div className="grid grid-cols-1 gap-2 ">
             {crime?.map((item:any) => (
               <ShortCard key={item.id} data={item} />
             ))}
           </div>
         </div>
       </div>
      </div>
    {/* Last Div - 50% */}
      <div className="col-span-12 lg:col-span-6 p-2">
       
       <div className="mb-2">
        <Tag tag='আন্তর্জাতিক'/>
       </div>

       {/* Content Grid */}
       <div className="flex flex-col lg:flex-row gap-2">
         <div className="flex-1">
       {  international.length > 0 && <LongCard key={international[0].id} data={international[0]} />}
         </div>
         <div className="flex-1">
           <div className="">
             {international.map((item:any) => (
               <ShortCard key={item.id} data={item} />
             ))}
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Section2;
