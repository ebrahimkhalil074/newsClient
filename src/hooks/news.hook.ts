import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createNews, getAllNews, getAllNewsSearch, getNews } from "../services/news"
import { postLikes } from '../services/news/index';
import { toast } from "sonner";

export const useCreatedNews =()=>{
  return useMutation({
    mutationKey:["create-news"],
    mutationFn:async(data:any)=> await createNews(data),
    onSuccess(data){
      toast.success(data?.message)
    }
  })
}
export const useGetAllNews =()=>{
    return useQuery({
        queryKey:["news"],
        queryFn:async()=>await getAllNews(),
    },
    

)
    
}
export const useGetAllNewsSearch = (query:any) => {
  console.log({ query });

  return useQuery({
    queryKey: ['allNewsSearch', query], // <-- FIXED here
    queryFn: async () => await getAllNewsSearch(query),
    enabled: !!query, // Optional: ensures query runs only if query exists
  });
};

export const useGetNews =(id:string)=>{
    return useQuery({
        queryKey:["single-news",id],
        queryFn:async()=>await getNews(id),
    },
    

)
    
}
type LikeData = {
  newsId?: string;
  videoId?: string;
  anonymousId?: string;
  type:string
};
// export const usePostLikes =()=>{
//     return useMutation({
//         mutationKey:["like"],
//         mutationFn:async(data:LikeData)=>await postLikes(data),
//     },

// )
   
// }

export const usePostLikes = () => {
     const queryClient = useQueryClient();
  return useMutation({
  
    mutationKey: ['like'],
    mutationFn: async (data: LikeData) => await postLikes(data),

    // ✅ Called when the like/unlike is successful
    onSuccess: (response,variables) => {

        console.log('hook',response)
      if (response?.data.status === 'liked') {
        toast.success('✅ Liked successfully!');
      } else if (response?.data.status === 'unliked') {
        toast.info('❎ Unliked successfully!');
      } else {
        toast.success('Action completed.');
      }
      queryClient.invalidateQueries({ queryKey: ["single-news","single-videos", variables.newsId,variables.videoId] });
    },

    //  Called when there's an error
    onError: (error: any) => {
        console.log('hook',error)
      const message =
        error?.response?.data?.message || 'Something went wrong!';
      toast.error(` ${message}`);
    },
  });
};