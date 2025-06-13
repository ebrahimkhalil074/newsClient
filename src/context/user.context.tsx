// import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { getCurrentUser } from "../services/authServices";

// const UserContext =createContext(undefined)

// const UserProvider =({ children }: { children: ReactNode })=>{
//     const [user,setUser] =useState();
//     const [isloading,setIsLoading] = useState(true)
//     const handleUser =async()=>{
//         const user = await getCurrentUser()
//         setUser(user)
//         setIsLoading(false)
//     }
//     useEffect(()=>{
// handleUser()
//     },[isloading])
    
// return(
//     <UserContext.Provider value={{user,setUser,isloading,setIsLoading}}>
// {children}
//     </UserContext.Provider>
// )
// }
// export const useUser =()=>{
//     const context = useContext(UserContext);
//     if (context === undefined) {
//       throw new Error("useUser must be used within the UserProvider context");  
//     }
//     return context
// }

// export default UserProvider

 
// import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
// import { IUser } from "../types";
// import { getCurrentUser } from "../services/authServices";

// const UserContext = createContext<IValue |undefined>(undefined)

// interface IValue {
// user:IUser | null ;
//   setUser: (user:IUser | null) => void;
//   loading: boolean;
//   setLoading: Dispatch<SetStateAction<boolean>>;

// }

// const UserProvider =({children}:{children:ReactNode})=>{

//     const [user, setUser] = useState<IUser|null>(null);
//     const [loading, setLoading] = useState(true);
//     const handleUser= async()=>{
//         const user = await getCurrentUser();
//         setUser(user);
//     }
//     console.log(user)
//     useEffect(()=>{
//         setLoading(true);
//         handleUser();
//         setLoading(false);
//     },[loading])

//     return(
//         <UserContext.Provider value={{user, setUser, loading, setLoading }}>
//             {children}
//         </UserContext.Provider>
//     )

// }
// export const useUser = () => {
//     const context = useContext(UserContext);

//     if (context === undefined) {
//       throw new Error("useUser must be used within the UserProvider context");
//     }

//     return context;
//   };

// export default UserProvider

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { IUser } from "../types";
import { getCurrentUser } from "../services/authServices";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  [x: string]: any;
  user: IUser | null | undefined;
  isLoading: boolean;
  setUser: (user: IUser | null |undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null |undefined>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
console.log('userContext',user)
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};



export default UserProvider;
