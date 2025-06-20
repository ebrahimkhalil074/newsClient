'use client'
import { useUser } from "@/src/context/user.context";

const Page = () => {
     const {user} =useUser()
  return (
 
    <div>
     <div className="p-4 bg-gradient-to-r from-red-500 to-red-900 dark:bg-gray-800 rounded-2xl shadow-lg text-white mb-4">
      <h2 className="text-xl font-semibold">Hi, {user?.email?.split("@")[0]} 👋</h2>
      <p className="text-sm mt-1">Welcome back! Hope you are having a great day.</p>
    </div>
    </div>
  );
};

export default Page;