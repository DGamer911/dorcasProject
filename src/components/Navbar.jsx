import { Link } from "react-router-dom";
import "../style.css";
import { Home, ShoppingBagIcon, Phone } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

function NavBar() {
  const iconSize = 18;
  const scaleX = useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <nav className="shadow-lg px-1 justify-center mt-10 z-20 rounded-xl flex-col bg-[var(--white)] items-center lg:fixed top-0  lg:w-[700px] sm:w-[500px] w-[300px]">
      <div className=" flex  py-3 px-2 items-center justify-around">
        
        <div className="navLinks hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
          <Link className="flex text-sm items-center  flex-col   gap-1" to="/">
            <Home size={iconSize} />
            <span>Home</span>
          </Link>
        </div>
        <div className="navLinks  hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
          <Link
            className="flex text-sm  items-center flex-col  gap-1"
            to="/store"
          >
            <ShoppingBagIcon size={iconSize} />
            <span>Shop</span>
          </Link>
        </div>
        <div className="navLinks  hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
          <a
            href="/#contactUs"
            className="flex text-sm items-center   flex-col  gap-1"
          >
            <Phone size={iconSize} />
            <span>Contact</span>
          </a>
        </div>
      </div>
      <motion.div style={{ scaleX, borderRadius: "32px" }} className="lg:block hidden origin-left h-[4px] rounded-4xl bg-[var(--accent)] w-full">

      </motion.div>
    </nav>
  );
}
export default NavBar;
