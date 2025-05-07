"use client";

const ProductByIdError = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl">Something Went Wrong</h1>
          <button
            className="bg-blue-500 mt-5py-2 px-2 rounded-2xl"
            onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
};

export default ProductByIdError;
