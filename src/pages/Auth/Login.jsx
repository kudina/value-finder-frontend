import { useState } from "react";
import { useLoginMutation } from "../../features/api/apiSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const navigate = useNavigate();

  const [login, { isLoading: isChecking }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await login(user);
      setFeedBack(response?.data?.msg || response?.error?.data?.msg);
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
      if (response?.data?.msg === "Login Successful") {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error?.status === 400) {
        setFeedBack("There was a network error. Please try again later");
        setShowFeedBack(true);
        setTimeout(() => {
          setShowFeedBack(false);
        }, 5000);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row lg:justify-between justify-center">
      <div className="flex flex-col w-screen md:w-[50%] lg:justify-around">
        <form
          className="mx-[35px] md:mx-[70px] mt-[20px] md:mt-0"
          onSubmit={handleLogin}
        >
          <p className="font-GeorgiaSemiBold  text-LoginHeaderTextColor text-[35px] text-left leading-[50px]">
            Login
          </p>
          {!isChecking && showFeedBack && (
            <p className="text-[#FF0000] text-[14px] mt-2">{feedBack}</p>
          )}
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
              {isChecking ? "Checking details..." : "Login"}
            </button>
          </div>
          <div className="flex lg:justify-between mt-3 text-tc lg:flex-row  flex-col text-center">
            <div className="lg:text-[16px] text-[14px]">
              Don’t have an account?{" "}
              <Link to={"/register"} className="text-green">
                Sign up
              </Link>
            </div>

            <div className="lg:text-[16px] text-[14px]">
              Forgot password? Reset password
            </div>
          </div>
        </form>
      </div>

      <div className="lg:w-fit w-0">
        <img src="/assets/images/loginbg.svg" />
      </div>
    </div>
  );
};
export default Login;
