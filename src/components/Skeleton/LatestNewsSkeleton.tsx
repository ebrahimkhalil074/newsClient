"use client"
export function LatestNewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow animate-pulse">
          <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6" />
        </div>
      ))}
    </div>
  );
}