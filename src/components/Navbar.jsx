import { Link } from "react-router-dom";
import "../style.css";
import { Home, ShoppingBagIcon, Phone } from "lucide-react";

function NavBar() {
  const iconSize = 18;
  return (
    <nav className="shadow-lg rounded-xl flex bg-[var(--white)] p-3 items-center justify-around  lg:w-[700px] w-[300px]">
      <div className="navLinks hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
        <Link className="flex text-sm items-center  flex-col   gap-1" to="/"><Home size={iconSize}/><span>Home</span></Link>
      </div>
      <div className="navLinks  hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
        <Link className="flex text-sm  items-center flex-col  gap-1" to="/shop"><ShoppingBagIcon size={iconSize}/><span>Shop</span></Link>
      </div>
      <div className="navLinks  hover:text-[var(--accent)] hover:duration-200 hover:ease-in ">
        <Link to="/#contactUs" className="flex text-sm items-center   flex-col  gap-1"><Phone size={iconSize}/><span>Contact</span></Link>
      </div>
    </nav>
  );
}
export default NavBar;
