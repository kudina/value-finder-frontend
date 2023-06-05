import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row bg-boxGrey w-full gap-[20px] pt-[30px] px-[30px] pb-[50px]">
        {/* Left Panel */}
        <div className="w-full md:w-[30%]">
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px]">
            {/* Profile Picture & Description */}
            <div className="w-full flex justify-center p-[20px]">
              <div className="relative">
                <img
                  src="/assets/images/profileDp.png"
                  alt=""
                  className="w-[12.56rem] h-[12.19rem]"
                />
                <div className="bg-green flex items-center justify-center h-[2.56rem] w-[7rem] rounded-[60px] text-white absolute left-[20%] bottom-[-10%] font-RubikRegular font-[500] leading-[30px]">
                  <img
                    src="/assets/images/star.png"
                    alt=""
                    className="w-[2.19rem] h-[2.50rem] mr-[10px]"
                  />
                  5
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex flex-col items-center">
              <p className="font-RubikRegular text-[1.5rem] text-[#4A4B4A] font-[500] leading-[30px]">
                Stimela Flickerz
              </p>
              <div className="flex items-center mt-[15px] text-[0.85rem] text-[#858585] leading-[17px]">
                <img
                  src="/assets/images/location.png"
                  alt=""
                  className="w-[1.1rem] h-[1.5rem] mr-[10px]"
                />{" "}
                <span className="mr-[10px]">Abuja, Nigeria </span>-
                <span className="ml-[10px]">7.49 am local time</span>
              </div>
            </div>
            <div className="w-full flex border-t-[1px] border-t-[#CDCBCB] mt-[20px] pb-[10px]">
              <div className="w-[50%] flex flex-col items-center p-[30px] border-r-[1px] border-r-[#CDCBCB]">
                <p className="text-black text-[1.5rem] font-RubikRegular font-[500] leading-[36px]">
                  27
                </p>
                <p className="text-[#858585] text-[1.1rem] font-RubikRegular font-[400] leading-[21px] mt-[10px]">
                  cients
                </p>
              </div>
              <div className="w-[50%] flex flex-col items-center p-[30px]">
                <p className="text-black text-[1.5rem] font-RubikRegular font-[500] leading-[36px]">
                  N23,340
                </p>
                <p className="text-[#858585] text-[1.1rem] font-RubikRegular font-[400] leading-[21px] mt-[10px]">
                  Earned
                </p>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="mt-[50px] w-full h-fit bg-white shadow-shadow3 rounded-[5px] p-[20px]">
            <p className="text-center text-[1.5rem] font-[500] text-black leading-[29px]">
              Contact information
            </p>
            <div className="mt-[20px]">
              <div className="flex w-full justify-between items-center border-t-[1px] border-t-[#DAD5D5] py-[20px]">
                <img
                  src="/assets/images/drafts.png"
                  alt=""
                  className="h-[1.58rem] w-[1.68rem]"
                />
                <span className="text-[0.88rem] font-[400] text-[#837E7E] leading-[19px] max-w-[16.31rem]">
                  stimela@yaoo.com
                </span>{" "}
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="h-[1.20rem] w-[1.18rem]"
                />
              </div>
              <div className="flex w-full justify-between border-t-[1px] border-t-[#DAD5D5] py-[20px]">
                <img
                  src="/assets/images/call.png"
                  alt=""
                  className="h-[1.58rem] w-[1.68rem]"
                />
                <span className="text-[0.88rem] font-[400] text-[#837E7E] leading-[19px] max-w-[16.31rem]">
                  +234 789 78900 0
                </span>
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="h-[1.20rem] w-[1.18rem]"
                />
              </div>
              <div className="flex w-full justify-between border-t-[1px] border-t-[#DAD5D5] py-[20px]">
                <img
                  src="/assets/images/home.png"
                  alt=""
                  className="h-[1.58rem] w-[1.68rem]"
                />
                <span className="text-[0.88rem] font-[400] text-[#837E7E] leading-[19px] max-w-[16.31rem]">
                  No 56 Around old redeem FHA Lugbe Abuja
                </span>{" "}
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="h-[1.20rem] w-[1.18rem]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Middle Panel */}
        <div className="w-full md:w-[40%]">
          {/* Experience */}
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px] px-[15px] py-[20px]">
            <div className="flex">
              <span className="max-w-[23.94rem] text-[1.1rem] text-black leading-[21px] font-[500]">
                UI/ UX Designer with over 10 years experience
              </span>
              <div className="flex items-center w-[7rem]">
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="h-[1.13rem] w-[1rem] mr-[5px]"
                />
                <span className="text-[0.75rem] text-black leading-[22px] font-[500]">
                  N 1000/ hr
                </span>
              </div>
            </div>
            <div className="mt-[30px]">
              <p className="max-w-[25.5rem] text-[0.75rem] text-[#8E8E8E] font-[400] leading-[19px] mb-[13px]">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <p className="max-w-[25.5rem] text-[0.75rem] text-[#8E8E8E] font-[400] leading-[19px] mb-[13px]">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <Link className="text-[0.75rem] text-green font-[500] leading-[19px]">
                more
              </Link>
            </div>
          </div>
          {/* Work History */}
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px] pl-[15px] pr-[20px] pt-[20px] pb-[40px] mt-[30px]">
            <p className="text-[1.2rem] text-black font-[400] leading-[28px]">
              Work History
            </p>
            <div className="flex justify-between border-b-[1px] border-b-[#DAD5D5] mt-[25px] gap-x-[20px]">
              <div className="w-[35%] border-b-[1px] border-b-green text-[0.88rem]">
                Completed Jobs
              </div>
              <div className="w-[65%]  text-[0.88rem]">Job in progress</div>
            </div>
            <div className="w-full px-[10px] pt-[10px] pb-[40px] rounded-[12px] bg-[#FAFAFA] shadow-shadow4 mt-[28px]">
              <div className="flex">
                <div className="mr-[67px]">
                  <p className="text-[0.85rem] text-black font-[400] leading-[17px]">
                    Graphic Designer
                  </p>
                  <img src="/assets/images/starRating.png" alt="" />
                </div>
                <span className="text-[0.72rem] text-black font-[400] leading-[19px] self-end">
                  FEB 15, 2021 - JUNE 29,2021
                </span>
              </div>
              <p className="mt-[14px] text-[0.75rem] text-[#8E8E8E] font-[400] leading-[19px]">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,{" "}
              </p>
            </div>
          </div>
          {/* Add Qualification */}
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px] px-[15px] py-[20px] mt-[30px]">
            <div className="flex">
              <img
                src="/assets/images/workPremium.png"
                alt=""
                className="h-[3.5rem] w-[3.5rem] mr-[15px]"
              />
              <div className="pt-[16px]">
                <p className="text-[1rem] text-black font-[500] leading-[19px]">
                  Add qualifications
                </p>
                <p className="text-[0.75rem] text-[#8E8E8E] font-[400] leading-[19px] max-w-[19.38rem] mt-[5px] ">
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
              </div>
            </div>
          </div>

          {/* Add Skills */}
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px] pl-[15px] py-[20px] mt-[30px]">
            <div className="flex">
              <img
                src="/assets/images/repair.png"
                alt=""
                className="h-[2.75rem] w-[2.75rem] mr-[15px]"
              />
              <div className="pt-[16px]">
                <p className="text-[1rem] text-black font-[500] leading-[19px]">
                  Add skills
                </p>
                <p className="text-[0.75rem] text-[#8E8E8E] font-[400] leading-[19px] max-w-[19.38rem] mt-[5px] ">
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-full md:w-[30%]">
          {/* Clients */}
          <div className="w-full h-fit bg-white shadow-shadow3 rounded-[5px] px-[10px] py-[20px]">
            <div className="text-[1.12rem] text-black font-[500] leading-[19px] mb-[31px] pb-[29px] px-[5px] border-b-[1px] border-b-[#D6D1D1]">
              27 clients
            </div>
            <div className="flex justify-center relative">
              <img
                src="/assets/images/obiR.png"
                alt=""
                className="w-[4.44rem] h-[3.88rem] mr-[2.6rem]"
              />

              <img
                src="/assets/images/obi.png"
                alt=""
                className=" h-[7.38rem] w-[7.38rem] absolute top-[-50%]"
              />

              <img
                src="/assets/images/obiL.png"
                alt=""
                className="w-[4.44rem] h-[3.88rem] ml-[2.6rem]"
              />
            </div>

            <Link className="w-full flex justify-center mt-[32px] text-[1rem] text-[#837E7E] font-[400] leading-[19px]">
              View All
            </Link>
          </div>
          {/* Portfolio */}
          <div className="w-full h-fit bg-white shadow-shadow3 mt-[30px] rounded-[5px] px-[10px] py-[20px]">
            <p className="my-[10px] pl-[17px] text-black text-[1.25rem] font-[500] leading-[19px]">
              PORTFOLIO
            </p>
            <div className="w-full flex flex-wrap gap-[10px] justify-center">
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
              <img
                src="/assets/images/portfolio.png"
                alt=""
                className="h-[5rem] w-[45%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
