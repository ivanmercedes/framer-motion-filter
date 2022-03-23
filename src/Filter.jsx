import { useEffect } from "react";

const Filter = ({
  products,
  setFiltered,
  activeCategory,
  setActiveCategory,
}) => {
  const handlerClick = (e) => {
    setActiveCategory(e.target.textContent);

    if (e.target.textContent === "All") {
      setFiltered(products);
      return;
    }

    const filtered = products.filter(
      (product) => product.category === e.target.textContent
    );

    setFiltered(filtered);
  };

  return (
    <div className="filter-container flex flex-row flex-wrap justify-center my-10">
      <button
        onClick={handlerClick}
        className={`${
          activeCategory === "All" ? "active" : ""
        } mx-4 bg-blue-500 text-sm text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-700 capitalize"`}
      >
        All
      </button>
      <button
        onClick={handlerClick}
        className={`${
          activeCategory === "men's clothing" ? "active" : ""
        } mx-4 bg-blue-500 text-sm text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-700 capitalize`}
      >
        men's clothing
      </button>
      <button
        onClick={handlerClick}
        className={`${
          activeCategory === "jewelery" ? "active" : ""
        } mx-4 bg-blue-500 text-sm text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-700 capitalize`}
      >
        jewelery
      </button>
      <button
        onClick={handlerClick}
        className={`${
          activeCategory === "electronics" ? "active" : ""
        } mx-4 bg-blue-500 text-sm text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-700 capitalize`}
      >
        electronics
      </button>
      <button
        onClick={handlerClick}
        className={`${
          activeCategory === "women's clothing" ? "active" : ""
        } selection:mx-4 bg-blue-500 text-sm text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-700 capitalize`}
      >
        women's clothing
      </button>
    </div>
  );
};

export default Filter;
