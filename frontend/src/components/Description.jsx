import React from "react";

import "../index.css";

const Description = () => {
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center md:flex-row mt-[24.5rem] md:mt-[30rem] md:mt-[10rem] gap-[20px] px-[20px] md:px-[6.25rem] text-black">
      <div className="md:max-w-[900px] max-w-full h-fit bg-grey rounded-tl-[57px] rounded-br-[57px] py-[30px] px-[20px]">
        <p className="font-GeorgiaRegular font-[400] text-[40px] leading-[45px] max-w-[468px] ">
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

      <div className="max-w-[599px] h-full">
        {" "}
        <img src="/assets/images/hero3.svg" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Description;
