import React from "react";

const FindOpportunity = () => {
  return (
    <div className="w-full h-fit flex  mt-[40px] pb-[2rem]">
      <img src="/assets/images/hero4.svg" alt="" />
      <div className="w-[45%] h-[691px] bg-blue text-white p-[20px]">
        <p className="font-RubikRegular font-[500] text-[20px] leading-[24px] ">
          FOR CLIENTS
        </p>
        <p className="mt-[4rem] font-GeorgiaRegular font-[400] text-[60px] leading-[68px] max-w-[535px]">
          Find great work & connect with new clients everyday
        </p>
        <p className="mt-[50px] font-RubikRegular font-[400] text-[18px] leading-[21px] max-w-[459px]">
          Meet clients you are excited to work and take your career or business
          to new heights.
        </p>
        <button className="bg-white font-RubikRegular font-[400] text-[#000000] py-[5px] px-[15px] text-[16px] mt-[50px] rounded-[5px]">
          Find Opportunities
        </button>
      </div>
    </div>
  );
};

export default FindOpportunity;
