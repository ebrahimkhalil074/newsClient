import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { createVideo, getAllVideo, getVideo } from "../services/videoServices";
import { toast } from "sonner";

export const useCreateVideo =()=>{
    return useMutation({
        mutationKey:['create-video'],
        mutationFn:  async (data:any)=> await createVideo(data),
        onSuccess(data){
toast.success(data.message)
        }
    })
}
export const useGetAllVideos =()=>{
    return useQuery({
        queryKey:["videos"],
        queryFn:async()=>await getAllVideo(),
    },
    

)
    
}
export const useGetVideos =(id:string)=>{
    return useQuery({
        queryKey:["single-videos",id],
        queryFn:async()=>await getVideo(id),
    },
    

)
    
}