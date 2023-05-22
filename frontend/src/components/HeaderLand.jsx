import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLand = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="hidden md:flex ml-20 mr-20 justify-between items-center font-RubikRegular text-[1rem]  text-white  md:px-[5px] md:pt-[20px]">
        <img
          src="/assets/images/logo.png"
          alt=""
          className="h-[4.06rem] w-[18.81rem] cursor-pointer"
        />
        <div className="flex ">
          <div>
            <Link to={"/"}>Find Talent</Link>
            <Link to={"/"} className="ml-[20px]">
              Find Work
            </Link>
            <Link to={"/"} className="ml-[20px]">
              Why Valuefinders
            </Link>
          </div>
          <div className="ml-[20px] lg:ml-[4rem]">
            <Link to={"/login"}>Login</Link>
            
              <Link
              to={"/register"}
              className="py-[10px] px-[20px] bg-orange text-white ml-[20px] rounded-[5px] drop-shadow h-[55px] w-[122px]"
            >
              SignUp
            </Link>
            
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-[3.06rem] w-[10.81rem] md:h-[4.06rem] md:w-[18.81rem] cursor-pointer md:hidden absolute top-[15px] left-[5px]"
      />

      <img
        src={`/assets/images/${menu ? "cancel" : "menuBar"}.png`}
        alt=""
        className="md:hidden cursor-pointer absolute top-[20px] right-[30px] z-[2]"
        onClick={() => setMenu(!menu)}
      />

      <div
        className={
          menu
            ? "flex flex-col absolute py-[2rem] right-[0] left-[0] text-[1rem] bg-green items-center transition-all ease-in-out duration-300 md:invisible transform-[none]"
            : "flex flex-col absolute  py-[2rem] right-[0] left-[0] text-[1rem] bg-green items-center transition-all ease-in-out duration-300 md:invisible transform translate-x-[-100%]"
        }
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
      </div>
    </>
  );
};

export default HeaderLand;
