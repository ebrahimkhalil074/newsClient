
'use client'

import Tag from "../Tag";
import FlexCard from "../Card/FlexCard";
import MiddleCard from "../Card/MiddleCard";
import { useGetAllCategory } from "@/src/hooks/categoy.hook";
import NflexCard from "../Card/NflexCard";



const Section4 = () => {
  
    const { data:sinceData, isLoading } = useGetAllCategory('প্রযুক্তি');
   
        const since= sinceData?.data ?? [];
       
      const { data:sportsData, isLoading:iIsLoading } = useGetAllCategory('খেলা');
 
        const sports = sportsData?.data ?? [];
        const { data:finiceData,  } = useGetAllCategory('অর্থনীতি');
 
          const finice = finiceData?.data ?? [];
        
console.log({finice})
 

  return (
    <div className="grid grid-cols-12 gap-4 p-4 ">
      {/* First Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
       <Tag tag='শিক্ষা,বিজ্ঞান ও প্রযুক্তি'/>

       <div className="grid grid-cols-1 gap-2 ">
             {since?.map((item:any) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
    
      </div>

      {/* Middle Div - 50% */}
      <div className="col-span-12 lg:col-span-6 ">
        
        <div className="mb-2">
         <Tag tag='খেলাধুলা'/>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-2">
          
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 ga-4 ">
              {sports?.map((item:any) => (
                <MiddleCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Last Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
      <Tag tag='অর্থনীতি'/>
      <div className="grid grid-cols-1 gap-2 ">
             {finice.map((item:any) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
      </div>
    </div>
  );
};

export default Section4;
