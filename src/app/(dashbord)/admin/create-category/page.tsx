'use client'
import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
import CtSelect from "@/src/components/form/CtSelect";
import CtTextarea from "@/src/components/form/CtTextarea";
import { Button } from "@heroui/button";
import { useCreateCategory, useGetAllCategory } from '../../../../hooks/categoy.hook';
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryValidationSchema } from "@/src/schemas/createCategorySchema";
const CreateCategoryPage = () => {
  const {mutate} =useCreateCategory()
  const handleSubmit =(data:FieldValues)=>{
   mutate(data)

  }
  
 
  return (
    <div>
      <CtForm onSubmit={handleSubmit}
       resolver={zodResolver(categoryValidationSchema)}
      >
        <div className="py-3">
          <CtInput name="name" label="Name" type="text" />
        </div>
        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
        >
          Create Category
        </Button>
      </CtForm>
    </div>
  );
};

export default CreateCategoryPage;