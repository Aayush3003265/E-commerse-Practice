"use client";

const AddProduct = () => {
  return (
    <form>
      <div className="pb-2">
        <label htmlFor="email" className="font-medium">
          Product Name
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid Email Address",
            },
          })}
          className="border rounded-xl w-full p-2 mt-1 bg-slate-100 dark:bg-slate-700"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>
    </form>
  );
};

export default AddProduct;
