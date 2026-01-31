import { useParams } from "react-router-dom";
import allProducts from "../data/allProducts";
import "../style.css";
import { Star, ChevronLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

function ProductDetails() {
    const navigate = useNavigate();
    
    const { id } = useParams();
     
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="bg-[var(--grey2)] h-full lg:h-screen justify-center product-details lg:flex lg:gap-5 p-5 lg:p-20">
        <div className="lg:max-w-[400px] max-h-[300px] border-8 border-[var(--white)] rounded-4xl overflow-hidden lg:max-h-[600px] lg:h-full lg:w-full">
      <img className="w-full duration-300 hover:scale-105" src={product.image} alt={product.name} />

        </div>
      <div className="lg:my-0 my-2">
        <h1 className="lg:text-4xl text-3xl text-center lg:text-start text-[var(--wine-red)] text-shadow-lg font-bold text-wrap max-w-[600px]" style={{ fontFamily: "DynaPuff" }}>{product.name}</h1>
        <h2 style={{ fontFamily: "DynaPuff" }} className="lg:text-start text-center font-bold text-[var(--wine-red)] text-shadow-lg my-2 text-2xl">₦{ new Intl.NumberFormat("en-NG").format(product.price)}</h2>
        <p>{product.description}</p>
        <div className="flex gap-2 border-t border-[var(--grey)] pt-4 mt-5 flex-col">
            {
                product.Review.map((review, index) => (
                    <div key={index} className="border border-[var(--white2)] bg-[var(--grey)] rounded-2xl p-4">
                        <h3 className="font-bold text-[var(--white)] text-shadow-lg" style={{ fontFamily: "DynaPuff" }}>Review {index + 1}:</h3>
                        <p>{review}</p>
                    </div>
                ))
            }
        </div>
        <div className="flex border-t border-[var(--grey)] pt-4 w-full mt-5 gap-2">
        <h5 className="grow-1 text-center  bg-[var(--grey)] rounded-2xl hover:bg-[var(--white)] duration-300  p-2">Category: {product.category}</h5>   
        <h5  className="grow-1 flex justify-center gap-2 text-center bg-[var(--grey)] items-center rounded-2xl hover:bg-[var(--white)] duration-300 p-2">Ratings: {product.rating} <Star fill="gold" color="gold" size={18}/></h5>
        <h5 className="grow-1 text-center bg-[var(--grey)] rounded-2xl hover:bg-[var(--white)] duration-300  p-2">Duration: {product.duration}</h5>
        </div>
        <div className="flex border-t border-[var(--grey)] pt-4 w-full mt-5 gap-2">
            <button onClick={() => navigate(-1)} className="bg-[var(--white)] text-[var(--black)] flex justify-center items-center gap-2 rounded-2xl p-2 w-full duration-300 hover:bg-[var(--whiteHover)]"><ChevronLeft size={18}/>Back</button>
            <button className="bg-[var(--accent)] text-[var(--black)] rounded-2xl p-2 w-full duration-300 hover:bg-[var(--accentHover)]"><a className=" flex justify-center items-center gap-2" href="/#contactUs"><Phone size={18}/>Contact Us</a></button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
