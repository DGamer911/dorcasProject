import "../style.css";
import { Link } from "react-router-dom";
function Card({ name }) {
  return (
    <div
      
      className="sm:h-[300px] w-full justify-end lg:p-5 p-2 h-[230px] text-shadow-lg Card border-4 border-[var(--white)] lg:rounded-4xl rounded-2xl shadow-lg flex flex-col  lg:h-[365px]"
    >
      <h3 className="font-medium text-[var(--white)] z-10 lg:leading-7 leading-4 text-lg text-center lg:text-3xl" style={{ fontFamily: "DynaPuff" }}>{name}</h3>
      <button
        style={{ fontFamily: "DynaPuff" }}
        className="shadow  bg-[var(--white)] hover:bg-[var(--accent)] duration-300 btn mt-3 z-10 lg:text-base  text-black font-bold rounded-2xl lg:rounded-4xl lg:py-[15px] lg:px-[46px]"
      >
        <a style={{ fontFamily: "DynaPuff" }} href="/store/#fashion">Explore</a>
      </button>
    </div>
  );
}

export default Card;
