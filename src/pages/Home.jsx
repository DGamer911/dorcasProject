import Navbar from "../components/Navbar.jsx";
import "../style.css";
import Crochet from "../assets/Union.svg";


function Home() {
  return (
    <div className="body flex flex-col items-center w-full">
      <section
        className="flex w-full h-screen   bg-[linear-gradient(180deg,var(--accent),var(--grey),var(--wine-red))]
  bg-[length:400%_400%]
  animate-gradient justify-center flex-col items-center section1 "
      >
      <Navbar />

        <div className="relative mb-15">
          <img className="lg:w-[388px] mt-8" src={Crochet} alt="" />
          <h1
            className="text-8xl text-center leading-15 text-shadow-lg font-black absolute top-50 "
            style={{
              fontFamily: "DynaPuff",
              transform: "translateX(-10%)translateY(-20%)",
            }}
          >
            {" "}
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
            className="text-[var(--white)] text-lg font-medium absolute top-78 left-9 text-shadow-lg"
          >
            where creativity has no bounds
          </span>
          <button
            style={{ fontFamily: "DynaPuff" }}
            className="absolute shadow top-90 left-13 bg-[var(--white)] px-15 py-3 text-2xl font-bold rounded-4xl"
          >
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full bg-[var(--grey)]">
        <div className="flex flex-col items-center mt-40 gap-24">
          <div className="lg:w-[800px] bg-[var(--grey2)] border-4 border-[var(--white)] shadow-lg flex flex-col gap-5 items-center rounded-xl p-12">
            <h5 style={{ fontFamily: "DynaPuff" }} className="text-2xl font-bold text-shadow-lg text-[var(--white)]">Why Choose Us?</h5>
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
          <div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
