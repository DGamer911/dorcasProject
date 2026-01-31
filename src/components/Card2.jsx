import "../style.css";
import {motion} from "framer-motion";
function Card2({ name }) {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="sm:h-[300px] w-full justify-end lg:p-5 p-2 h-[230px] text-shadow-lg Card2 border-4 border-[var(--white)] lg:rounded-4xl rounded-2xl shadow-lg flex flex-col  lg:h-[365px]"
    >
      <h3 className="font-medium text-[var(--white)] z-10 lg:leading-7 leading-4 text-lg text-center lg:text-3xl" style={{ fontFamily: "DynaPuff" }}>{name}</h3>
      <button
        style={{ fontFamily: "DynaPuff" }}
        className="shadow  bg-[var(--white)] hover:bg-[var(--accent)] duration-300 btn mt-3 z-10 lg:text-base  text-black font-bold rounded-2xl lg:rounded-4xl lg:py-[15px] lg:px-[46px]"
      >
               <a style={{ fontFamily: "DynaPuff" }} href="/store/#accessories">Explore</a>
      </button>
    </motion.div>
  );
}

export default Card2;
