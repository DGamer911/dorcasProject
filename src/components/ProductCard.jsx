import { Link } from "react-router-dom";
import "../style.css";
import { useEffect, useRef, useState } from "react";
import {motion, useInView } from "framer-motion";


function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
      <motion.div initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease:"easeOut" }} onMouseEnter={() => setIsHovered(prev => !prev)} onMouseLeave={() => setIsHovered(prev => !prev)} className="flex overflow-hidden border-8 border-[var(--white)] lg:rounded-4xl rounded-2xl shadow-lg max-h-[285px] flex-col relative imgCard ">
        <img
        
          className="w-full z-1 radii hover:scale-105 duration-300"
          src={product.image}
          alt={product.name}
        />
        <div className="z-3 w-full text-shadow-lg absolute  lg:leading-normal leading-4 text-[var(--white)] text-center bottom-[10px]">
          <h3   style={{ fontFamily: "DynaPuff" }}>{product.name}</h3>
          <p   style={{ fontFamily: "DynaPuff", color: "var(--accent)" }} className={isHovered ? "block font-medium" : "hidden font-bold"}>₦{new Intl.NumberFormat("en-NG").format(product.price)}</p>
    <Link to={`/product/${product.id}`} className="no-underline">

          <button   style={{ fontFamily: "DynaPuff" }}
        className="shadow  bg-[var(--white)] hover:bg-[var(--accent)] duration-300 btn mt-3 z-10 lg:text-base text-base font-medium lg:leading-normal  text-black lg:font-bold rounded-2xl lg:rounded-4xl rounded-2xl py-1 px-5 lg:py-[12px] lg:px-[46px]">View More</button>
    </Link>
        </div>
      </motion.div>
  );
}
export default ProductCard;
