import React from "react";

const AllNewsPages = async ({ params }) => {
  const slug = await params.slug;
  return (
    <div>
      <h1 className="text-5xl">News Page</h1>
      <h2 className="text-4xl">{slug[0]}</h2>
      <h2 className="text-4xl">{slug[1]}</h2>
      <h2 className="text-4xl">{slug[2]}</h2>
    </div>
  );
};

export default AllNewsPages;
