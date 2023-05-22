import React from "react";

import "../index.css";

const Description = () => {
  return (
    <div className=" bg-white flex lg:flex-row flex-col  mt-[150px] mb-10   text-black lg:ml-20 lg:mr-20 ml-5 mr-5 ">
      <div className=" bg-grey  py-[30px] px-[20px] lg:w-[50%]">
        <p className="font-GeorgiaRegular font-[400] lg:text-[40px] lg:leading-[45px] lg:max-w-[468px] text-[32px] leading-[40px] ">
          A whole world of freelance talent at your fingertip
        </p>
        <div className="mt-[50px]">
          <p className="font-GeorgiaRegular font-[400] text-[30px] leading-[34px] max-w-[432px]">
            Utmost proximity consideration
          </p>
          <p className="mt-[20px] font-RubikRegular font-[500]  text-[18px] leading-[21px] text-[#000000] max-w-[391px]">
            Check any pro's work sample, clients review and identity
            verification
          </p>
        </div>
        <div className="mt-[50px]">
          <p className="font-GeorgiaRegular font-[400] text-[30px] leading-[34px] max-w-[432px]">
            Timely Remuneration
          </p>
          <p className="mt-[20px] font-RubikRegular font-[500]  text-[18px] leading-[21px] text-[#000000] max-w-[391px]">
            Check any pro's work sample, clients review and identity
            verification
          </p>
        </div>
        <div className="mt-[50px]">
          <p className="font-GeorgiaRegular font-[400] text-[30px] leading-[34px] max-w-[432px]">
            No cost until you hire
          </p>
          <p className="mt-[20px] font-RubikRegular font-[500]  text-[18px] leading-[21px] text-[#000000] max-w-[391px]">
            Check any pro's work sample, clients review and identity
            verification
          </p>
        </div>
        <div className="mt-[50px]">
          <p className="font-GeorgiaRegular font-[400] text-[30px] leading-[34px] max-w-[432px]">
            Safe and secure
          </p>
          <p className="mt-[20px] font-RubikRegular font-[500]  text-[18px] leading-[21px] text-[#000000] max-w-[391px]">
            Check any pro's work sample, clients review and identity
            verification
          </p>
        </div>
      </div>
      <div className="lg:w-[50%]">
        {" "}
        <img src="/assets/images/hero3.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Description;
