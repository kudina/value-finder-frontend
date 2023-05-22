import React from "react";

const FindSkill = () => {
  return (
    <div className="bg-hero2  lg:bg-cover lg:ml-20 lg:mr-20 ">
   
      <div className="w-full h-[713px]  text-white relative">
        <p className="font-RubikRegular font-[500] text-[20px] lg:ml-10 ml-5 pt-10">
          FOR CLIENTS
        </p>
        <p className="lg:mt-[40px] mt-5 ml-5 lg:ml-[37px] font-GeorgiaRegular font-[400] text-4xl leading-[48px] lg:text-[3.75rem] lg:leading-[68px] lg:max-w-xl">
          Find your desired skill, just few clicks away
        </p>
        <p className="mt-[30px] lg:ml-[37px] ml-5 mr-5 font-RubikRegular  lg:text-[18px] text-[16px] leading-[28px] mb-4  lg:leading-[31px] lg:max-w-[30.81rem] lg:pb-[10px] md:pb-[0]">
          Work with the largest network of independent professionals and get
          things done from quick turnaround to big transformation
        </p>
         <div className="lg:flex lg:ml-10 lg:mr-10 lg:justify-between ">
        {/* <div className="absolute flex flex-col md:flex-row items-center md:justify-between gap-[40px] buttom-0 md:bottom-[-30.5px]  w-full lg:ml-10 lg:mr-10 "> */}
          <div className=" lg:w-[23rem] md:w-[23rem]  lg:mt-[150px] mt-5 ml-5 mr-5 lg:h-[168px]  bg-green rounded-[5px] shadow-shadow2 py-[20px] pl-[30px] cursor-pointer flex flex-col justify-between hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] lg:text-[30px] text-[23px]  mb-5 leading-[36px] lg:max-w-[273px]">
              Post a job request & wait
            </p>
            <p className="font-RubikRegular font-[600] lg:text-[1.25rem] leading-[24px] max-w-[172px]">
              Skill Market Place
            </p>
          </div>
          <div className=" lg:w-[23rem] md:w-[23rem]  lg:mt-[150px] mt-5 ml-5 mr-5 lg:h-[168px]  bg-green rounded-[5px] shadow-shadow2 py-[20px] pl-[30px] cursor-pointer flex flex-col justify-between hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] lg:text-[30px] text-[23px]  mb-5 leading-[36px] lg:max-w-[273px]">
            Receive offers from talents
            </p>
            <p className="font-RubikRegular font-[600] lg:text-[1.25rem] leading-[24px] max-w-[172px]">
              Skill Market Place
            </p>
          </div>

          <div className=" lg:w-[23rem] md:w-[23rem]  lg:mt-[150px] mt-5 ml-5 mr-5 lg:h-[168px]  bg-green rounded-[5px] shadow-shadow2 py-[20px] pl-[30px] cursor-pointer flex flex-col justify-between hover:scale-[1.05] transition-all ease-in-out duration-300">
            <p className="font-RubikRegular font-[600] lg:text-[30px] text-[23px]  mb-5 leading-[36px] lg:max-w-[273px]">
            Interview & Engage
            </p>
            <p className="font-RubikRegular font-[600] lg:text-[1.25rem] leading-[24px] max-w-[172px]">
            Screening
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSkill;
