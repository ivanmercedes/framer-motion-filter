import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";

import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFiltered(data);
    setActiveCategory("All");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-5">
      <div className="App m-auto max-w-screen-xl">
        <Filter
          products={products}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <motion.div layout className="grid gap-10 grid-cols-4 grid-rows-3">
          {filtered.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default App;
