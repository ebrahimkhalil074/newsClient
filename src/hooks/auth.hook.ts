 
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { userLogin, userRegister } from "../services/authServices";





export const useUserRegisration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USERREGISTRATION"],
    mutationFn: async (userData) => await userRegister(userData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USERLOGIN"],
    mutationFn: async (userData) => await userLogin(userData),
  onSuccess: (data) => {
    console.log("login",data)
      toast.success(data.message);
    },
    onError: (error: any) => {
  console.error("Login error:", error);
  toast.error(error?.meta || "Something went wrong!");
}
  });
};
