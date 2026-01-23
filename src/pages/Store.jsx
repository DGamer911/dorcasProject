import NavBar from "../components/Navbar";
import "../style.css";
import { Shirt, Backpack, Key } from "lucide-react";

function Store() {
  return (
    <div className="bg-[var(--grey)] w-full min-h-screen flex flex-col items-center lg:px-50 px-0 ">
      <NavBar />
      <section className="mt-20 bg-[var(--grey2)] w-full lg:px-30 px-7 rounded-4xl">
        <div className="flex shadow-lg flex-col gap-1 py-8 lg:px-24 px-5 rounded-b-4xl  bg-[var(--white)]">
          <div>
            <h2
              className="lg:text-7xl text-5xl heroText  text-center leading-9 lg:leading-12 text-shadow-lg font-black "
              style={{
                fontFamily: "DynaPuff",
                transform: "translateY(-70%)",
              }}
            >
              <span
                className="text-[var(--white)]"
                style={{ fontFamily: "DynaPuff" }}
              >
                RODDOB'S
              </span>
              <br></br>
              <span
                className="text-[var(--wine-red)]"
                style={{ fontFamily: "DynaPuff" }}
              >
                crochet
              </span>
            </h2>
          </div>
          <div className="flex gap-3  justify-around">
            <button className="bg-[var(--grey2)] py-3 lg:flex hidden border border-transparent hover:border-[var(--grey)]  hover:bg-[var(--white)] duration-300 shadow transition-all px-4 shadow rounded-4xl">
              Filters
            </button>

            <input
              type="text"
              className="bg-[var(--grey2)] py-3 px-4 border focus:border-[var(--grey)] focus:bg-[var(--white)] focus:outline-none  border-transparent hover:border-[var(--grey)]  hover:bg-[var(--white)] duration-300 drop-shadow-xl transition-all rounded-4xl grow-1 "
              placeholder="Search here for items"
            />

            <button className="bg-[var(--grey2)] py-3 lg:flex hidden  border border-transparent hover:border-[var(--grey)]  hover:bg-[var(--white)] duration-300 shadow transition-all px-4 shadow  rounded-4xl">
              Sort By
            </button>
          </div>
        </div>
        <div>
          {/* Products grid will go here */}
          <div className="flex overflow-x-scroll no-scrollbar lg:overflow-hidden gap-5  my-3">
            <button className="flex gap-2 bg-[var(--white)] grow-1 justify-center border border-[var(--grey)] hover:bg-[var(--white2)] transition-all drop-shadow-lg rounded-4xl py-3 px-4">
              <span>Fashion</span> <Shirt size={20} />
            </button>
            <button className="flex gap-2 bg-[var(--white)] grow-1 justify-center border border-[var(--grey)] hover:bg-[var(--white2)] transition-all drop-shadow-lg rounded-4xl py-3 px-4">
              <span>Accessories</span> <Key size={20} />
            </button>
            <button className="flex gap-2 bg-[var(--white)] grow-1 justify-center border border-[var(--grey)] hover:bg-[var(--white2)] transition-all drop-shadow-lg rounded-4xl py-3 px-4">
              <span>Bags</span> <Backpack size={20} />
            </button>
          </div>
          <div className="rounded-4xl flex items-end justify-end p-4 border border-8 border-[var(--white)] drop-shadow-2xl lg:h-[260px] h-[200px] imgBanner1 ">
            <h4
              className="lg:text-4xl text-xl heroText  text-center lg:leading-6 leading-3 text-shadow-lg font-black "
              style={{
                fontFamily: "DynaPuff",
              }}
            >
              <span
                className="text-[var(--white)]"
                style={{ fontFamily: "DynaPuff" }}
              >
                Crochet
              </span>
              <br></br>
              <span
                className="text-[var(--accent)]"
                style={{ fontFamily: "DynaPuff" }}
              >
                Fashion
              </span>
            </h4>
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
