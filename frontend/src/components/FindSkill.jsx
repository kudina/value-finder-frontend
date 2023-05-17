import React from "react";

const FindSkill = () => {
  return (
    <div className=" bg-white w-full px-[100px]">
      <div className="w-full h-[713px] bg-hero2 text-white relative">
        <p className="pt-[20px] pl-[37px] font-RubikRegular font-[500] text-[20px] leading-[24px]">
          FOR CLIENTS
        </p>
        <p className="mt-[40px] ml-[37px] font-GeorgiaRegular font-[400] text-[60px] leading-[68px] max-w-[509px]">
          Find your desired skill, just few clicks away
        </p>
        <p className="mt-[20px] ml-[37px] font-RubikRegular font-[400] text-[18px] leading-[21px] max-w-[381px]">
          Work with the largest network of independent professionals and get
          things done from quick turnaround to big transformation
        </p>

        <div className="absolute flex justify-between gap-[40px] h-[10rem] bottom-[-30.5px]  w-full px-[37px] ">
          <div className="w-[443px] h-[237px] bg-green rounded-[5px] shadow-shadow2 py-[50px] pl-[30px] cursor-pointer flex flex-col justify-between hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] text-[30px] leading-[36px] max-w-[273px]">
              Post a job request & wait
            </p>
            <p className="font-RubikRegular font-[600] text-[20px] leading-[24px] max-w-[172px]">
              Skill Market Place
            </p>
          </div>
          <div className="w-[443px] h-[237px] bg-green rounded-[5px] shadow-shadow2 py-[50px] pl-[30px] cursor-pointer flex flex-col justify-between hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] text-[30px] leading-[36px] max-w-[273px]">
              Receive offers from talents
            </p>
            <p className="font-RubikRegular font-[600] text-[20px] leading-[24px] max-w-[172px]">
              Skill Market Place
            </p>
          </div>
          <div className="w-[443px] h-[237px] bg-green rounded-[5px] shadow-shadow2 py-[50px] pl-[30px] cursor-pointer flex flex-col justify-between  hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] text-[30px] leading-[36px] max-w-[175px]">
              Interview & Engage
            </p>
            <p className="font-RubikRegular font-[600] text-[20px] leading-[24px] max-w-[172px]">
              Screening
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSkill;
