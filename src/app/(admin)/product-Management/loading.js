const ProductFormSkeleton = () => {
  return (
    <div className="animate-pulse grid gap-4 sm:grid-cols-2 sm:gap-6 text-center mx-64">
      {/* Product Name */}
      <div className="sm:col-span-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2" />
        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Brand */}
      <div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2" />
        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Category */}
      <div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-2" />
        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Price */}
      <div className="sm:col-span-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2" />
        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Description */}
      <div className="sm:col-span-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28 mb-2" />
        <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Button */}
      <div className="sm:col-span-2">
        <div className="w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default ProductFormSkeleton;
