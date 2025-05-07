"use client";

const GlobalErrorBoundary = ({ error }) => {
  return <div>{error.message}</div>;
};

export default GlobalErrorBoundary;
