import { useState } from "react";
import {
  setChat,
  setMobileMenu,
  mobileMenu,
} from "../features/api/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  useGetCurrentUserQuery,
  useGetPostsQuery,
} from "../features/api/apiSlice";
import { FaRegBell, FaRegEnvelope, FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  const { data: posts } = useGetPostsQuery();
  const mobile = useSelector(mobileMenu);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:px-[36px] py-[36px]">
      <div
        className="fixed top-[5px] right-[5px] cursor-pointer z-20 md:hidden"
        onClick={() => {
          dispatch(setMobileMenu());
        }}
      >
        <img
          src={`/assets/images/${mobile ? "cancel" : "menuBar"}.png`}
          alt=""
          className="h-[30px] w-[30px]"
        />
      </div>
      <div className="font-RubikRegular font-[500] text-[1.56rem] leading-[30px] text-greyBlack">
        Welcome Back, Let’s find you a Job
      </div>
      <div className="flex  items-center mt-[35px] md:mt-0">
        <div className="md:w-[139px] flex  py-[5px]  md:border-r-lightGrey md:border-r-[1px]  mr-[4px] md:mr-[24px]">
          <div
            className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px] mr-[4px] md:mr-[10px] cursor-pointer"
            onClick={() => dispatch(setChat())}
          >
            <FaRegEnvelope className="text-orange font-[200] h-[1.5rem] md:h-[2rem] w-[0.8rem] md:w-[1.63rem]" />
          </div>
          <div className="h-[2.13rem] md:h-[3.13rem] w-[2.13rem] md:w-[3.13rem]  flex items-center justify-center rounded-[50%] border-green border-[2px] cursor-pointer">
            <FaRegBell className="text-orange font-[200] h-[1.13rem] md:h-[1.63rem] w-[0.8rem] md:w-[1.5rem]" />
          </div>
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => setShowProfile(!showProfile)}
        >
          <img
            src="/assets/images/dp1.png"
            alt=""
            className="h-[3.5rem] w-[3.5rem] md:h-[3.75rem] md:w-[3.75rem] mr-[4px] md:mr-[15px]"
          />
          <div>
            <p className="font-RubikRegular font-[500] text-[1.2rem] md:text-[1.56rem] leading-[30px] text-greyBlack">
              {isSuccess &&
                currentUser?.firstName + " " + currentUser?.lastName}
            </p>
            <p className="font-RubikRegular font-[400] text-[0.8rem] md:text-[1rem] leading-[19px] text-lightGrey break-words w-[90%]">
              {isSuccess && currentUser?.email}
            </p>
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
  );
};

export default Header;
