import ClientLayout from "../../components/ClientLayout";

function Membership() {
  return (
    <ClientLayout>
      <div className="w-full flex gap-x-[40px]">
        {/* Middle Panel */}
        <div className="w-[68%] flex flex-col gap-y-[48px]">
          <p className="text-[24px] text-[#000] font-[600] leading-[normal]">
            Password & Security
          </p>
          {/* Row 1 */}
          <div className="w-full h-[241px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131] flex gap-x-[10px]">
            <img
              src="/assets/images/icon1.png"
              alt=""
              className="w-[109px] h-[96px]"
            />
            <div>
              <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                Discover quality talent fast
              </p>
              <ul className="list-disc mt-[11px]">
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Post a job and receive proposals from talent
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  See verified work history and reviews
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Send 30 invitations to talent per job post
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Use advanced search filters
                </li>
              </ul>
            </div>
          </div>
          {/* Row 2 */}
          <div className="w-full h-[241px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131] flex gap-x-[10px]">
            <img
              src="/assets/images/icon2.png"
              alt=""
              className="w-[109px] h-[96px]"
            />
            <div>
              <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                Collaboration tools for project tracking
              </p>
              <ul className="list-disc mt-[11px]">
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Chat, video call, and share files with talent
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Get advanced reporting and tracking
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Set coworker teams and member permission settings
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Customize your invoice with activity codes
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full h-[241px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131] flex gap-x-[10px]">
            <img
              src="/assets/images/icon2.png"
              alt=""
              className="w-[109px] h-[96px]"
            />
            <div>
              <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                Account support and guidance
              </p>
              <ul className="list-disc mt-[11px]">
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  24/7 premium customer support
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className="w-full h-[241px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] pr-[19px] pl-[25px] text-[#313131] flex gap-x-[10px]">
            <img
              src="/assets/images/icon4.png"
              alt=""
              className="w-[109px] h-[96px]"
            />
            <div>
              <p className="text-[18px] text-[#000] font-[700] leading-[normal]">
                Safe, easy payments
              </p>
              <ul className="list-disc mt-[11px]">
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Get an extra level of security with Upwork Payment Protection
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  Pay as you go billing for milestone and hourly contracts
                </li>
                <li className="text-[18px] text-[#000] font-[400] leading-[normal]">
                  3-5% marketplace fee depending on payment method
                </li>
              </ul>
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

export default Membership;
