const Register = () => {
  return (
    <div className="w-screen h-screen flex  flex-col md:flex-row justify-between">
      <div className="flex flex-col w-screen md:w-[50%]">
        <div className="mx-[35px] md:mx-[70px]">
          <p className="font-GeorgiaSemiBold  text-LoginHeaderTextColor text-[3.13rem] text-left mt-[70px]  leading-[50px] max-w-[28rem]">
            Sign up to find work <br /> or post work
          </p>
          <div className="mt-10 flex justify-between">
            <input
              placeholder="First name"
              type="text"
              className=" w-[48%]  p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
            />
            <input
              placeholder="Last name"
              type="text"
              className=" w-[48%]  p-3 border ml-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
            />
          </div>

          <div className="mt-5">
            <input
              placeholder="Email address"
              type="text"
              className=" w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0"
            />
          </div>
          <div className="mt-5">
            <select className=" w-full p-3  border   border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0">
              <option>User type</option>
              <option>Client</option>
              <option>Freelancer</option>
            </select>
          </div>

          <div className="mt-5">
            <select className=" w-full p-3  border   border-textInputborderColor rounded-[5px]  h-[55px] focus:outline-none focus:border-gray-400 focus:ring-0">
              <option>Country</option>
              <option>Nigeria</option>
              <option>Ghana</option>
            </select>
          </div>

          <div className="mt-5">
            <input
              placeholder="Phone number"
              type="number"
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
              Sign Up
            </button>
          </div>

          <div>
            <p className="text-center mt-3 text-tc text-sm">
              By clicking sign up you agree to valuefinder Terms of Service
              <br></br>
              including the User Agreement and Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] md:mt-0">
        <img src="/assets/images/loginbg.svg" />
      </div>
    </div>
  );
};

export default Register;
