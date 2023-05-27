import { openChat } from "../features/api/generalSlice";
import { useSelector } from "react-redux";
const Chat = () => {
  const chat = useSelector(openChat);
  return (
    <div
      className={`flex gap-x-[15px] fixed top-[7rem] left-[45%] right-[1rem] bottom-0 bg-white z-20 shadow transition-all ease-in-out duration-300  ${
        chat ? "transform-none" : "transform translate-x-[118%]"
      }`}
    >
      <div className="w-[35%] pl-[21px]">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          className="h-[2.25rem] w-full border-[1px] border-green outline-none rounded-[5px] mb-[20px] mt-[40px] pl-[14px] font-RubikRegular font-[300] text-[0.88rem] text-black leading-[17px]"
        />
        {/* Chat Container */}
        <div className="w-full h-[calc(100%-5rem)] overflow-y-auto scrollbar scrollbar-thumb-lightGrey scrollbar-w-[6px] scrollbar-track-grey scrollbar-rounded-[20px] pr-[5px]">
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Nelson Uhembe
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                John Do
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>

          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Ogbonna Micheal
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Jerry Sam
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full ">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Micky James
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Sam Driill
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Funny Guy
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chat List */}
          <div className="w-full">
            <div className="h-[3.94rem] w-full p-[5px] pl-[10px] mb-[20px] flex items-center rounded-[5px] relative bg-boxGrey text-black hover:bg-orange hover:text-white">
              <img
                src="/assets/images/dp1.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-[50%]"
              />
              <p className="ml-[10px] font-RubikRegular font-[300] text-[0.88rem] leading-[17px]">
                Next Guy
              </p>
              <small className="absolute bottom-[12px] right-[10px] font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Client's Wall */}
      <div className="w-[65%]">
        <div className="flex items-center mt-[25px]">
          <img
            src="/assets/images/dp1.png"
            alt=""
            className="h-[3rem] w-[3rem] rounded-[50%] mr-[20px]"
          />
          <p className="font-RubikRegular font-[500] text-[1rem] leading-[12px] text-greyBlack">
            Ogbonna Michael
          </p>
        </div>
        <div className=" relative w-full h-[calc(100%-5rem)] overflow-y-auto scrollbar scrollbar-thumb-lightGrey scrollbar-w-[6px] scrollbar-track-grey scrollbar-rounded-[20px] bg-boxGrey rounded-[15px] mt-[15px] p-[12px] pb-[10rem]">
          {/* Chats */}
          {/* Chats Right */}
          <div className=" w-[60%] flex float-right mb-[20px]">
            <div className=" mr-[9px] ">
              <p className=" mb-[7px] px-[12px] py-[8px] bg-white font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-black rounded-[6px]">
                Alaye, I fit run any kind job for you no jokes
              </p>
              <small className="float-right font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
          </div>

          {/* Chats Left */}
          <div className=" w-full flex float-right mb-[20px]">
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
            <div className=" ml-[9px] w-full ">
              <div className="w-full bg-orange rounded-[6px] mb-[7px] px-[12px] py-[8px]">
                <p className="w-[50%]  bg-orange font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-white ">
                  Alaye, I fit run any kind job for you no jokes
                </p>
              </div>
              <small className="float-left font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chats Right */}
          <div className=" w-[60%] flex float-right mb-[20px]">
            <div className=" mr-[9px] ">
              <p className=" mb-[7px] px-[12px] py-[8px] bg-white font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-black rounded-[6px]">
                Alaye, I fit run any kind job for you no jokes
              </p>
              <small className="float-right font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
          </div>

          {/* Chats Left */}
          <div className=" w-full flex float-right mb-[20px]">
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
            <div className=" ml-[9px] w-full ">
              <div className="w-full bg-orange rounded-[6px] mb-[7px] px-[12px] py-[8px]">
                <p className="w-[50%]  bg-orange font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-white ">
                  Alaye, I fit run any kind job for you no jokes
                </p>
              </div>
              <small className="float-left font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Chats Right */}
          <div className=" w-[60%] flex float-right mb-[20px]">
            <div className=" mr-[9px] ">
              <p className=" mb-[7px] px-[12px] py-[8px] bg-white font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-black rounded-[6px]">
                Alaye, I fit run any kind job for you no jokes
              </p>
              <small className="float-right font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
          </div>
          {/* Chats Left */}
          <div className=" w-full flex float-right mb-[20px]">
            <img
              src="/assets/images/dp1.png"
              alt=""
              className="h-[1.25rem] w-[1.25rem] self-end bb-[8px]"
            />
            <div className=" ml-[9px] w-full ">
              <div className="w-full bg-orange rounded-[6px] mb-[7px] px-[12px] py-[8px]">
                <p className="w-[50%]  bg-orange font-RubikRegular font-[300] text-[0.88rem] leading-[17px] text-white ">
                  Alaye, I fit run any kind job for you no jokes
                </p>
              </div>
              <small className="float-left font-RubikRegular font-[300] text-[0.5rem] leading-[9px]">
                22:22
              </small>
            </div>
          </div>
          {/* Message Box */}
          <div className="flex items-center justify-between fixed bottom-0 left-[66%] right-[9%] bottom-[10px] pb-[2rem]">
            <input
              type="text"
              placeholder="Message..."
              className="w-[85%] h-[2.25rem] bg-white border-[1px] border-green outline-none rounded-[5px] pl-[14px] font-RubikRegular font-[300] text-[0.88rem] text-black leading-[17px]"
            />
            <button className="flex items-center justify-center bg-green h-[2.25rem] w-[2.25rem] rounded-[5px]">
              <img
                src="/assets/images/arrowUp.png"
                alt=""
                className="h-[1.19rem] w-[1.13rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
