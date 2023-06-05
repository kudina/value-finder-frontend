import React from "react";
import Header from "./Header";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { mobileMenu } from "../features/api/generalSlice";
import Chat from "./Chat";

const Layout = (props) => {
  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  const mobile = useSelector(mobileMenu);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const logOutHandler = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Chat />
      <div className="flex w-full md:gap-[40px]">
        <div
          className={`w-[35%] md:w-[17%] font-RubikRegular top-[0] bottom-[0]  z-20 bg-white fixed md:relative transition-all ease-in-out duration-300 ${
            !mobile &&
            "transform translate-x-[-100%] md:translate-x-[0] transition-all ease-in-out duration-300"
          }`}
        >
          <div className="w-full flex items-center items-center justify-center mb-[39px] px-[10px]">
            <img src="/assets/images/dashLogo.png" alt="" className="" />
          </div>
          <div className="">
            <p className="ml-[25px] text-[0.8rem]">Main menu</p>
            <Link
              to={"/dashboard"}
              className={`w-full group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white ${
                splitLocation[1] === "dashboard" && "bg-green text-white"
              }`}
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.024 32H5.16331C2.31625 32 0 29.6837 0 26.8367V21.8879C0 19.0408 2.31625 16.7245 5.16331 16.7245H10.024C12.8711 16.7245 15.1873 19.0409 15.1873 21.8879V26.8367C15.1873 29.6837 12.8711 32 10.024 32ZM5.16331 19.4745C3.83262 19.4745 2.75 20.5572 2.75 21.8879V26.8367C2.75 28.1674 3.83262 29.25 5.16331 29.25H10.024C11.3547 29.25 12.4373 28.1674 12.4373 26.8367V21.8879C12.4373 20.5572 11.3547 19.4745 10.024 19.4745H5.16331ZM10.024 15.2755H5.16331C2.31625 15.2755 0 12.9592 0 10.1121V5.1633C0 2.31623 2.31625 -1.52588e-05 5.16331 -1.52588e-05H10.024C12.8711 -1.52588e-05 15.1873 2.31623 15.1873 5.1633V10.1121C15.1873 12.9592 12.8711 15.2755 10.024 15.2755ZM5.16331 2.74998C3.83262 2.74998 2.75 3.83261 2.75 5.1633V10.1121C2.75 11.4429 3.83262 12.5254 5.16331 12.5254H10.024C11.3547 12.5254 12.4373 11.4428 12.4373 10.1121V5.1633C12.4373 3.83255 11.3547 2.74998 10.024 2.74998H5.16331ZM27.8743 30.625C27.8743 29.8656 27.2586 29.25 26.4993 29.25H22.4315C20.8496 29.25 19.5627 27.9495 19.5627 26.351V22.3734C19.5627 20.775 20.8496 19.4745 22.4315 19.4745H26.3811C27.9631 19.4745 29.2499 20.775 29.2499 22.3734V26.47C29.2499 27.2294 29.8656 27.845 30.6249 27.845C31.3843 27.845 31.9999 27.2294 31.9999 26.47V22.3734C31.9999 19.2586 29.4794 16.7245 26.3811 16.7245H22.4315C19.3333 16.7245 16.8127 19.2586 16.8127 22.3734V26.351C16.8127 29.4659 19.3333 32 22.4315 32H26.4993C27.2587 32 27.8743 31.3844 27.8743 30.625ZM26.8367 15.2755H21.976C19.1289 15.2755 16.8127 12.9592 16.8127 10.1122V5.1633C16.8127 2.31623 19.1289 -1.52588e-05 21.976 -1.52588e-05H26.8367C29.6837 -1.52588e-05 32 2.31623 32 5.1633V10.1121C32 12.9592 29.6837 15.2755 26.8367 15.2755ZM21.976 2.74998C20.6453 2.74998 19.5627 3.83261 19.5627 5.1633V10.1121C19.5627 11.4429 20.6453 12.5254 21.976 12.5254H26.8367C28.1674 12.5254 29.25 11.4428 29.25 10.1121V5.1633C29.25 3.83261 28.1674 2.74998 26.8367 2.74998H21.976Z" />
                <path d="M30.2771 31.5681C31.0365 31.5681 31.6521 30.9525 31.6521 30.1931C31.6521 29.4337 31.0365 28.8181 30.2771 28.8181C29.5177 28.8181 28.9021 29.4337 28.9021 30.1931C28.9021 30.9525 29.5177 31.5681 30.2771 31.5681Z" />
              </svg>
              Dashboard
            </Link>
            <Link
              to={"/dashboard"}
              className="w-full group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white"
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.024 32H5.16331C2.31625 32 0 29.6837 0 26.8367V21.8879C0 19.0408 2.31625 16.7245 5.16331 16.7245H10.024C12.8711 16.7245 15.1873 19.0409 15.1873 21.8879V26.8367C15.1873 29.6837 12.8711 32 10.024 32ZM5.16331 19.4745C3.83262 19.4745 2.75 20.5572 2.75 21.8879V26.8367C2.75 28.1674 3.83262 29.25 5.16331 29.25H10.024C11.3547 29.25 12.4373 28.1674 12.4373 26.8367V21.8879C12.4373 20.5572 11.3547 19.4745 10.024 19.4745H5.16331ZM10.024 15.2755H5.16331C2.31625 15.2755 0 12.9592 0 10.1121V5.1633C0 2.31623 2.31625 -1.52588e-05 5.16331 -1.52588e-05H10.024C12.8711 -1.52588e-05 15.1873 2.31623 15.1873 5.1633V10.1121C15.1873 12.9592 12.8711 15.2755 10.024 15.2755ZM5.16331 2.74998C3.83262 2.74998 2.75 3.83261 2.75 5.1633V10.1121C2.75 11.4429 3.83262 12.5254 5.16331 12.5254H10.024C11.3547 12.5254 12.4373 11.4428 12.4373 10.1121V5.1633C12.4373 3.83255 11.3547 2.74998 10.024 2.74998H5.16331ZM27.8743 30.625C27.8743 29.8656 27.2586 29.25 26.4993 29.25H22.4315C20.8496 29.25 19.5627 27.9495 19.5627 26.351V22.3734C19.5627 20.775 20.8496 19.4745 22.4315 19.4745H26.3811C27.9631 19.4745 29.2499 20.775 29.2499 22.3734V26.47C29.2499 27.2294 29.8656 27.845 30.6249 27.845C31.3843 27.845 31.9999 27.2294 31.9999 26.47V22.3734C31.9999 19.2586 29.4794 16.7245 26.3811 16.7245H22.4315C19.3333 16.7245 16.8127 19.2586 16.8127 22.3734V26.351C16.8127 29.4659 19.3333 32 22.4315 32H26.4993C27.2587 32 27.8743 31.3844 27.8743 30.625ZM26.8367 15.2755H21.976C19.1289 15.2755 16.8127 12.9592 16.8127 10.1122V5.1633C16.8127 2.31623 19.1289 -1.52588e-05 21.976 -1.52588e-05H26.8367C29.6837 -1.52588e-05 32 2.31623 32 5.1633V10.1121C32 12.9592 29.6837 15.2755 26.8367 15.2755ZM21.976 2.74998C20.6453 2.74998 19.5627 3.83261 19.5627 5.1633V10.1121C19.5627 11.4429 20.6453 12.5254 21.976 12.5254H26.8367C28.1674 12.5254 29.25 11.4428 29.25 10.1121V5.1633C29.25 3.83261 28.1674 2.74998 26.8367 2.74998H21.976Z" />
                <path d="M30.2771 31.5681C31.0365 31.5681 31.6521 30.9525 31.6521 30.1931C31.6521 29.4337 31.0365 28.8181 30.2771 28.8181C29.5177 28.8181 28.9021 29.4337 28.9021 30.1931C28.9021 30.9525 29.5177 31.5681 30.2771 31.5681Z" />
              </svg>
              Jobs
            </Link>
            <Link
              to={"/profile"}
              className={`w-full group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white ${
                splitLocation[1] === "profile" && "bg-green text-white"
              }`}
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8_168)">
                  <path d="M18.2807 26.6742C18.2502 26.6742 18.2195 26.6732 18.1887 26.6712C17.6142 26.6342 17.1254 26.2566 16.9438 25.7091L14.0241 16.8806L11.5511 22.7184C11.3454 23.2043 10.8912 23.5319 10.3659 23.5732C9.84044 23.6141 9.3415 23.3619 9.06256 22.9144L6.38625 18.6321C5.98381 17.9881 6.17956 17.1399 6.82356 16.7375C7.4675 16.3351 8.31581 16.5307 8.71831 17.1748L10.0263 19.2677L12.8839 12.5221C13.1111 11.9856 13.6539 11.6411 14.2359 11.6642C14.8175 11.6877 15.3314 12.0756 15.5146 12.6293L18.512 21.6928L20.5996 17.368C20.8707 16.8289 21.4223 16.5002 22.0179 16.5191L25.0801 16.5589C25.8394 16.5688 26.4469 17.1923 26.4371 17.9516C26.4272 18.7109 25.8033 19.319 25.0443 19.3086L22.7307 19.2786L19.5456 25.8781C19.3091 26.3688 18.8193 26.6742 18.2807 26.6742ZM17.0693 24.682C17.0691 24.6825 17.0688 24.683 17.0686 24.6834L17.0693 24.682ZM11.3939 21.456L11.3955 21.4585C11.395 21.4576 11.3944 21.4568 11.3939 21.456ZM25.9468 30.625C25.9468 29.8656 25.3312 29.25 24.5718 29.25H7.42819C4.84863 29.25 2.75 27.1524 2.75 24.5741V13.701C2.75 11.1227 4.84863 9.02514 7.42819 9.02514H24.5718C27.1513 9.02514 29.25 11.1228 29.25 13.701V24.5741C29.25 25.154 29.1454 25.7193 28.9393 26.2543C28.6663 26.9629 29.0193 27.7586 29.7279 28.0317C30.4368 28.3049 31.2323 27.9517 31.5053 27.2431C31.8335 26.3914 31.9999 25.4934 31.9999 24.5741V13.701C31.9999 9.60633 28.6677 6.27514 24.5718 6.27514H7.42819C3.33225 6.27508 0 9.60633 0 13.701V24.5741C0 28.6688 3.33225 32 7.42819 32H24.5718C25.3312 32 25.9468 31.3844 25.9468 30.625Z" />
                  <path d="M28.5625 31.5278C29.3219 31.5278 29.9375 30.9122 29.9375 30.1528C29.9375 29.3934 29.3219 28.7778 28.5625 28.7778C27.8031 28.7778 27.1875 29.3934 27.1875 30.1528C27.1875 30.9122 27.8031 31.5278 28.5625 31.5278Z" />
                </g>
                <defs>
                  <clipPath id="clip0_8_168">
                    <path d="M0 4.99998C0 2.23856 2.23858 -1.52588e-05 5 -1.52588e-05H27C29.7614 -1.52588e-05 32 2.23856 32 4.99998V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V4.99998Z" />
                  </clipPath>
                </defs>
              </svg>
              Profile
            </Link>
            <Link
              to={"/dashboard"}
              className=" group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white"
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8743 25.7601L7.46634 29.0667C7.06234 29.3694 6.52234 29.4187 6.07034 29.1921C5.61834 28.9667 5.33301 28.5054 5.33301 28.0001V4.00005C5.33301 3.26405 5.93034 2.66672 6.66634 2.66672H25.333C26.069 2.66672 26.6663 3.26405 26.6663 4.00005V28.0001C26.6663 28.5054 26.381 28.9667 25.929 29.1921C25.477 29.4187 24.937 29.3694 24.533 29.0667L20.125 25.7601L16.9423 28.9427C16.4223 29.4641 15.577 29.4641 15.057 28.9427L11.8743 25.7601ZM23.9997 25.3334V5.33339H7.99967V25.3334L11.1997 22.9334C11.7303 22.5347 12.473 22.5881 12.9423 23.0574L15.9997 26.1147L19.057 23.0574C19.5263 22.5881 20.269 22.5347 20.7997 22.9334L23.9997 25.3334ZM14.6663 16.0001H17.333C18.069 16.0001 18.6663 15.4027 18.6663 14.6667C18.6663 13.9307 18.069 13.3334 17.333 13.3334H14.6663C13.9303 13.3334 13.333 13.9307 13.333 14.6667C13.333 15.4027 13.9303 16.0001 14.6663 16.0001ZM11.9997 10.6667H19.9997C20.7357 10.6667 21.333 10.0694 21.333 9.33339C21.333 8.59739 20.7357 8.00005 19.9997 8.00005H11.9997C11.2637 8.00005 10.6663 8.59739 10.6663 9.33339C10.6663 10.0694 11.2637 10.6667 11.9997 10.6667Z"
                />
              </svg>
              Proposals
            </Link>
            <Link
              to={"/dashboard"}
              className=" group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white"
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8_202)">
                  <path d="M24.7359 15.1021C25.4953 15.1021 26.1109 15.728 26.1109 16.5C26.1109 17.272 25.4953 17.8979 24.7359 17.8979H19.0423C18.2829 17.8979 17.6673 17.272 17.6673 16.5C17.6673 15.728 18.2829 15.1021 19.0423 15.1021H24.7359ZM3.54346 17.8979C2.78408 17.8979 2.16846 17.272 2.16846 16.5C2.16846 15.728 2.78408 15.1021 3.54346 15.1021H6.29652C6.89046 13.0623 8.74827 11.5695 10.9434 11.5695C13.6157 11.5695 15.7898 13.7813 15.7898 16.5C15.7898 19.2187 13.6157 21.4305 10.9434 21.4305C8.74827 21.4305 6.89052 19.9377 6.29652 17.8979H3.54346ZM8.8469 16.5C8.8469 17.677 9.78733 18.6347 10.9433 18.6347C12.0993 18.6347 13.0398 17.6771 13.0398 16.5C13.0398 15.3229 12.0993 14.3653 10.9433 14.3653C9.7874 14.3653 8.8469 15.323 8.8469 16.5ZM4.09896 6.56177H13.5082C14.2676 6.56177 14.8832 5.93588 14.8832 5.16385C14.8832 4.39182 14.2676 3.76594 13.5082 3.76594H4.09896C3.33958 3.76594 2.72396 4.39182 2.72396 5.16385C2.72396 5.93588 3.33958 6.56177 4.09896 6.56177ZM15.6497 5.16385C15.6497 2.44516 17.8238 0.233337 20.4962 0.233337C22.8144 0.233337 24.7566 1.89813 25.231 4.11402H27.8961C28.6555 4.11402 29.2711 4.7399 29.2711 5.51193C29.2711 6.28397 28.6555 6.90985 27.8961 6.90985H25.0278C24.3333 8.76908 22.5645 10.0944 20.4963 10.0944C17.8238 10.0944 15.6497 7.88255 15.6497 5.16385ZM18.3997 5.16385C18.3997 6.3409 19.3402 7.29854 20.4962 7.29854C21.6522 7.29854 22.5926 6.34096 22.5926 5.16385C22.5926 3.98674 21.6522 3.02917 20.4962 3.02917C19.3402 3.02917 18.3997 3.98681 18.3997 5.16385ZM13.4148 26.4382H4.00552C3.24614 26.4382 2.63052 27.0641 2.63052 27.8362C2.63052 28.6082 3.24614 29.2341 4.00552 29.2341H13.4148C14.1741 29.2341 14.7898 28.6082 14.7898 27.8362C14.7898 27.0641 14.1742 26.4382 13.4148 26.4382ZM29.1776 28.1842C29.1776 28.9563 28.562 29.5822 27.8026 29.5822H24.9343C24.2398 31.4414 22.471 32.7667 20.4027 32.7667C17.7303 32.7667 15.5563 30.5548 15.5563 27.8362C15.5563 25.1175 17.7303 22.9056 20.4027 22.9056C22.7209 22.9056 24.6631 24.5704 25.1375 26.7863H27.8026C28.562 26.7863 29.1776 27.4121 29.1776 28.1842ZM22.4991 27.8362C22.4991 26.6591 21.5587 25.7014 20.4027 25.7014C19.2467 25.7014 18.3063 26.659 18.3063 27.8362C18.3063 29.0133 19.2467 29.9708 20.4027 29.9708C21.5587 29.9708 22.4991 29.0133 22.4991 27.8362Z" />
                  <path d="M28.1472 17.8979C28.9066 17.8979 29.5222 17.2721 29.5222 16.5C29.5222 15.728 28.9066 15.1021 28.1472 15.1021C27.3878 15.1021 26.7722 15.728 26.7722 16.5C26.7722 17.2721 27.3878 17.8979 28.1472 17.8979Z" />
                </g>
                <defs>
                  <clipPath id="clip0_8_202">
                    <path d="M0 5.23334C0 2.47191 2.23858 0.233337 5 0.233337H27C29.7614 0.233337 32 2.47191 32 5.23334V27.7667C32 30.5281 29.7614 32.7667 27 32.7667H5C2.23858 32.7667 0 30.5281 0 27.7667V5.23334Z" />
                  </clipPath>
                </defs>
              </svg>
              Contracts
            </Link>

            <Link
              to={"/dashboard"}
              className=" group flex items-center text-[0.8rem] pl-[25px] mt-2 hover:bg-green py-[10px] hover:text-white"
            >
              <svg
                className="w-[20px] h-[20px] mr-2 fill-current group-hover:fill-hover"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8_202)">
                  <path d="M24.7359 15.1021C25.4953 15.1021 26.1109 15.728 26.1109 16.5C26.1109 17.272 25.4953 17.8979 24.7359 17.8979H19.0423C18.2829 17.8979 17.6673 17.272 17.6673 16.5C17.6673 15.728 18.2829 15.1021 19.0423 15.1021H24.7359ZM3.54346 17.8979C2.78408 17.8979 2.16846 17.272 2.16846 16.5C2.16846 15.728 2.78408 15.1021 3.54346 15.1021H6.29652C6.89046 13.0623 8.74827 11.5695 10.9434 11.5695C13.6157 11.5695 15.7898 13.7813 15.7898 16.5C15.7898 19.2187 13.6157 21.4305 10.9434 21.4305C8.74827 21.4305 6.89052 19.9377 6.29652 17.8979H3.54346ZM8.8469 16.5C8.8469 17.677 9.78733 18.6347 10.9433 18.6347C12.0993 18.6347 13.0398 17.6771 13.0398 16.5C13.0398 15.3229 12.0993 14.3653 10.9433 14.3653C9.7874 14.3653 8.8469 15.323 8.8469 16.5ZM4.09896 6.56177H13.5082C14.2676 6.56177 14.8832 5.93588 14.8832 5.16385C14.8832 4.39182 14.2676 3.76594 13.5082 3.76594H4.09896C3.33958 3.76594 2.72396 4.39182 2.72396 5.16385C2.72396 5.93588 3.33958 6.56177 4.09896 6.56177ZM15.6497 5.16385C15.6497 2.44516 17.8238 0.233337 20.4962 0.233337C22.8144 0.233337 24.7566 1.89813 25.231 4.11402H27.8961C28.6555 4.11402 29.2711 4.7399 29.2711 5.51193C29.2711 6.28397 28.6555 6.90985 27.8961 6.90985H25.0278C24.3333 8.76908 22.5645 10.0944 20.4963 10.0944C17.8238 10.0944 15.6497 7.88255 15.6497 5.16385ZM18.3997 5.16385C18.3997 6.3409 19.3402 7.29854 20.4962 7.29854C21.6522 7.29854 22.5926 6.34096 22.5926 5.16385C22.5926 3.98674 21.6522 3.02917 20.4962 3.02917C19.3402 3.02917 18.3997 3.98681 18.3997 5.16385ZM13.4148 26.4382H4.00552C3.24614 26.4382 2.63052 27.0641 2.63052 27.8362C2.63052 28.6082 3.24614 29.2341 4.00552 29.2341H13.4148C14.1741 29.2341 14.7898 28.6082 14.7898 27.8362C14.7898 27.0641 14.1742 26.4382 13.4148 26.4382ZM29.1776 28.1842C29.1776 28.9563 28.562 29.5822 27.8026 29.5822H24.9343C24.2398 31.4414 22.471 32.7667 20.4027 32.7667C17.7303 32.7667 15.5563 30.5548 15.5563 27.8362C15.5563 25.1175 17.7303 22.9056 20.4027 22.9056C22.7209 22.9056 24.6631 24.5704 25.1375 26.7863H27.8026C28.562 26.7863 29.1776 27.4121 29.1776 28.1842ZM22.4991 27.8362C22.4991 26.6591 21.5587 25.7014 20.4027 25.7014C19.2467 25.7014 18.3063 26.659 18.3063 27.8362C18.3063 29.0133 19.2467 29.9708 20.4027 29.9708C21.5587 29.9708 22.4991 29.0133 22.4991 27.8362Z" />
                  <path d="M28.1472 17.8979C28.9066 17.8979 29.5222 17.2721 29.5222 16.5C29.5222 15.728 28.9066 15.1021 28.1472 15.1021C27.3878 15.1021 26.7722 15.728 26.7722 16.5C26.7722 17.2721 27.3878 17.8979 28.1472 17.8979Z" />
                </g>
                <defs>
                  <clipPath id="clip0_8_202">
                    <path d="M0 5.23334C0 2.47191 2.23858 0.233337 5 0.233337H27C29.7614 0.233337 32 2.47191 32 5.23334V27.7667C32 30.5281 29.7614 32.7667 27 32.7667H5C2.23858 32.7667 0 30.5281 0 27.7667V5.23334Z" />
                  </clipPath>
                </defs>
              </svg>
              Settings
            </Link>
          </div>
          <div className="fixed bottom-2 ml-[20px]">
            <button
              className="text-green font-semibold text-[12px] flex items-center"
              onClick={logOutHandler}
            >
              <img
                src="/assets/images/logout.png"
                alt=""
                className="h-[10px] w-[10px] mr-[2px]"
              />
              Logout
            </button>
            <p className="font-text text-[9px] text-[#35383F] mt-2 ">
              Valuefinder LLC
            </p>
            <p className="font-text text-[9px] text-[#86888C] ">
              © {year} All Rights Reserved
            </p>
          </div>
        </div>
        <div className="w-full md:w-[83%]">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
