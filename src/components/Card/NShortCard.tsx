

// import { Image } from "@heroui/image";
// import { divider } from "@heroui/theme";
// import Link from "next/link";

// const ShortCard = ({data}:any) => {
//     console.log('fsfdg',data)

//   return (
//    <div>

//     {data?.news.map( item = <div key={item.id}>
//       <Link href={`/news/${item?.news?.id}`}>
//     <div className="shadow-md mt-2 ">
//       <Image height={100} src={item.image}
// />
//       <h1 >{item?.news?.title?.slice(0,50)}</h1>
//     </div></Link>
//     </div>)}
    
//    </div>
//   );
// };

// export default ShortCard;
import { Image } from "@heroui/image";
import Link from "next/link";

const NShortCard = ({ data }: any) => {
  return (
    <div className="">
      {data.news.map((item:any) =>( 
         <div key={item.id}>
          <Link href={`/news/${item.id}`}>
            <div className="border border-red-500">
              <Image height={100} src={item?.image} alt="News Image" />
              <h1>{item?.title?.slice(0, 50)}</h1>
            </div>
          </Link>
        </div>))}
       
      
    </div>
  );
};

export default NShortCard;
