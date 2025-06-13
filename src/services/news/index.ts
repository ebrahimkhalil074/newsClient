'use server'

import axiosInstance from "@/src/lib/axiosInstance"
import { ApiError } from "next/dist/server/api-utils";

export const createNews =async (newsData :any)=>{
    try{
  const {data} = await axiosInstance.post('/news',newsData)
  console.log('news hook',data)
  return data
    }catch(error:any){
throw new ApiError(500,error)
    }
}
 export const getAllNews =async()=>{
    try {
        const {data} =await axiosInstance.get(`/news`);
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    } 
}
 export const getAllNewsSearch =async(query:any)=>{
    try {
        console.log('ser',query)  
        const {data} =await axiosInstance.get(`/news?createdAt=${query}`);
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    } 
} 
 export const getNews =async(id:string)=>{
    try {
        const {data} =await axiosInstance.get(`/news/${id}`);
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    }
}
 export const postLikes = async (postData: any) => {
  console.log({ postData });

  try {
    const { data } = await axiosInstance.post(`/like/${postData.newsId}`, postData);
    console.log('API Response:', data);
    return data;
  } catch (error: any) {
    // এইখানে জেনেরিক ApiError না দিয়ে আসল axios error টা throw করো
    // তাহলে onError callback কাজ করবে
    throw error?.response || error;
  }
};
