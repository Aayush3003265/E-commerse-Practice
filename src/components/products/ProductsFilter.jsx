"use client";

import { useState } from "react";
import Drawer from "./Drawer";

const ProductsFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <button onClick={() => setShowFilter(true)}>Filter</button>
      <Drawer showFilter={showFilter} setShowFilter={setShowFilter} />
    </div>
  );
};

export default ProductsFilter;
