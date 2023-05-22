import React from "react";

const FindOpportunity = () => {
  return (
    <div className="bg-white mt-[40px] pb-[2rem] px-[20px] md:px-[6.25rem] flex ">
      <div className="h-fit flex  flex-col md:flex-row">
        <img
          src="/assets/images/hero4.svg"
          alt=""
          className="w-full md:w-[52.1%] md:h-[43.19rem]"
        />

        <div className="w-full md:w-[47.9%] max-w-[736px] bg-blue text-white flex flex-col items-center p-[20px]">
          <p className="font-RubikRegular font-[500] text-[20px] leading-[24px] self-start">
            FOR CLIENTS
          </p>
          <p className="mt-[4rem] font-GeorgiaRegular font-[400] text-[60px] leading-[68px] max-w-[535px]">
            Find great work
            <br /> & connect with new clients everyday
          </p>
          <p className="mt-[50px] font-RubikRegular font-[400] text-[18px] leading-[21px] max-w-[459px]">
            Meet clients you are excited to work and take your career or
            business to new heights.
          </p>
          <button className="bg-white font-RubikRegular font-[400] text-[#000000] py-[5px] px-[15px] text-[16px] mt-[50px] rounded-[5px] self-start">
            Find Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindOpportunity;
