export default function Loading() {
  return (
    <div className="p-8 max-w-6xl mx-auto animate-pulse">
      <button className="mb-6 px-4 py-2 border w-20 rounded text-transparent bg-gray-300">
        Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Skeleton */}
        <div className="w-full lg:w-1/2 h-[400px] bg-gray-300 rounded-xl" />

        {/* Info Skeleton */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />

          <div className="h-8 bg-gray-300 rounded w-24 mt-4" />

          {/* Color options */}
          <div className="flex gap-4 mt-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-300 rounded-full" />
            ))}
          </div>

          {/* Quantity Dropdown Skeleton */}
          <div className="w-20 h-10 bg-gray-300 rounded mt-4" />

          {/* Button Skeleton */}
          <div className="w-full h-12 bg-gray-400 rounded mt-4" />

          {/* Links Skeleton */}
          <div className="h-4 bg-gray-300 w-1/2 rounded mt-6" />
          <div className="h-4 bg-gray-300 w-1/3 rounded" />
        </div>
      </div>
    </div>
  );
}
