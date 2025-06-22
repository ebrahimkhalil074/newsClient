'use client';


import Link from "next/link";


import { FieldValues, SubmitHandler } from "react-hook-form";

import { useUserLogin } from "@/src/hooks/auth.hook";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@heroui/button";
import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
import Loading from "@/src/components/Loading";
import { useUser } from "@/src/context/user.context";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading } = useUser();
  const redirect = searchParams.get("redirect");
  const { mutate, isPending, isSuccess, isError } = useUserLogin();
  if (isError) {
    console.error(isError);
  }
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    mutate(data);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
  {isPending && <Loading />}
  <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
    <h3 className="my-2 text-2xl font-bold">Welcome Back to Your Mosque Community</h3>
    <p className="mb-4 text-center text-gray-600">
      Log in to stay connected, participate, and strengthen your bond with the ummah.
    </p>
    <div className="w-[35%]">
      <CtForm onSubmit={onSubmit}>
        <div className="py-3">
          <CtInput name="email" label="Email Address" type="email" />
        </div>
        <div className="py-3">
          <CtInput name="password" label="Password" type="password" />
        </div>

        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
        >
          Login
        </Button>
      </CtForm>
      <div className="text-center mt-4 text-sm text-gray-700">
        Dont have an account?{" "}
        <Link href={"/register"} className="text-blue-600 underline">
          Join the Community
        </Link>
      </div>
    </div>
  </div>
</>

  );
};

export default Login;
