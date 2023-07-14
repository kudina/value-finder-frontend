import ClientLayout from "../../components/ClientLayout";

function Security() {
  return (
    <ClientLayout>
      <div className="w-full flex gap-x-[40px]">
        {/* Middle Panel */}
        <div className="w-[68%] flex flex-col gap-y-[48px]">
          <p className="text-[24px] text-[#000] font-[600] leading-[normal]">
            Password & Security
          </p>
          {/* Row 1 */}
          <div className="w-full h-[304px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131]">
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-[600]">Authentication options</p>
              <img
                src="/assets/images/edit.png"
                alt=""
                className="w-[24px] h-[24px]"
              />
            </div>
            <hr className="text-[#C1C1C1] 1-[2px] mt-[48px] mb-[27px]" />

            <div>
              <p className="text-[24px] font-[600]">Password</p>
              <div className="flex items-center mt-[38px]">
                <img src="/assets/images/done.png" alt="" />
                <div>
                  <p className="text-[20px] text-[#000] font-[600] leading-[normal]">
                    Password has been set
                  </p>
                  <p className="text-[16px] text-[#777] font-[600] leading-[normal] mt-[10px]">
                    Choose a strong, unique password that’s at least 8
                    characters long.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="w-full h-fit bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[26px] pr-[19px] pl-[25px] mb-[2rem] text-[#313131]">
            <div>
              <img
                src="/assets/images/edit.png"
                alt=""
                className="w-[24px] h-[24px] float-right"
              />
              <div>
                <p className="text-[20px] text-[#000] font-[600] leading-[normal]">
                  Two-step verification
                </p>
                <p className="text-[16px] text-[#777] font-[600] leading-[normal] mt-[10px]">
                  Add an extra layer of security to block unauthorized access
                  and protect your account.
                </p>
              </div>
            </div>
            <hr className="text-[#C1C1C1] 1-[2px] mt-[25px] mb-[26px]" />

            <div>
              <div>
                <p className="text-[20px] text-[#000] font-[600] leading-[normal]">
                  Text message
                </p>
                <p className="text-[16px] text-[#777] font-[600] leading-[normal] mt-[10px]">
                  Receive a six digit code by text message to confirm it’s you.
                </p>
              </div>
            </div>
            <hr className="text-[#C1C1C1] 1-[2px] mt-[25px] mb-[26px]" />

            <div>
              <div>
                <p className="text-[20px] font-[600] ">Security question</p>
                <img
                  src="/assets/images/edit.png"
                  alt=""
                  className="w-[24px] h-[24px] float-right"
                />
                <div className="flex items-center mt-[12px]">
                  <img src="/assets/images/done.png" alt="" />
                  <div>
                    <p className="text-[20px] text-[#000] font-[600] leading-[normal]">
                      Enabled
                    </p>
                    <p className="text-[16px] text-[#777] font-[600] leading-[normal] mt-[10px]">
                      Answer a question you choose to confirm it’s you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right panel */}
        <div className="w-[32%] pr-[20px]">
          <div className="w-full h-[675px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
        </div>
      </div>
    </ClientLayout>
  );
}

export default Security;
