"use client";

import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
import { useUserRegisration } from "@/src/hooks/auth.hook";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterPage() {
  const { mutate, isPending, isError, data, isSuccess } = useUserRegisration();
const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = { ...data };
    console.log("Inside form user data: ", userData);
    mutate(userData);
  };

  // Side effects for success, error
  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration Successful! 🎉");
      // Optionally redirect user to login
       router.push('/login')
    }
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [isSuccess, isError]);

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Join Our Mosque Community</h3>
      <p className="mb-4 text-center text-sm text-gray-600">
        Connect, contribute, and grow spiritually with your mosque family.
      </p>

      <div className="w-[35%]">
        <CtForm onSubmit={onSubmit}>
          <div className="py-3">
            <CtInput label="Email Address" name="email" size="sm" />
          </div>
          <div className="py-3">
            <CtInput
              label="Create Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            disabled={isPending} // Disable button while pending
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>
        </CtForm>

        <div className="mt-4 text-center text-sm text-gray-700">
          Already registered?{" "}
          <Link href={"/login"} className="text-blue-600 underline">
            Log in here
          </Link>
        </div>

        {isError && (
          <p className="mt-3 text-center text-sm text-red-500">
            Registration failed. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="mt-3 text-center text-sm text-green-600">
            Registration successful! Welcome!
          </p>
        )}
      </div>
    </div>
  );
}
