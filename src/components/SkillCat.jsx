import React from "react";

const SkillCat = () => {
  return (
    <div className="lg:mt-20 mt-10 mb-10 lg:mr-20 mr-5 lg:ml-20 ml-5">
      <p className="font-GeorgiaRegular
       font-[400]  text-black lg:text-4xl text-2xl text-center" >
        Browse Skill by category
      </p>
      <div className="flex lg:gap-[35px] gap-[6px]  justify-evenly lg:mt-10 mt-5 flex-wrap w-full ">
        <div className="flex flex-col items-center w-[49%] h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/code.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Programming & Tech</p>
        </div>
        <div className="flex w-[49%] flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/writing.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Writing & Translation</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[49%] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/design.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Graphics & Design</p>
        </div>
        <div  className="flex w-[49%] flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/music.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Music & Entertainment</p>
        </div>
        <div  className="flex flex-col  w-[49%] items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/group.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Beauty & Lifestyle</p>
        </div>
        <div  className="flex w-[49%] flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/code.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Programming & Tech</p>
        </div>
        <div  className="flex w-[49%]  flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/writing.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Writing & Translation</p>
        </div>
        <div  className="flex w-[49%]  flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/design.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Graphics & Design</p>
        </div>
        <div  className="flex w-[49%]  flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/music.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Music & Entertainment</p>
        </div>
        <div  className="flex w-[49%]  flex-col items-center h-[157px] lg:w-[276px] p-[10px] rounded-[5px] shadow-shadow1 cursor-pointer">
          <img src="/assets/images/group.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px] text-sm">Beauty & Lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCat;
