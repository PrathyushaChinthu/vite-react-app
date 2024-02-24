import React, { useState, useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products", category);
    setProducts(["clothing", "household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
