import { useState } from "react";
import { useApplyJobMutation } from "../../features/api/apiSlice";

const PostDetails = ({ job }) => {
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const requirementArray =
    job?.requirements[0] !== undefined
      ? job?.requirements[0].split(/\r?\n/)
      : null;

  const requirements = requirementArray?.map((requirement, index) => (
    <p key={index}>{requirement ? requirement : ""}</p>
  ));

  const [applyJob, { isLoading }] = useApplyJobMutation();

  const applyForJob = async () => {
    try {
      const response = await applyJob({ id: job?._id });
      setFeedback(response?.data?.msg || response?.error?.data?.msg);
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
      }, 5000);
    } catch (error) {
      setFeedback(error?.data?.msg);
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
      }, 5000);
      console.log(error);
    }
  };

  return (
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
            {job?.title}
          </p>
          <p className="font-RubikRegular font-[400] text-[0.75rem] text-lightGrey leading-[14px]">
            {job?.address}
          </p>
        </div>
      </div>
      <div className="flex items-center mt-[18px] flex-wrap gap-y-[10px]">
        <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
          <p>Salary</p>
          <p>{job?.salary}</p>
        </div>
        <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
          <p>Job-Type</p>
          <p>{job?.jobType}</p>
        </div>
        <div className="font-RubikRegular font-[400] text-[0.63rem] text-black py-[4px] bg-white mr-[30px] w-[6rem] rounded-[5px] px-[15px] text-center">
          <p>Number of Applicants</p>
          <p>{job?.numberOfApplicants?.length}</p>
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
          {job?.jobDescription}
        </p>
      </div>
      <div className="mt-[19px] w-full">
        <p className="font-RubikRegular font-[500] text-[1.13rem] text-greyBlack leading-[21px]">
          Requirements
        </p>
        {requirements ? requirements : "No requirement"}
      </div>
      {!isLoading && showFeedback && (
        <p className="text-[#FF0000] text-[14px] mt-2">{feedback}</p>
      )}
      <button
        className="w-full rounded-[5px] bg-green text-white mt-[39px] py-[16px]"
        onClick={applyForJob}
      >
        Apply Now
      </button>
    </div>
  );
};

export default PostDetails;
