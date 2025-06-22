import Login from "@/src/components/login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default LoginPage;