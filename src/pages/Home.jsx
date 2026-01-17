import Navbar from "../components/Navbar.jsx";
import "../style.css";
import Crochet from "../assets/Union.svg";
import Card from "../components/Card.jsx";
import Vector7 from "../assets/Vector7.svg";
import Vector8 from "../assets/Vector8.svg";
import Group19 from "../assets/Group19.svg";
import { Heart, Pencil, Pin, Plus } from "lucide-react";
import tape from "../assets/tape.svg";

function Home() {
  const style = "flex justify-between items-center border-b-2 border-[var(--grey2)] py-4";
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
            style={{ transform: "translateY(-38%)" }}
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
        <div className="flex mb-10 px-2 flex-col relative items-center mt-40 gap-2">
          <div className="max-w-[800px] w-full bg-[var(--grey2)] border-4 border-[var(--white)] shadow-lg flex flex-col gap-5 items-center rounded-4xl p-12">
            <h5
              style={{ fontFamily: "DynaPuff" }}
              className="text-2xl font-bold text-shadow-lg text-[var(--white)]"
            >
              Why Choose Us?
            </h5>
            <p className="text-center">
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
          <div className="Scroll flex max-w-[500px] sm:max-w-full lg:max-w-[800px] gap-[14px]">
            <Card name="Crochet Fashion" />
            <Card name="Crochet Trinkets" />
            <Card name="Crochet Bags"/>
          </div>
          <img className="top-38 absolute start-29 sw1" src={Vector7} alt="" />
          <img className="top-45 absolute end-29 sw2" src={Vector8} alt="" />
        </div>
      </section>
      <section className="w-full relative  bg-[var(--grey)] flex justify-center items-center">
        <div className="flex-col px-2 flex items-center">
          <img src={Group19} className="sw" alt="" />
          <div className="flex flex-wrap justify-center gap-5">
            <div className="flex flex-col gap-5 items-center">
              <div style={{maxWidth:"540px"}} className="is1 flex-grow-1 justify-between  border-4 border-[var(--white)] shadow-lg bg-[var(--white)] p-4 rounded-2xl flex flex-col gap-2 items-center">
                <Pencil className="text-[var(--white)] p-4 w-[50px] h-[50px] bg-[var(--wine-red)] rounded-4xl" size={40} />
                <p className="text-center text-[var(--white)] z-10">
                  Got a crochet idea you'd love to see made? Just contact us and
                  tell us about your design! We're excited to help you create
                  something unique and beautiful.
                </p>
              </div>
              <div style={{maxWidth:"540px"}} className="is2 flex-grow-1 justify-between bg-[var(--white)] border-4 border-[var(--white)] shadow-lg p-4 rounded-2xl flex flex-col gap-2 items-center">
                <Heart className="text-[var(--white)] p-4 w-[50px] h-[50px] bg-[var(--wine-red)] rounded-4xl" size={40} />
                <p  className="text-center text-[var(--white)] z-10">
                 
                  See a design you like? Just send us a message with the item
                  name and how you'd like it styled. We'll create it exactly the
                  way you want it.
                </p>
              </div>
            </div>
            <div className="bg-[var(--white)] lg:w-[313px] w-full p-4 rounded-2xl relative flex flex-col gap-2 items-center">
              <Pin className="text-[var(--white)] p-4 w-[50px] h-[50px] bg-[var(--wine-red)] rounded-4xl" size={40} />
              <h3 style={{fontFamily: "DynaPuff"}}>FAQs</h3>
              <ul className="w-full flex flex-col">
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
                <li className={style}><span>Are you a scam</span><Plus className="w-[24px] h-[24px] rounded-4xl p-1 bg-[var(--grey)] text-[var(--white)]" size={20} /></li>
              </ul>
              <img className="absolute top-0 start-0 tape1" src={tape} alt="" />
              <img className="absolute bottom-0 end-0 tape2" src={tape} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
