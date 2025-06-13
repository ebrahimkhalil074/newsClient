'use client'
import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
import CtSelect from "@/src/components/form/CtSelect";
import CtTextarea from "@/src/components/form/CtTextarea";
import { Button } from "@heroui/button";
import { useGetAllCategory } from '../../../../hooks/categoy.hook';
import { FieldValues } from "react-hook-form";
import { useCreatedNews } from "@/src/hooks/news.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsValidationSchema } from "@/src/schemas/createNewsSchema";

const CreateNewsPage = () => {
  const {mutate} =useCreatedNews();
  const handleSubmit =(data:FieldValues)=>{
    const newsData ={
      
 title:data.title,
    summary: data.summary,
    content: data.content,
  categoryId: data.categoryId

    }
    console.log(data.image)
const formData =new FormData()
formData.append('data',JSON.stringify(newsData));
formData.append("file",(data.image[0]))
mutate(formData)
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
  console.log(categoryOptions)
  const op =[
    {
      key:'fdgd',
      label:"gfdg"
    }
  ]
  return (
    <div>
      <CtForm onSubmit={handleSubmit}
      resolver={zodResolver(newsValidationSchema)}
      >
        <div className="py-3">
          <CtInput name="title" label="Title" type="text" />
        </div>
        <div className="py-3">
          <CtSelect name="categoryId" label="Category" options={categoryOptions} type="text" />
        </div>
        <div className="py-3">
          <CtInput name="image" label="Image" type="file" />
        </div>
        <div className="py-3">
          <CtInput name="summary" label="Summary" type="text" />
        </div>
        <div className="py-3">
          <CtTextarea name="content" label="Content" type="text" />
        </div>

        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
        >
          Create News
        </Button>
      </CtForm>
    </div>
     
  );
};

export default CreateNewsPage;