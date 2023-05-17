import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLand = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center font-RubikRegular text-[16px] text-white px-[10px] md:px-[88px] md:pt-[20px] ">
        <img
          src="/assets/images/logo.png"
          alt=""
          className="h-[65px] w-[301px] cursor-pointer"
        />
        <div className="flex invisible md:visible">
          <div>
            <Link to={"/"}>Find Talent</Link>
            <Link to={"/"} className="ml-[20px]">
              Find Work
            </Link>
            <Link to={"/"} className="ml-[20px]">
              Why Valuefinders
            </Link>
          </div>
          <div className="ml-[4rem] ">
            <Link to={"/"}>Login</Link>
            <Link className="py-[5px] px-[12px] bg-orange text-white ml-[20px] rounded-[5px] drop-shadow h-[55px] w-[122px]">
              SignUp
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* <img
        src="/assets/images/menuBar.png"
        alt=""
        className="md:invisible cursor-pointer absolute top-[20px] right-[30px] z-[2]"
        onClick={() => setMenu(!menu)}
      />

      <div
        className={`flex flex-col text-[12px] items-center  transition-all ease-in-out duration-300 md:invisible translate-y-[0]${
          !menu && "translate-y-[-200%] hidden"
        }`}
      >
        <ul className="flex flex-col text-white text-center font-RubikRegular">
          <Link to={"/"} className="">
            Find Talent
          </Link>
          <Link to={"/"} className="mt-[20px]">
            Find Work
          </Link>
          <Link to={"/"} className="mt-[20px]">
            Why Valuefinders
          </Link>
          <Link to={"/"} className="mt-[20px]">
            Login
          </Link>
          <Link className="py-[5px] px-[12px] bg-orange text-white  rounded-[5px] drop-shadow mt-[20px]">
            SignUp
          </Link>
        </ul>
      </div> */}
    </>
  );
};

export default HeaderLand;
