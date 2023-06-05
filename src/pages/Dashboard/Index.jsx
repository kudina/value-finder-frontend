import { useGetPostsQuery } from "../../features/api/apiSlice";
import Layout from "../../components/Layout";

const Index = () => {
  const { data: posts } = useGetPostsQuery();

  return (
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
                  <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[10px] md:mr-[10px] w-[5.06rem] text-center">
                    {post?.salary}
                  </div>
                  <div className="font-RubikRegular font-[400] text-[0.63rem] text-black p-[7px] bg-white mr-[10px] md:mr-[10px] w-[5.06rem] text-center">
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
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
                  <p>Salary</p>
                  <p>$10/hour</p>
                </div>
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
                  <p>Job-Type</p>
                  <p>Part-Time</p>
                </div>
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
                  <p>Number of Applicants</p>
                  <p>20</p>
                </div>
                <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white w-[6rem] rounded-[5px] px-[15px] text-center">
                  <p>Skill</p>
                  <p>Expert</p>
                </div>
              </div>
              <div className="mt-[19px] w-full">
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                  Job Description
                </p>
                <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
              </div>
              <div className="mt-[19px] w-full">
                <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
                  Requirements
                </p>
                <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
                <p className=" font-RubikRegular font-[300] text-[1.13rem] text-[#8E8E8E] leading-[23px] mt-[8px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
              </div>
              <button className="w-full rounded-[5px] bg-green text-white mt-[39px] py-[16px]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
