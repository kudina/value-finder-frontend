import HeaderLand from "./HeaderLand";

const BannerLand = () => {
  return (
    <div className="h-fit w-full bg-green">
      <HeaderLand />
      <div className="flex justify-between pr-[50px] mt-[20px] text-white">
        <img
          src="/assets/images/hero1.svg"
          alt=""
          className="h-[717px] w-[430px]"
        />
        <div className="w-[60%] mt-[82px]">
          <p className="font-GeorgiaSemiBold text-[60px] leading-[68px]">
            Find the best freelance services to meet your needs
          </p>
          <p className="mt-[20px] text-[20px] leading-[29px] font-RubikRegular font-[500] ">
            Do you desire to get value for money engaging an Artisan...or offer
            value for money as an Artisan?
          </p>
          <div className="flex bg-white mt-[20px] items-center pl-[12px] rounded-[5px]">
            <img src="/assets/images/searchIcon.png" alt="" />
            <input
              type="text"
              className="grow px-[5px] border-0 outline-0 text-black "
            />
            <span className="bg-orange px-[12px] py-[5px] rounded-tr-[5px] rounded-br-[5px]">
              Search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLand;
