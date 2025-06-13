'use server'

import axiosInstance from "@/src/lib/axiosInstance"
import { ApiError } from "next/dist/server/api-utils";

export const createCategory =async(categoryData:any)=>{
try {
  const {data} =await axiosInstance.post("/category",categoryData);
  return data
} catch (error:any) {
  throw new ApiError(500,error);
}
}

 export const getAllCategory = async (query:any) => {
  console.log('SERVICES-CT',query)
  try {
    const { data } = await axiosInstance.get('/category', {
      params: query ? { name: query } : {},
    });
    console.log(data)
    return data;
  } catch (error) {
    throw new ApiError(500, 'error');
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
 