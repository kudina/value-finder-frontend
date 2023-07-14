import ClientLayout from "../../components/ClientLayout";

function Billing() {
  return (
    <ClientLayout>
      <div className="w-full flex gap-x-[40px]">
        {/* Middle Panel */}
        <div className="w-[70%] flex flex-col gap-y-[48px]">
          <div className="w-full flex gap-x-[42px] ">
            <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
              <div className="flex items-center justify-between">
                <p className="text-[26px] font-[600]">Balance</p>
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="text-[20px] font-[600] mt-[46px]">
                Your balance is $0.00
              </div>
              <hr className="text-[#C1C1C1] 1-[2px] my-[33px]" />
              <div className="w-full flex justify-center">
                <button className="bg-[#F5F4F4] rounded-[30px] text-[18px] text-[#000] font-[600]  py-[8px] w-[302px]">
                  Pay now
                </button>
              </div>
            </div>
            <div className="w-[48%] h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
              <div className="flex items-center justify-between">
                <p className="text-[26px] font-[600]">Billing Methods</p>
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </div>
              <button className="w-[302px] border-[1px] border-[#7DC348] rounded-[30px] py-[8px] mt-[27px] text-[18px] font-[600] text-[#1D1D1D]">
                Add a new Billing method
              </button>
              <hr className="text-[#C1C1C1] 1-[2px] mt-[27px] mb-[12px]" />
              <div className="text-[16px] text-[#313131] font-[700] max-w-[267px] mb-[16px]">
                You have not set up any billing methods yet
              </div>
              <div className="text-[14px] text-[#000] font-[400] max-w-[326px]">
                Set up your billing methods so you'll be able to hire right away
                when you're ready.
              </div>
            </div>
          </div>
        </div>
        {/* Right panel */}
        <div className="w-[30%] pr-[20px]">
          <div className="w-full h-[675px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
        </div>
      </div>
    </ClientLayout>
  );
}

export default Billing;
