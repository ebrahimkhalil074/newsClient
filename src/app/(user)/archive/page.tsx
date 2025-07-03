
// 'use client';

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';

// import Section4 from '@/src/components/news/Section4';
// import 'react-datepicker/dist/react-datepicker.css';
// import Slider2 from '@/src/components/Slider2';
// import NflexCard from '@/src/components/Card/NflexCard';
// import { useGetAllNewsSearch } from '@/src/hooks/news.hook';
// import { format } from 'date-fns';

// interface ResultItem {
//   id: number;
//   title: string;
// }

// interface Results {
//   message: string;
//   items: ResultItem[];
// }

// const Archive: React.FC = () => {
//   const [day, setDay] = useState<number>(1);
//   const [month, setMonth] = useState<string>('January');
//   const [year, setYear] = useState<number>(2025);
//   const [category, setCategory] = useState<string>('অনলাইন সংস্করণ');
//   const [selectedDate, setSelectedDate] = useState();
//   const [results, setResults] = useState<Results | null>(null);

//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];
//   const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
//   const categories = ['অনলাইন সংস্করণ', 'প্রিন্ট সংস্করণ'];

//   const handleSearch = () => {
//     const monthIndex = months.indexOf(month);
// const date = new Date(year, monthIndex, day);
// console.log({date})
// const formattedDate = format(date, 'yyyy-MM-dd');
//     console.log({ formattedDate });

//      setSelectedDate(formattedDate); // sync with calendar



    
//   };

//   const handleCalendarChange = (date: Date | null) => {
//     if (date) {
//       const selectedDay = date.getDate();
//       const selectedMonth = months[date.getMonth()];
//       const selectedYear = date.getFullYear();
  
//       setDay(selectedDay);
//       setMonth(selectedMonth);
//       setYear(selectedYear);
//    const formattedDate = format(date, 'yyyy-MM-dd');
//     console.log({ formattedDate });

//      setSelectedDate(formattedDate); 

//      setSelectedDate(formattedDate);
//       handleSearch()
  
//     } 
//   };
//   console.log(selectedDate)
// const {data} =useGetAllNewsSearch(selectedDate)
// console.log({data})
// const searchData =data?.data ||[]
// console.log({searchData})

//   return (
//     <div className="grid grid-cols-12 gap-4 p-6  mx-auto font-sans">
//       {/* Left Side: Dropdown Filter */}
//       <div className="col-span-12 lg:col-span-8 border rounded p-6 shadow">
//         <div className="flex flex-wrap items-center gap-4 mb-6">
//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={day}
//             onChange={e => setDay(Number(e.target.value))}
//           >
//             {days.map(d => <option key={d} value={d}>{d}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={month}
//             onChange={e => setMonth(e.target.value)}
//           >
//             {months.map(m => <option key={m} value={m}>{m}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={year}
//             onChange={e => setYear(Number(e.target.value))}
//           >
//             {years.map(y => <option key={y} value={y}>{y}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={category}
//             onChange={e => setCategory(e.target.value)}
//           >
//             {categories.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>

//           <button
//             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm transition"
//             onClick={handleSearch}
//           >
//             খুঁজুন
//           </button>
//         </div>

//         {/* Results Section */}
//         {searchData ? (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">{results?.message}</h2>
//             <ul className="list-disc list-inside space-y-1 text-gray-800">
//               {searchData?.map(item => <NflexCard key={item.id} item={item}/>)}
//             </ul>
//           </div>
//         ) : (
//           <div className="mt-6 text-gray-500 text-md">কোনো তথ্য পাওয়া যায়নি</div>
//         )}
//       </div>

//       {/* Right Side: Calendar */}
//       <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center border rounded shadow ">
//         <div>
//           <DatePicker
//             inline
//             selected={selectedDate}
//             onChange={handleCalendarChange}
//           />
//         </div>

//         <div className="w-full">
//           <Slider2 />
//         </div>
//       </div>

//       <div className="col-span-12">
//         <Section4 />
//       </div>
//     </div>
//   );
// };

// export default Archive;

// 'use client';

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import { format } from 'date-fns';

// import Section4 from '@/src/components/news/Section4';
// import 'react-datepicker/dist/react-datepicker.css';
// import Slider2 from '@/src/components/Slider2';
// import NflexCard from '@/src/components/Card/NflexCard';
// import { useGetAllNewsSearch } from '@/src/hooks/news.hook';

// interface ResultItem {
//   id: number;
//   title: string;
// }

// interface Results {
//   message: string;
//   items: ResultItem[];
// }

// const Archive: React.FC = () => {
//   const [day, setDay] = useState<number>(1);
//   const [month, setMonth] = useState<string>('January');
//   const [year, setYear] = useState<number>(2025);
//   const [category, setCategory] = useState<string>('অনলাইন সংস্করণ');
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [results, setResults] = useState<Results | null>(null);

//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];
//   const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
//   const categories = ['অনলাইন সংস্করণ', 'প্রিন্ট সংস্করণ'];

//   const handleSearch = () => {
//     const monthIndex = months.indexOf(month); // 0-based index
//     const date = new Date(year, monthIndex, day); // Local time
//     setSelectedDate(date); // Sync with calendar
//   };

//   const handleCalendarChange = (date: Date | null) => {
//     if (date) {
//       const selectedDay = date.getDate();
//       const selectedMonth = months[date.getMonth()];
//       const selectedYear = date.getFullYear();

