import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="w-72 p-4  bg-white rounded-2xl shadow-lg animate-pulse">
        <div className="h-40 bg-gray-200 rounded-xl mb-4" />
        <div className="flex space-x-2 mb-2">
          <div className="w-12 h-6 bg-yellow-300 rounded-md" />
          <div className="w-10 h-6 bg-blue-400 rounded-md" />
        </div>
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-4" />
        <div className="h-10 bg-gray-400 rounded-md w-full" />
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};

export default Loader;
