import Navbar from "../components/Navbar.jsx";
import "../style.css";
import Crochet from "../assets/Union.svg";
import Card from "../components/card.jsx";
import { Car } from "lucide-react";

function Home() {
  return (
    <div className="body flex flex-col items-center w-full">
      <section
        className="flex w-full h-screen   bg-[linear-gradient(180deg,var(--accent),var(--grey),var(--wine-red))]
  bg-[length:400%_400%]
  animate-gradient justify-start flex-col items-center section1 "
      >
        <Navbar />

        <div className="relative mb-15 mt-40 flex flex-col items-center">
          <img
            className="lg:w-[388px] w-[288px] mt-8 absolute"
            src={Crochet}
            alt=""
            style={{transform:"translateY(-38%)"}}
          />
          <h1
            className="lg:text-8xl text-5xl heroText  text-center leading-9 lg:leading-15 text-shadow-lg font-black "
            style={{
              fontFamily: "DynaPuff",
            }}
          >
        
            <span
              className="text-[var(--white)]"
              style={{ fontFamily: "DynaPuff" }}
            >
              RODDOB'S
            </span>{" "}
            <br></br>
            <span
              className="text-[var(--grey)]"
              style={{ fontFamily: "DynaPuff" }}
            >
              crochet
            </span>
          </h1>
          <span
            style={{ fontFamily: "DynaPuff" }}
            className="text-[var(--white)] lg:my-3 my-1 text-lg font-medium text-shadow-lg"
          >
            where creativity has no bounds
          </span>
          <button
            style={{ fontFamily: "DynaPuff" }}
            className=" shadow  bg-[var(--white)]  px-15 py-3 text-2xl font-bold rounded-4xl"
          >
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full bg-[var(--grey)]">
        <div className="flex flex-col items-center mt-40 gap-2">
          <div className="max-w-[800px] w-full bg-[var(--grey2)] border-4 border-[var(--white)] shadow-lg flex flex-col gap-5 items-center rounded-4xl p-12">
            <h5
              style={{ fontFamily: "DynaPuff" }}
              className="text-2xl font-bold text-shadow-lg text-[var(--white)]"
            >
              Why Choose Us?
            </h5>
            <p>
              At Roddob’s Crochet, we don’t just make crochet items — we create
              pieces you’ll love. We’re fast, reliable, and focused on quality,
              while still giving you the option to customise your order. Our
              goal is simple: great designs, great service, and happy customers
              every time.
            </p>
            <button
              style={{ fontFamily: "DynaPuff" }}
              className=" shadow bg-[var(--white)] px-15 py-3 text-lg font-bold rounded-4xl"
            >
              Contact Us
            </button>
          </div>
          <div className="Scroll flex max-w-[500px] sm:max-w-full lg:overflow-hidden overflow-x-scroll lg:max-w-[800px] gap-[14px]">
            <Card name="Crochet Fashion"/>
            <Card name="Crochet Accessories"/>
            <Card name="Crochet Bags and Extra"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
