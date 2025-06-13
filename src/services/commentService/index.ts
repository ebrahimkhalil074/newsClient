'use server'
import axiosInstance from "@/src/lib/axiosInstance";

 export const createdComment = async (postData: any) => {
  console.log({ postData });

  try {
    const { data } = await axiosInstance.post(`/comment/${postData.newsId}`, postData);
    console.log('API Response:', data);
    return data;
  } catch (error: any) {
    throw error?.response || error;
  }
};