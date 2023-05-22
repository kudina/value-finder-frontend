import HeaderLand from "./HeaderLand";
import { Link } from "react-router-dom";

const BannerLand = () => {
  return (
    <div className="h-full md:h-fit w-full bg-green">
      <HeaderLand />
      <div className="flex flex-col-reverse md:flex-row md:justify-between px-[20px] pt-[40px] text-white">
        <img
          src="/assets/images/hero1.svg"
          alt=""
          className="lg:ml-20"
          // className="h-[26.88rem] md:h-[717px] w-[44.81rem] md:w-[413px]"
        />
        <div className="w-ful md:w-[60%] lg:mt-[100px] md:mt-[82px] mt-[70px]">
          <p className="font-GeorgiaSemiBold lg:text-[3.75rem] text-[40px] lg:leading-[68px] lg:max-w-[45.44rem]">
            Find the best freelance services to meet your needs
          </p>
          <p className="mt-[20px] lg:text-[1.25rem] lg:leading-[29px] font-RubikRegular font-[500] lg:max-w-[37.06rem]">
            Do you desire to get value for money engaging an Artisan...or offer
            value for money as an Artisan?
          </p>
          <div className="">

            <div className="flex items-center  h-[50px] bg-white mt-10 mr-20 rounded-[5px] lg:w-[74%] w-full">
            <img src="/assets/images/searchIcon.png" alt=""  className="py-5 px-3"/>
            <input type="text" className="w-full px-[5px] border-0 outline-0 text-black " />
            <span className="bg-orange px-[12px] py-[5px] rounded-tr-[5px] rounded-br-[5px] h-full flex items-center">
                Search
              </span>

            </div>


           
          </div>
          <div className="flex mt-[15px]">
            <span>
              Popular:{" "}
              <Link className="border-b-orange border-b-[2px] ml-[10px]">
                Barbar
              </Link>
              <Link className="border-b-orange border-b-[2px] ml-[10px]">
                Driver
              </Link>
              <Link className="border-b-orange border-b-[2px] ml-[10px]">
                Plumber
              </Link>
              <Link className="border-b-orange border-b-[2px] ml-[10px]">
                Web Design
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLand;
