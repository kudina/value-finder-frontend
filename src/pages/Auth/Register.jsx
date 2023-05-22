import { useState } from "react";
import { useRegisterMutation } from "../../features/api/apiSlice";

const Register = () => {
  const [userType, setUserType] = useState(null);
  const [openUserType, setOpenUserType] = useState(false);
  const [userCountry, setUserCountry] = useState(null);
  const [openUserCountry, setOpenUserCountry] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);
  const [register, { isLoading: isRegistering }] = useRegisterMutation();

  const UserType = ["Client", "Freelancer"];
  const Country = ["Nigeria", "Ghana"];

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      userType,
      userCountry,
      phoneNumber,
      password,
    };
    try {
      const response = await register(user).unwrap();

      setFeedBack(response?.data?.msg);
      console.log(response);
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex  flex-col md:flex-row justify-between">
      <div className="flex flex-col w-screen md:w-[50%]">
        <form className="mx-[35px] md:mx-[70px]" onSubmit={handleRegister}>
          <p className="font-GeorgiaSemiBold  text-LoginHeaderTextColor text-[3.13rem] text-left mt-[70px]  leading-[50px] max-w-[28rem]">
            Sign up to find work <br /> or post work
          </p>
          <div className="mt-10 flex justify-between">
            <input
              placeholder="First name"
              type="text"
              className=" w-[48%]  p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={(e) => {
                setFirstName(e.target.value);
                setFeedBack("");
              }}
            />
            <input
              placeholder="Last name"
              type="text"
              className=" w-[48%]  p-3 border ml-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={(e) => {
                setLastName(e.target.value);
                setFeedBack("");
              }}
            />
          </div>

          <div className="mt-5">
            <input
              placeholder="Email address"
              type="text"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={(e) => {
                setEmail(e.target.value);
                setFeedBack("");
              }}
            />
          </div>
          {/* User Type */}
          <div
            className="w-full mt-5 h-[58px] mb-4 border-grey  border-[0.2px] h-[30px] rounded-[5px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
            onClick={() => {
              setOpenUserType(!openUserType);
              setFeedBack("");
            }}
          >
            <span>{userType !== null ? userType : "User Type"}</span>{" "}
            <img
              src="/assets/images/arrowDown.png"
              alt=""
              className={`h-[5px] w-[8px] ${openUserType && "rotate-180"}`}
            />
          </div>
          <div className="relative">
            <ul
              className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  absolute  z-[1] left-0 right-0 ${
                !openUserType && "hidden "
              }`}
            >
              {UserType.map((type) => (
                <li
                  key={type}
                  className={`w-full border-y-[1px] border-y-white px-[5px] py-[12px] hover:bg-green hover:text-white text-[14px] ${
                    userType === type
                      ? "bg-green text-white"
                      : "bg-white text-[#717579]"
                  }`}
                  onClick={() => {
                    setOpenUserType(false);
                    setUserType(type);
                  }}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>

          {/* Country */}
          <div
            className="w-full mt-5 h-[58px] mb-4 border-grey  border-[0.2px] h-[30px] rounded-[5px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
            onClick={() => {
              setOpenUserCountry(!openUserCountry);
              setFeedBack("");
            }}
          >
            <span>{userCountry !== null ? userCountry : "Country"}</span>{" "}
            <img
              src="/assets/images/arrowDown.png"
              alt=""
              className={`h-[5px] w-[8px] ${openUserCountry && "rotate-180"}`}
            />
          </div>
          <div className="relative">
            <ul
              className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  absolute  z-[1] left-0 right-0 ${
                !openUserCountry && "hidden "
              }`}
            >
              {Country.map((country) => (
                <li
                  key={country}
                  className={`w-full border-y-[1px] border-y-white px-[5px] py-[12px] hover:bg-green hover:text-white text-[14px] ${
                    userCountry === country
                      ? "bg-green text-white"
                      : "bg-white text-[#717579]"
                  }`}
                  onClick={() => {
                    setOpenUserCountry(false);
                    setUserCountry(country);
                  }}
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <input
              placeholder="Phone number"
              type="number"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setFeedBack("");
              }}
            />
          </div>

          <div className="mt-5">
            <input
              placeholder="password"
              type="password"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={(e) => {
                setPassword(e.target.value);
                setFeedBack("");
              }}
            />
          </div>

          <div className="mt-5">
            <button className="w-full bg-green text-white p-3 rounded-[5px] h-[55px] ">
              Sign Up
            </button>
            {!isRegistering && showFeedBack && (
              <p className="text-green text-[14px] mt-2">{feedBack}</p>
            )}
          </div>

          <div>
            <p className="text-center mt-3 text-tc text-sm">
              By clicking sign up you agree to valuefinder Terms of Service
              <br></br>
              including the User Agreement and Privacy Policy
            </p>
          </div>
        </form>
      </div>

      <div className="mt-[10px] md:mt-0">
        <img src="/assets/images/loginbg.svg" alt="" />
      </div>
    </div>
  );
};

export default Register;
