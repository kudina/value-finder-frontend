const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-between">
      <div className="flex flex-col w-[50%] justify-around">

        <div className="ml-[70px] mr-[70px]">
          <p className="font-GeorgiaSemiBold  text-LoginHeaderTextColor text-[35px] text-left   leading-[50px]">
          Login
          </p>
          
           
         
          <div className="mt-5">
            <input
              placeholder="Email address"
              type="text"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
            />
          </div>
         


          <div className="mt-5">
            <input
              placeholder="password"
              type="password"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
            />
          </div>

          <div className="mt-5">
            <button className="w-full bg-green text-white p-3 rounded-[5px] h-[55px] ">
              Login
            </button>
          </div>
          <div className="flex justify-between mt-3 text-tc ">
            <div>
            Don’t have an account? Sing up
            </div>

            <div>
            Forgot password? Reset password
            </div>
          </div>

        </div>

      </div>

      <div className="">
        <img src="/assets/images/loginbg.svg" className=" " />
      </div>
    </div>
  );
};

export default Login;
