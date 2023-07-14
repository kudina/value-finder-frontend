import React from "react";

const Posts = ({ posts, setFunc }) => {
  return (
    <>
      {posts?.data?.map((post) => (
        <div
          key={post?._id}
          className="bg-boxGrey px-[17px] py-[30px] rounded-[21px] my-[26px] cursor-pointer"
          onClick={() => setFunc(post?._id)}
        >
          <div className="flex items-center gap-y-[10px] flex-wrap">
            <img
              src="/assets/images/dp2.png"
              alt=""
              className="w-[3.75rem] h-[3.75rem] mr-[13px]"
            />
            <div>
              <p className="font-RubikRegular font-[400] text-[0.88rem] text-greyBlack leading-[17px]">
                Coka cola Studios
              </p>
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                {post?.title}
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px]">
                {post?.address}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-[18px] flex-wrap gap-y-[10px]">
            <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[10px] md:mr-[10px] w-[5.06rem] text-center">
              {post?.salary}
            </div>
            <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[10px] md:mr-[10px] w-[5.06rem] text-center">
              {post?.jobType}
            </div>
            <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white w-[5.06rem] text-center">
              {post?.skillLevel}
            </div>
          </div>
          <div className="mt-[11px] font-RubikRegular font-[300] text-[0.75rem] text-lightGrey leading-[16px]">
            {post?.jobDescription}
          </div>
          <hr className="my-[14px] text-[#DCDCDC] text-[1px]" />
          <div className="flex items-center justify-between">
            <p className="font-RubikRegular font-[400] text-[0.63rem] text-black leading-[12px]">
              Payment verified $10,000+ spent
            </p>
            <p className="font-RubikRegular font-[400] text-[0.63rem] text-[#8E8E8E] leading-[12px]">
              1h ago
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
