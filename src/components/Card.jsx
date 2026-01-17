import "../style.css";
function Card({ name }) {
  return (
    <div
      
      className="lg:max-w-[275px] max-w-[150px]sm:max-w-[375px] sm:h-[300px] w-full justify-end lg:p-5 p-2 h-[265px] tex-shadow-lg Card border-4 border-[var(--white)] lg:rounded-4xl rounded-2xl shadow-lg flex flex-col  lg:h-[365px]"
    >
      <h3 className="font-medium text-[var(--white)] z-10 lg:leading-7 leading-4 text-xl text-center lg:text-3xl" style={{ fontFamily: "DynaPuff" }}>{name}</h3>
      <button
        style={{ fontFamily: "DynaPuff" }}
        className="shadow  bg-[var(--white)] mt-3 z-10 lg:text-base  text-black font-bold rounded-2xl lg:rounded-4xl lg:py-[15px] lg:px-[46px]"
      >
        Explore
      </button>
    </div>
  );
}

export default Card;
