import { useState, useEffect } from "react";
import {
  useGetPostsQuery,
  useGetCurrentUserQuery,
} from "../../features/api/apiSlice";
import Layout from "../../components/Layout";
import ClientLayout from "../../components/ClientLayout";
import PostDetails from "../../components/Freelancer/PostDetails";
import Posts from "../../components/Freelancer/Posts";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { data: posts } = useGetPostsQuery();
  const { data: currentUser, isError } = useGetCurrentUserQuery();
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();

  const filteredJob = () => {
    if (postId !== "") {
      const clickedJob = posts?.data?.filter((job) => job?._id === postId);
      return clickedJob;
    }
  };
  const jobView = postId === "" ? posts?.data[0] : filteredJob()[0];

  useEffect(() => {
    isError && navigate("/login");
  }, []);

  return (
    <>
      {currentUser?.userType === "freelancer" ? (
        <Layout>
          <div className="px-[35px] md:px-0 relative">
            {/* Main Section */}
            <div className="flex flex-col md:flex-row w-full md:gap-[40px]">
              {/* Middle Panel */}
              <div className="w-full md:w-[32%]">
                {/* Mobile Search Box */}
                <div className="h-[3.81rem] rounded-[5px] bg-boxGrey w-full flex items-center px-[10px] mb-[35px] md:hidden">
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

                <div className="flex justify-between flex-wrap items-center bg-green h-fit w-full  rounded-[5px] px-[17px] py-[20px]">
                  <p className="font-RubikRegular font-[500] text-white text-[1.13rem] leading-[21px]">
                    Search result
                  </p>
                  <p className="font-RubikRegular font-[300] text-white text-[0.88rem] leading-[17px]">
                    29 Jobs found
                  </p>
                </div>
                {/* Posts */}
                <Posts posts={posts} setFunc={setPostId} />
              </div>

              {/* Right Panel */}
              <div className="w-full md:w-[68%] md:pr-[40px]">
                {/* Search Box */}
                <div className="h-[3.81rem] rounded-[5px] bg-boxGrey w-full items-center px-[10px] mb-[35px] hidden md:flex">
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
                <PostDetails job={jobView} />
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <ClientLayout>
          <div className="w-full flex gap-x-[40px]">
            {/* Middle Panel */}
            <div className="w-[70%] flex flex-col gap-y-[48px]">
              {/* Row 1 */}
              <div className="w-full flex gap-x-[42px] ">
                <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
                  <div className="flex items-center justify-between">
                    <p className="text-[18px] font-[600] text-[#777]">
                      Account
                    </p>
                    <img
                      src="/assets/images/edit.png"
                      alt=""
                      className="w-[24px] h-[24px]"
                    />
                  </div>

                  <hr className="text-[#C1C1C1] 1-[2px] mt-[19px] mb-[11px]" />
                  <img
                    src="/assets/images/client.png"
                    alt=""
                    className="m-[0_auto] w-[72.5px] h-[80px]"
                  />
                  <hr className="text-[#C1C1C1] 1-[2px] mb-[11px]" />
                  <div>
                    <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                      Emeka Okonkwo
                    </p>
                    <p className="text-[18px] text-[#313131] font-[600] leading-[normal]">
                      Emeka Okonwo- Client
                    </p>
                  </div>
                  <div className="mt-[19px]">
                    <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                      Email
                    </p>
                    <p className="text-[18px] text-[#313131] font-[600] leading-[normal]">
                      melagogzbs@yahoo.com
                    </p>
                  </div>
                </div>
                <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
                  <div className="flex items-center justify-between">
                    <p className="text-[18px] font-[600] text-[#777]">
                      Company Details
                    </p>
                    <img
                      src="/assets/images/edit.png"
                      alt=""
                      className="w-[24px] h-[24px]"
                    />
                  </div>

                  <hr className="text-[#C1C1C1] 1-[2px] mt-[19px] mb-[11px]" />
                  <img
                    src="/assets/images/clientLogo.png"
                    alt=""
                    className="m-[0_auto] w-[72.5px] h-[80px]"
                  />
                  <hr className="text-[#C1C1C1] 1-[2px] mb-[11px]" />
                  <div>
                    <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                      Arolums Nigeria Limited
                    </p>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="w-full flex gap-x-[42px] ">
                <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
                  <div className="flex items-center justify-between">
                    <p className="text-[18px] font-[600] text-[#777]">
                      Comapny Contacts
                    </p>
                  </div>

                  <hr className="text-[#C1C1C1] 1-[2px] mt-[19px] mb-[16px]" />
                  <div>
                    <p className="text-[18px] text-[#777] font-[600] leading-[normal]">
                      Owner
                    </p>
                    <p className="text-[18px] text-[#313131] font-[600] leading-[normal]">
                      ********bs@yahoo.com
                    </p>
                  </div>
                  <hr className="text-[#C1C1C1] 1-[2px] mt-[19px] mb-[16px]" />
                  <div>
                    <p className="text-[18px] text-[#777] font-[600] leading-[normal]">
                      Phone
                    </p>
                    <p className="text-[18px] text-[#313131] font-[600] leading-[normal]">
                      ******90999909
                    </p>
                  </div>
                  <hr className="text-[#C1C1C1] 1-[2px] mt-[19px] mb-[16px]" />
                  <div>
                    <p className="text-[18px] text-[#777] font-[600] leading-[normal]">
                      Address
                    </p>
                    <p className="text-[18px] text-[#313131] font-[600] leading-[normal]">
                      Nigeria{" "}
                    </p>
                  </div>
                </div>
                <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#313131]">
                  <button className="text-[18px] text-[#fff] font-[600] bg-[#7DC348] w-[223px] py-[8px]">
                    Close Account
                  </button>
                </div>
              </div>
            </div>
            {/* Right panel */}
            <div className="w-[30%] pr-[20px]">
              <div className="w-full h-[675px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
            </div>
          </div>
        </ClientLayout>
      )}
    </>
  );
};

export default Index;
