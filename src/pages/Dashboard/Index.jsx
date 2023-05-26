import { useState } from "react";
import {
  useGetCurrentUserQuery,
  useGetPostsQuery,
} from "../../features/api/apiSlice";

import { FaRegBell, FaRegEnvelope, FaAngleDown } from "react-icons/fa";

const Index = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  const { data: posts } = useGetPostsQuery();

  return (
    <div className="px-[35px] md:px-0">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between items-center md:px-[36px] py-[36px]">
        <div className="font-RubikRegular font-[500] text-[1.56rem] leading-[30px] text-greyBlack">
          Welcome Back, Let’s find you a Job
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mt-[35px] md:mt-0">
          <div className="w-[139px] hidden md:flex  py-[5px]  md:border-r-lightGrey md:border-r-[1px]  md:mr-[24px]">
            <div className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px] mr-[10px]">
              <FaRegEnvelope className="text-orange font-[200] h-[1.5rem] md:h-[2rem] w-[0.8rem] md:w-[1.63rem]" />
            </div>
            <div className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px]">
              <FaRegBell className="text-orange font-[200] h-[1.13rem] md:h-[1.63rem] w-[0.8rem] md:w-[1.5rem]" />
            </div>
          </div>

          <div className="flex items-center">
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[3.75rem] w-[3.75rem] mr-[15px]"
            />
            <div>
              <p className="font-RubikRegular font-[500] text-[1.2rem] md:text-[1.56rem] leading-[30px] text-greyBlack">
                {isSuccess &&
                  currentUser?.firstName + " " + currentUser?.lastName}
              </p>
              <p className="font-RubikRegular font-[400] text-[0.8rem] md:text-[1rem] leading-[19px] text-lightGrey break-words w-full">
                {isSuccess && currentUser?.email}
              </p>
              <div className="w-[139px] flex md:hidden  py-[5px]  self-start  md:border-r-lightGrey md:border-r-[1px]  md:mr-[24px]">
                <div className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px] mr-[10px]">
                  <FaRegEnvelope className="text-orange font-[200] h-[1.5rem] md:h-[2rem] w-[0.8rem] md:w-[1.63rem]" />
                </div>
                <div className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px]">
                  <FaRegBell className="text-orange font-[200] h-[1.13rem] md:h-[1.63rem] w-[0.8rem] md:w-[1.5rem]" />
                </div>
              </div>
            </div>
            <div onClick={() => setShowProfile(!showProfile)}>
              <FaAngleDown
                className={`text-grey w-[10px] h-[27px] ml-[10px] ${
                  showProfile && "rotate-180"
                }`}
              />
            </div>
          </div>
        </div>
        <div
          className={`relative w-full mb-[60px] md:hidden ${
            !showProfile && "hidden"
          }`}
        >
          <div className="w-full md:w-[25%] md:pr-[44px] absolute left-0 right-0 top-[20px]">
            <div className="w-full bg-boxGrey flex flex-col items-center text-center py-[31px] rounded-[21px]">
              <img src="/assets/images/dp2.png" alt="" />
              <div className="mt-[11px]">
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                  {isSuccess &&
                    currentUser?.firstName + " " + currentUser?.lastName}
                </p>
                <p className="font-RubikRegular font-[300] text-[0.88rem] text-greyBlack leading-[17px] mt-[4px]">
                  UI/UX Designer
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px] mt-[4px]">
                  No 20 Church Street Jos
                </p>
                <button className="mt-[19px] w-full font-RubikRegular font-[500] text-[0.88rem] text-black bg-white rounded-[5px] py-[8px]">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="bg-boxGrey mt-[27px] p-[20px] rounded-[21px] text-center ">
              <div className="flex gap-[14px] ">
                <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Interviews
                  </p>
                  <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                    10
                  </p>
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Interviews
                  </p>
                </div>
                <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Profile views
                  </p>
                  <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                    200
                  </p>
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Views
                  </p>
                </div>
              </div>
              <div className="bg-white w-full p-[10px] flex flex-col items-center mt-[17px] rounded-[10px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Experience
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  12
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Years
                </p>
              </div>
              <div className="bg-white w-full p-[10px] flex flex-col items-center mt-[17px] rounded-[10px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Applied Jobs
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  12
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs
                </p>
              </div>
              <div className="flex gap-[14px] mt-[17px] ">
                <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Jobs Completed
                  </p>
                  <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                    20
                  </p>
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Complete
                  </p>
                </div>
                <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Jobs in Progress
                  </p>
                  <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                    2
                  </p>
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                    Jobs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Section */}
      <div className="flex flex-col md:flex-row w-full md:gap-[50px]">
        {/* Left Panel */}
        {/* Mobile Search Box */}
        <div className="h-[3.81rem] rounded-[21px] bg-boxGrey w-full flex items-center px-[10px] mb-[35px] md:hidden">
          <img
            src="/assets/images/search.png"
            alt=""
            className="w-[1.94rem] h-[1.94rem]"
          />
          <input
            type="text"
            placeholder="Search"
            className="grow font-RubikRegular font-[300] text-[1.13rem] text-black leading-[21px] placeholder-black p-[5px] bg-boxGrey outline-0"
          />
        </div>
        <div className="w-full md:w-[25%] md:pl-[36px]">
          <div className="flex justify-between flex-wrap items-center bg-green h-fit w-full  rounded-[21px] px-[17px] py-[20px]">
            <p className="font-RubikRegular font-[500] text-white text-[1.13rem] leading-[21px]">
              Search result
            </p>
            <p className="font-RubikRegular font-[300] text-white text-[0.88rem] leading-[17px]">
              29 Jobs found
            </p>
          </div>

          {/* Posts */}
          {posts?.data?.map((post) => (
            <div
              key={post?._id}
              className="bg-boxGrey px-[17px] py-[30px] rounded-[21px] my-[26px]"
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
                    Frontend Designer
                  </p>
                  <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px]">
                    {post?.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-[18px] flex-wrap gap-y-[10px]">
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                  {post?.salary}
                </div>
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                  Part-Time
                </div>
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white w-[5.06rem] text-center">
                  {post?.skillLevel}
                </div>
              </div>
              <div className="mt-[11px] font-RubikRegular font-[300] text-[0.75rem] text-lightGrey leading-[16px]">
                Requirements: Must understand Agile Development methodology,
                must have a degree in web development must be passionate about
                resolving user pain ......
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
        </div>
        {/* Middle Panel */}
        <div className="w-full md:w-[50%]">
          {/* Search Box */}
          <div className="h-[3.81rem] rounded-[21px] bg-boxGrey w-full items-center px-[10px] mb-[35px] hidden md:flex">
            <img
              src="/assets/images/search.png"
              alt=""
              className="w-[1.94rem] h-[1.94rem]"
            />
            <input
              type="text"
              placeholder="Search"
              className="grow font-RubikRegular font-[300] text-[1.13rem] text-black leading-[21px] placeholder-black p-[5px] bg-boxGrey outline-0"
            />
          </div>
          {/* Post Details */}

          <div className="w-full bg-boxGrey rounded-[21px] px-[25px] pt-[30px] pb-[50px] mb-[35px]">
            <div className="flex items-center flex-wrap gap-y-[10px]">
              <img
                src="/assets/images/dp2.png"
                alt=""
                className="w-[3.75rem] h-[3.75rem] mr-[13px]"
              />
              <div>
                <p className="font-RubikRegular font-[400] text-[0.88rem] text-greyBlack leading-[17px]">
                  Adidas Studios
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                  Frontend Designer
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px]">
                  No 40, ID Gyan House, Jos
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[18px] flex-wrap gap-y-[10px]">
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-fit rounded-[5px] px-[15px] text-center">
                <p>Salary</p>
                <p>$10/hour</p>
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-fit rounded-[5px] px-[15px] text-center">
                <p>Job-Type</p>
                <p>Part-Time</p>
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-fit rounded-[5px] px-[15px] text-center">
                <p>Number of Applicants</p>
                <p>20</p>
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white w-fit rounded-[5px] px-[15px] text-center">
                <p>Skill</p>
                <p>Expert</p>
              </div>
            </div>
            <div className="mt-[19px] w-full">
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                Job Description
              </p>
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
            <div className="mt-[19px] w-full">
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                Requirements
              </p>
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
            <button className="w-full rounded-[21px] bg-green text-white mt-[39px] py-[16px]">
              Apply Now
            </button>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-full md:w-[25%] md:pr-[44px] hidden md:block">
          <div className="w-full bg-boxGrey md:flex flex-col items-center text-center py-[31px] rounded-[21px]">
            <img src="/assets/images/dp2.png" alt="" />
            <div className="mt-[11px]">
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                {isSuccess &&
                  currentUser?.firstName + " " + currentUser?.lastName}
              </p>
              <p className="font-RubikRegular font-[300] text-[0.88rem] text-greyBlack leading-[17px] mt-[4px]">
                UI/UX Designer
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px] mt-[4px]">
                No 20 Church Street Jos
              </p>
              <button className="mt-[19px] w-full font-RubikRegular font-[500] text-[0.88rem] text-black bg-white rounded-[5px] py-[8px]">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="bg-boxGrey mt-[27px] p-[20px] rounded-[21px] text-center">
            <div className="flex gap-[14px] ">
              <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Interviews
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  10
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Interviews
                </p>
              </div>
              <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Profile views
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  200
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Views
                </p>
              </div>
            </div>
            <div className="bg-white w-full p-[10px] flex flex-col items-center mt-[17px] rounded-[10px]">
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Experience
              </p>
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                12
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Years
              </p>
            </div>
            <div className="bg-white w-full p-[10px] flex flex-col items-center mt-[17px] rounded-[10px]">
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Applied Jobs
              </p>
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                12
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Jobs
              </p>
            </div>
            <div className="flex gap-[14px] mt-[17px] ">
              <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs Completed
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  20
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Complete
                </p>
              </div>
              <div className="bg-white rounded-[10px] p-[10px] w-[48%]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs in Progress
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  2
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
