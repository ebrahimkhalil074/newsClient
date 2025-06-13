
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createdComment } from "../services/commentService";
import { toast } from "sonner";
type TCommentData ={
     newsId: string;
  anonymousId?: string;
  type:string,
  content:any
}
export const useCreatedComment = () => {
     const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['comment'],
    mutationFn: async (data: TCommentData) => await createdComment(data),

    
    onSuccess: (response, variables) => {

        console.log('hook',response)
      if (response?.data.success === 'true') {
        toast.success(response?.data.message ||' Comment successfully!');
      } 
      queryClient.invalidateQueries({ queryKey: ["single-news","single-videos", variables.newsId] });
    },

  
    onError: (error: any) => {
         console.log('hook',error)
      const message =
        error?.response?.data?.message || 'Something went wrong!';
      toast.error(` ${message}`);
    },
  });
};