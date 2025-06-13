import { useMutation, useQuery } from "@tanstack/react-query"
import { createCategory, getAllCategory } from "../services/categoryServices"
import { toast } from "sonner"


export const useCreateCategory = ()=>{
  return useMutation({
    mutationKey:['create-category'],
    mutationFn: async (data :any)=> await createCategory(data),
    onSuccess(data, variables, context) {
      console.log(data)
      toast.success(data.message)
    },
   onError(error: any, variables, context) {
    console.log('first',error)
  const errorMessage =
    error?.response?.data?.message || // Axios-style error
    error?.data?.message ||           // Some custom error structure
    error?.message ||                 // JS Error
    "Something went wrong.";          // Fallback

  toast.error(errorMessage);
}

  })
}

export const useGetAllCategory = (query:any) => {
  return useQuery({
    queryKey: ['CATEGORY', query], // query কে key তে include করুন যাতে ভিন্ন query আলাদা cache হয়
    queryFn: async () => await getAllCategory(query),
    
  });
};
