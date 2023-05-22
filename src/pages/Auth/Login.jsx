import { useState } from "react";
import { useLoginMutation } from "../../features/api/apiSlice";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const [login, { isLoading: isChecking }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await login(user);
      setFeedBack(response?.data?.msg);
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-between">
      <div className="flex flex-col w-screen md:w-[50%] justify-around">
        <form
          className="mx-[35px] md:mx-[70px] mt-[20px] md:mt-0"
          onSubmit={handleLogin}
        >
          <p className="font-GeorgiaSemiBold  text-LoginHeaderTextColor text-[35px] text-left leading-[50px]">
            Login
          </p>

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
              Login
            </button>
            {!isChecking && showFeedBack && (
              <p className="text-green text-[14px] mt-2">{feedBack}</p>
            )}
          </div>
          <div className="flex justify-between mt-3 text-tc ">
            <div>Don’t have an account? Sing up</div>

            <div>Forgot password? Reset password</div>
          </div>
        </form>
      </div>

      <div className="mt-[10px]">
        <img src="/assets/images/loginbg.svg" alt="" className=" " />
      </div>
    </div>
  );
};

export default Login;
