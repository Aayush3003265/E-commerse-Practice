"use client";

const ProductByIdError = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl text-center">
            Product Not Found <br /> Some thing went wrong
          </h1>
          <button
            className="bg-blue-500 mt-5 py-2 px-4 hover:cursor-pointer rounded-2xl"
            onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
};

export default ProductByIdError;
