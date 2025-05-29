import React from "react";

const Loading = () => {
  return (
    <table className="w-full text-sm text-left rtl:text-right rounded-2xl text-gray-500 dark:text-gray-400 pt-8">
      <thead className="text-xs text-gray-700 uppercase pt-8  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">Product name</th>
          <th className="px-6 py-3">Brand</th>
          <th className="px-6 py-3">Category</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, i) => (
          <tr
            key={i}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            {[...Array(6)].map((__, j) => (
              <td key={j} className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 animate-pulse"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Loading;
