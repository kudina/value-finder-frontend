const Index = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-[36px]">
        <div className="font-RubikRegular font-[500] text-[1.56rem] leading-[30px] text-greyBlack">
          Welcome Back, Let’s find you a Job
        </div>
        <div className="flex items-center">
          <div className="min-w-[139px] flex  py-[5px]  border-r-lightGrey border-r-[1px] mr-[24px]">
            <img
              src="/assets/images/notification.png"
              alt=""
              className="h-[3.13rem] w-[3.13rem]"
            />
            <img
              src="/assets/images/message.png"
              alt=""
              className="h-[3.13rem] w-[3.13rem] ml-[15px]"
            />
          </div>

          <div className="flex items-center">
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[3.75rem] w-[3.75rem] mr-[15px]"
            />
            <div>
              <p className="font-RubikRegular font-[500] text-[1.56rem] leading-[30px] text-greyBlack">
                Uhembe Nelson
              </p>
              <p className="font-RubikRegular font-[400] text-[1rem] leading-[19px] text-lightGrey">
                uhembenelson@gmail.com
              </p>
            </div>
            <img
              src="/assets/images/arrowDown.png"
              alt=""
              className="h-[15px] w-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[50px]">
        <div className="w-[25%] pl-[36px]">
          <div className="flex justify-between flex-wrap items-center bg-green h-fit w-full  rounded-[21px] px-[17px] py-[20px]">
            <p className="font-RubikRegular font-[500] text-white text-[1.13rem] leading-[21px]">
              Search result
            </p>
            <p className="font-RubikRegular font-[300] text-white text-[0.88rem] leading-[17px]">
              29 Jobs found
            </p>
          </div>

          {/* Result */}
          <div className="bg-boxGrey px-[17px] py-[30px] rounded-[21px] mt-[26px]">
            <div className="flex items-center">
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
                  No 40, ID Gyan House, Jos
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[18px]">
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                $10/hour
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                Part-Time
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white w-[5.06rem] text-center">
                Expert
              </div>
            </div>
            <div className="mt-[11px] font-RubikRegular font-[300] text-[0.75rem] text-lightGrey leading-[14px]">
              Requirements: Must understand Agile Development methodology, must
              have a degree in web development must be passionate about
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
          {/* Result */}

          <div className="bg-boxGrey px-[17px] py-[30px] rounded-[21px] mt-[26px]">
            <div className="flex items-center">
              <img
                src="/assets/images/dp2.png"
                alt=""
                className="w-[3.75rem] h-[3.75rem] mr-[13px]"
              />
              <div>
                <p className="font-RubikRegular font-[400] text-[0.88rem] text-greyBlack leading-[17px]">
                  Nike Studios
                </p>
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                  Frontend Designer
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px]">
                  No 40, ID Gyan House, Jos
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[18px]">
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                $10/hour
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                Part-Time
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white w-[5.06rem] text-center">
                Expert
              </div>
            </div>
            <div className="mt-[11px] font-RubikRegular font-[300] text-[0.75rem] text-lightGrey leading-[14px]">
              Requirements: Must understand Agile Development methodology, must
              have a degree in web development must be passionate about
              resolving user pain ......
            </div>
            <hr className="my-[14px] text-[#DCDCDC] text-[1px]" />
            <div className="flex items-center justify-between">
              <p className="font-RubikRegular font-[400] text-[0.63rem] text-black leading-[12px]">
                Payment verified $10,000+ spent
              </p>
              <p className="font-RubikRegular font-[400] text-[0.63rem] text-[#8E8E8E] leading-[12px]">
                2h ago
              </p>
            </div>
          </div>

          {/* Result */}

          <div className="bg-boxGrey px-[17px] py-[30px] rounded-[21px] mt-[26px]">
            <div className="flex items-center">
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
            <div className="flex items-center mt-[18px]">
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                $10/hour
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[30px] w-[5.06rem] text-center">
                Part-Time
              </div>
              <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white w-[5.06rem] text-center">
                Expert
              </div>
            </div>
            <div className="mt-[11px] font-RubikRegular font-[300] text-[0.75rem] text-lightGrey leading-[14px]">
              Requirements: Must understand Agile Development methodology, must
              have a degree in web development must be passionate about
              resolving user pain ......
            </div>
            <hr className="my-[14px] text-[#DCDCDC] text-[1px]" />
            <div className="flex items-center justify-between">
              <p className="font-RubikRegular font-[400] text-[0.63rem] text-black leading-[12px]">
                Payment verified $10,000+ spent
              </p>
              <p className="font-RubikRegular font-[400] text-[0.63rem] text-[#8E8E8E] leading-[12px]">
                5h ago
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="h-[3.81rem] rounded-[21px] bg-boxGrey w-full flex items-center px-[10px] mb-[35px]">
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

          <div className="w-full bg-boxGrey rounded-[21px] px-[25px] pt-[30px] pb-[50px]">
            <div className="flex items-center">
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
            <div className="flex items-center mt-[18px]">
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
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[21px] mt-[8px]">
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
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[21px] mt-[8px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
              <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[21px] mt-[8px]">
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
        <div className="w-[25%] pr-[44px]">
          <div className="w-full bg-boxGrey flex flex-col items-center text-center py-[31px] rounded-[21px]">
            <img src="/assets/images/dp2.png" alt="" />
            <div className="mt-[11px]">
              <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                Uhembe Nelson
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
          <div className="bg-boxGrey mt-[27px] p-[20px] rounded-[21px]">
            <div className="flex gap-[14px]">
              <div className="bg-white rounded-[10px] p-[15px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Interviews
                </p>
                <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  10
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Interviews
                </p>
              </div>
              <div className="bg-white rounded-[10px] p-[15px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Profile views
                </p>
                <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  200
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Views
                </p>
              </div>
            </div>
            <div className="bg-white w-full p-[15px] flex flex-col items-center mt-[17px] rounded-[10px]">
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Experience
              </p>
              <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
                12
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Years
              </p>
            </div>
            <div className="bg-white w-full p-[15px] flex flex-col items-center mt-[17px] rounded-[10px]">
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Applied Jobs
              </p>
              <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
                12
              </p>
              <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                Jobs
              </p>
            </div>
            <div className="flex gap-[14px] mt-[17px]">
              <div className="bg-white rounded-[10px] p-[15px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs Completed
                </p>
                <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
                  20
                </p>
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Complete
                </p>
              </div>
              <div className="bg-white rounded-[10px] p-[15px]">
                <p className="font-RubikRegular font-[400] text-[0.75rem] text-black leading-[14px]">
                  Jobs in Progress
                </p>
                <p className="font-RubikRegular font-[600] text-[1.13rem] text-black leading-[21px] py-[15px]">
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
