import React from "react";

const SkillCat = () => {
  return (
    <div className="p-[50px]">
      <p className="font-GeorgiaRegular font-[400] text-[40px] text-black leading-[68px]">
        Browse Skill by category
      </p>
      <div className="flex gap-[20px] mt-[20px]">
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/code.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Programming & Tech</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/writing.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Writing & Translation</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/design.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Graphics & Design</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/music.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Music & Entertainment</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/group.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Beauty & Lifestyle</p>
        </div>
      </div>

      <div className="flex gap-[20px] mt-[20px]">
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/code.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Programming & Tech</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/writing.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Writing & Translation</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/design.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Graphics & Design</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/music.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Music & Entertainment</p>
        </div>
        <div className="flex flex-col items-center h-[157px] w-[276px] p-[10px] rounded-[5px] shadow-shadow cursor-pointer">
          <img src="/assets/images/group.png" alt="" className="mt-[5px]" />
          <p className="mt-[20px]">Beauty & Lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCat;
