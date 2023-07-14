import { useState } from "react";
import ClientLayout from "../../components/ClientLayout";
import { useCreateJobMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const navigate = useNavigate();

  const [createJob, { isLoading: isPosting }] = useCreateJobMutation();

  const handleCreateJob = async (e) => {
    e.preventDefault();
    const jobDetails = {
      title,
      salary,
      jobType,
      skillLevel,
      jobDescription,
      requirements,
    };
    try {
      const response = await createJob(jobDetails);
      setFeedBack(response?.data?.msg || response?.error?.data?.msg);
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
      if (response?.error?.data?.msg === "User is not Authorized") {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientLayout>
      <form
        className="max-w-[586px] px-[10px] md:px-0 mb-[2rem]"
        onSubmit={handleCreateJob}
      >
        <h2 className="mb-[37px]">Create a Job</h2>
        <div className="w-full flex flex-col gap-y-[21px]">
          <input
            type="text"
            placeholder="Job title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-[55px] border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] px-[5px] outline-0"
          />
          <div className="w-full flex justify-between">
            <input
              type="text"
              placeholder="Salary/hr"
              onChange={(e) => setSalary(e.target.value)}
              className="w-[48%] h-[55px] border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] px-[5px] outline-0"
            />
            <input
              type="text"
              placeholder="Job type"
              onChange={(e) => setJobType(e.target.value)}
              className="w-[48%] h-[55px] border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] px-[5px] outline-0"
            />
          </div>
          <input
            type="text"
            placeholder="Skill Level"
            onChange={(e) => setSkillLevel(e.target.value)}
            className="w-full h-[55px] border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] px-[5px] outline-0"
          />
          <textarea
            placeholder="Requirements"
            onChange={(e) =>
              setRequirements(e.target.value)?.tostring()?.split(/\r?\n/)
            }
            className="w-full h-[55px] border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] px-[5px] outline-0"
          />
          <textarea
            placeholder="Job Description "
            onChange={(e) => setJobDescription(e.target.value)}
            className="h-[205px] w-full border-[1px] border-[#C8C8C8] rounded-[5px] text-[#777] text-[14px] font-[400] py-[10px] px-[5px] overflow-auto resize-none outline-0"
          ></textarea>
          {showFeedBack && (
            <p className="text-[#FF0000] text-[14px] mt-2">{feedBack}</p>
          )}
          <button className="bg-[#9CCF32] rounded-[5px] text-white border-[1px] border-[#C8C8C8] h-[55px]">
            {isPosting ? "Posting..." : "Create Job"}
          </button>
        </div>
      </form>
    </ClientLayout>
  );
};

export default CreateJob;
