"use client";

import { createProduct, updateProduct } from "@/api/products";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";

const ProductForm = ({ id, product, categories }) => {
  const [loading, setLoading] = useState(false);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    values: product,
  });

  const prepareData = (data) => {
    setLoading(true);
    // console.log(loading);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("price", data.price);
    if (data.description) {
      formData.append("description", data.description);
    }
    productImages.map((image) => {
      formData.append("images", image);
    });

    return formData;
  };

  async function submitForm(data) {
    const formData = prepareData(data);
    try {
      if (product) {
        await updateProduct(id, formData);
        toast.success("Updated Successfully", { autoClose: 750 });
        return;
      }
      await createProduct(formData);
      toast.success("Added Successfully", { autoClose: 750 }), reset();
    } catch (error) {
      toast.error(error.response.data, { autoClose: 750 });
    } finally {
      setLoading(false), setProductImages([]), setLocalImageUrls([]);
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product brand"
              required
              {...register("brand")}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <input
              type="text"
              list="categories"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product Category"
              required
              {...register("category")}
            />
            {/* added datalist for easy category select */}
            <datalist id="categories">
              {categories?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </datalist>
            {/* // */}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required
              {...register("price")}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
              {...register("description")}
            />
          </div>

          <div className="flex items-center justify-center sm:col-span-2">
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JPEG, PNG, JPG (MAX. 800x400px)
                </p>
              </div>
              <input
                id="images"
                accept=".png,.jpg,.jpeg"
                type="file"
                className="hidden"
                multiple
                onChange={(e) => {
                  const images = [];
                  const urls = Array.from(e.target.files).map((image) => {
                    images.push(image), URL.createObjectURL(image);
                  });
                  setLocalImageUrls((prev) => [...prev, ...urls]);
                  setProductImages(images);
                }}
              />
            </label>
          </div>
          {localImageUrls.length > 0 && (
            <div className="flex gap-3">
              {localImageUrls.map((url, index) => (
                <Image
                  src={url}
                  alt={"image"}
                  key={index}
                  height={200}
                  width={200}
                  className="h-14 w-auto bg-gray-400 border p-1"
                />
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white  bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 border dark:text-white dark:border-slate-300 hover:bg-primary-800 disabled:opacity-80 hover:opacity-80"
          disabled={loading}>
          {product ? "Edit Product" : "Add product"}
          {loading && <Spinner className="ml-2 h-5 w-5" />}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