//       setDay(selectedDay);
//       setMonth(selectedMonth);
//       setYear(selectedYear);

//       setSelectedDate(date);
//       handleSearch();
//     }
//   };

//   // Format date before sending to backend
//   const formattedDate = format(selectedDate, 'yyyy-MM-dd');
//   console.log({ formattedDate });

//   const { data } = useGetAllNewsSearch(formattedDate);
//   const searchData = data?.data || [];

//   return (
//     <div className="grid grid-cols-12 gap-4 p-6 mx-auto font-sans">
//       {/* Left Side: Dropdown Filter */}
//       <div className="col-span-12 lg:col-span-8 border rounded p-6 shadow">
//         <div className="flex flex-wrap items-center gap-4 mb-6">
//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={day}
//             onChange={e => setDay(Number(e.target.value))}
//           >
//             {days.map(d => <option key={d} value={d}>{d}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={month}
//             onChange={e => setMonth(e.target.value)}
//           >
//             {months.map(m => <option key={m} value={m}>{m}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={year}
//             onChange={e => setYear(Number(e.target.value))}
//           >
//             {years.map(y => <option key={y} value={y}>{y}</option>)}
//           </select>

//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//             value={category}
//             onChange={e => setCategory(e.target.value)}
//           >
//             {categories.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>

//           <button
//             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm transition"
//             onClick={handleSearch}
//           >
//             খুঁজুন
//           </button>
//         </div>

//         {/* Results Section */}
//         {searchData.length > 0 ? (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">{results?.message}</h2>
//             <ul className="list-disc list-inside space-y-1 text-gray-800">
//               {searchData.map(item => (
//                 <NflexCard key={item.id} item={item} />
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div className="mt-6 text-gray-500 text-md">কোনো তথ্য পাওয়া যায়নি</div>
//         )}
//       </div>

//       {/* Right Side: Calendar */}
//       <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center border rounded shadow">
//         <div>
//           <DatePicker
//             inline
//             selected={selectedDate}
//             onChange={handleCalendarChange}
//           />
//         </div>

//         <div className="w-full">
//           <Slider2 />
//         </div>
//       </div>

//       <div className="col-span-12">
//         <Section4 />
//       </div>
//     </div>
//   );
// };

// export default Archive;
'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import Section4 from '@/src/components/news/Section4';
import 'react-datepicker/dist/react-datepicker.css';
import Slider2 from '@/src/components/Slider2';
import NflexCard from '@/src/components/Card/NflexCard';
import { useGetAllNewsSearch } from '@/src/hooks/news.hook';
import FlexCard from '@/src/components/Card/FlexCard';

interface ResultItem {
  id: number;
  title: string;
}

interface Results {
  message: string;
  items: ResultItem[];
}

const Archive: React.FC = () => {
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<string>('January');
  const [year, setYear] = useState<number>(2025);
  const [category, setCategory] = useState<string>('অনলাইন সংস্করণ');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Date used for the API call
  const [searchDate, setSearchDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
  const categories = ['অনলাইন সংস্করণ', 'প্রিন্ট সংস্করণ'];

  const handleSearch = () => {
    const monthIndex = months.indexOf(month); // 0-based index
    const date = new Date(year, monthIndex, day); // Local time
    setSelectedDate(date); // Sync with calendar
    setSearchDate(format(date, 'yyyy-MM-dd')); // Update date for API
          console.log('1')
  };

  const handleCalendarChange = (date: Date | null) => {
    if (date) {
      const selectedDay = date.getDate();
      const selectedMonth = months[date.getMonth()];
      const selectedYear = date.getFullYear();

      setDay(selectedDay);
      setMonth(selectedMonth);
      setYear(selectedYear);

      setSelectedDate(date);
      setSearchDate(format(date, 'yyyy-MM-dd')); // Update for API
      console.log('1')
    }
  };
console.log(searchDate)
  const { data,isFetching } = useGetAllNewsSearch(searchDate);
  if(isFetching){
console.log('fatching')
  }
  console.log(data)
  const searchData = data?.data || [];
console.log(searchData)
  return (
    <div className="grid grid-cols-12 gap-4 p-6 mx-auto font-sans">
      {/* Left Side: Dropdown Filter */}
      <div className="col-span-12 lg:col-span-8 border rounded p-6 shadow">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={day}
            onChange={e => setDay(Number(e.target.value))}
          >
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={month}
            onChange={e => setMonth(e.target.value)}
          >
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={year}
            onChange={e => setYear(Number(e.target.value))}
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
 
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm transition"
            onClick={handleSearch}
          >
            খুঁজুন
          </button>
        </div>

        {/* Results Section */}
        {searchData.length > 0 ? (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              মোট ফলাফল: {searchData.length}
            </h2>
            <div className="list-disc list-inside space-y-4 text-gray-800 ">
              {searchData.map((item:any) => (
                <FlexCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 text-gray-500 text-md">কোনো তথ্য পাওয়া যায়নি</div>
        )}
      </div>

      {/* Right Side: Calendar */}
      <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center border rounded shadow">
        <div>
          <DatePicker
            inline
            selected={selectedDate}
            onChange={handleCalendarChange}
          />
        </div>

        <div className="w-full">
          <Slider2 />
        </div>
      </div>

      <div className="col-span-12">
        <Section4 />
      </div>
    </div>
  );
};

export default Archive;
