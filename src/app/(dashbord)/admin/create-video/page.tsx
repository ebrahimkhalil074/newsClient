'use client'
import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
import CtSelect from "@/src/components/form/CtSelect";
import CtTextarea from "@/src/components/form/CtTextarea";
import { Button } from "@heroui/button";
import { useGetAllCategory } from '../../../../hooks/categoy.hook';
import { FieldValues } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { videoValidationSchema } from "@/src/schemas/videoValidationSchema";
import { useCreateVideo } from "@/src/hooks/video.hook";


const CreateVideoPage = () => {
   const {mutate} =useCreateVideo();
  const handleSubmit =(data:FieldValues)=>{

 mutate(data)
  }
  const {data,isLoading} =useGetAllCategory(undefined);

  console.log(data)
  if(isLoading){
return <h1>Lodding</h1>
  }
  const categoryOptions =data?.data?.map((item:any) =>(
    {
    key: item?.id,
    label:item?.name
    }
  ))
  
 
  return (
    <div>
      <CtForm onSubmit={handleSubmit}
      resolver={zodResolver(videoValidationSchema)}
      >
        <div className="py-3">
          <CtInput name="title" label="Title" type="text" />
        </div>
        <div className="py-3">
          <CtSelect name="categoryId" label="Category" options={categoryOptions} type="text" />
        </div>
        <div className="py-3">
          <CtInput name="videoUrl" label="Video Url" type="file" />
        </div>
        <div className="py-3">
          <CtInput name="description" label="Description" type="text" />
        </div>
      

        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
        >
          Create Video
        </Button>
      </CtForm>
    </div>
     
  );
};

export default CreateVideoPage;