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
          className="h-[26.88rem] md:h-[717px] w-[44.81rem] md:w-[413px]"
        />
        <div className="w-ful md:w-[60%] mt-[40px] md:mt-[82px]">
          <p className="font-GeorgiaSemiBold text-[3.75rem] leading-[68px] max-w-[45.44rem]">
            Find the best freelance services to meet your needs
          </p>
          <p className="mt-[20px] text-[1.25rem] leading-[29px] font-RubikRegular font-[500] max-w-[37.06rem]">
            Do you desire to get value for money engaging an Artisan...or offer
            value for money as an Artisan?
          </p>
          <div className="w-full">
            <div className="flex bg-white mt-[20px] items-center  rounded-[5px] h-[3.44rem] w-full pl-[5px]">
              <img src="/assets/images/searchIcon.png" alt="" />
              <input
                type="text"
                className="w-full px-[5px] border-0 outline-0 text-black "
              />
              <span className="bg-orange px-[12px] py-[5px] rounded-tr-[5px] rounded-br-[5px] h-full flex items-center">
                Search
              </span>
            </div>
          </div>
          <div className="flex mt-[10px]">
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
