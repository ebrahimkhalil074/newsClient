
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createdComment, updatedComment } from "../services/commentService";
import { toast } from "sonner";
type TCommentData ={
     newsId: string;
     videoId?:string;
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
      // newsId থাকলে শুধুমাত্র single-news invalidate করো
  if (variables.newsId) {
    queryClient.invalidateQueries({ queryKey: ['single-news', variables.newsId] });
  }

  // videoId থাকলে শুধুমাত্র single-videos invalidate করো
  if (variables.videoId) {
    queryClient.invalidateQueries({ queryKey: ['single-videos', variables.videoId] });
  }
    },

  
    onError: (error: any) => {
         console.log('hook',error)
      const message =
        error?.response?.data?.message || 'Something went wrong!';
      toast.error(` ${message}`);
    },
  });
};
export const useUdatedComment = () => {
     const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updated-comment'],
    mutationFn: async (data:any) => await updatedComment(data),


    onSuccess: (response, variables) => {

        console.log('hook',response,{variables})
      if (response?.data.success === 'true') {
        toast.success(response?.data.message ||' Comment successfully!');
      } 
    // newsId থাকলে শুধুমাত্র single-news invalidate করো
  if (variables.newsId) {
    queryClient.invalidateQueries({ queryKey: ['single-news', response.data.newsId] });
  }

  // videoId থাকলে শুধুমাত্র single-videos invalidate করো
  if (variables.videoId) {
    queryClient.invalidateQueries({ queryKey: ['single-videos', variables.videoId] });
  }

    },

  
    onError: (error: any) => {
         console.log('hook',error)
      const message =
        error?.response?.data?.message || 'Something went wrong!';
      toast.error(` ${message}`);
    },
  });
};