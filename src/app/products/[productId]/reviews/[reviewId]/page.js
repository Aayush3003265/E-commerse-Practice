import React from "react";

const ReviewId = async ({ params }) => {
  console.log(await params);

  return <div>this is ReviewId{params.reviewId}</div>;
};

export default ReviewId;
