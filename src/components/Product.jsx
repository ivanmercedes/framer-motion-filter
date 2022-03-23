import { motion } from "framer-motion";

const Product = ({ product }) => {
  return (
    <motion.div layout className="w-full relative text-center">
      <div className="shadow-md p-4 rounded border-2 border-gray-50 border-solid">
        <img
          src={product.image}
          alt=""
          className="h-96 w-full object-contain"
        />
        <h2 className="mt-5 truncate overflow-hidden">{product.title}</h2>
        <h2 className="mt-2 text-blue-500 font-bold">$ {product.price}</h2>

        <div className="absolute top-4">
          <span className="bg-blue-500 text-white py-1 px-3 rounded">
            {product.category}
          </span>
        </div>
        <button className=" bg-blue-600 hover:bg-blue-800 duration-500 transition px-10 py-2 text-white rounded-2xl text-lg mt-3 font-bold">
          Comprar ahora
        </button>
      </div>
    </motion.div>
  );
};

export default Product;
