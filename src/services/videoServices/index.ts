'use server'

import axiosInstance from "@/src/lib/axiosInstance"
import { ApiError } from "next/dist/server/api-utils";

 export const createVideo =async(videoData:any)=>{
    try {
        const {data} =await axiosInstance.post('/video',videoData);
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    }
}
 export const getAllVideo =async()=>{
    try {
        const {data} =await axiosInstance.get('/video');
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    }
}
 export const getVideo =async(id:string)=>{
    try {
        const {data} =await axiosInstance.get(`/video/${id}`);
        return data
    } catch (error) {
        throw new ApiError(500,'error')
    }
}

