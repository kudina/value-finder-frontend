import React from "react";

const Description = () => {
  return (
    <div className="w-full h-fit bg-white mt-[10rem] flex px-[50px] gap-[20px] text-black">
      <div className="grow h-[791px] bg-grey rounded-tl-[57px] rounded-br-[57px] py-[30px] px-[20px]">
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

      <img src="/assets/images/hero3.svg" alt="" className="w-[599px]" />
    </div>
  );
};

export default Description;
