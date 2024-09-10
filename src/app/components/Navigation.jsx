import React, { useContext } from "react";
import { Image, Avatar } from "antd";
import AuthContext from "../context/AuthContext";
import "tailwindcss/tailwind.css";
import "./Style.css";

export default function Navigation({ children }) {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-[var(--main)] text-white p-3 shadow-md flex justify-between items-center">
        <div className="text-xs font-bold">Support kita</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <div className="flex gap-2 bg-white items-center text-black p-1 rounded-full">
                <Avatar size={30} src={userInfo.photo_profile} />
                <p className="text-[14px]">{userInfo.username}</p>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <nav className="bg-[linear-gradient(170deg,_#614BC3,_65%,_#33BBC5)] w-60 h-screen flex flex-col justify-between">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-center pb-10 shadow-sm pr-1">
              <p className="text-[60px] text-white font-extrabold">FLAN</p>
            </div>
            <div className="pl-10 text-white">
              <ul className="space-y-8 pt-3">
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                  <a href="#">Dashboard</a>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <a href="#">Activity</a>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  <a href="#">Library</a>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-3 pr-3 pb-10">
            <h1 className="text-white font-semibold">Grup Kamu</h1>
            <div className="max-h-60 overflow-y-auto overflow-x-hidden custom-scrollbar  overflow-scroll h-[24vh]	">
              <div className="bg-[#ffffffa1] p-1 mt-4 rounded flex">
                <div>
                  <Image
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="pl-4">
                  <p>playlist 1</p>
                </div>
              </div>
              <div className="bg-[#ffffffa1] p-1 mt-4 rounded flex">
                <div>
                  <Image
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="pl-4">
                  <p>playlist 1</p>
                </div>
              </div>
              <div className="bg-[#ffffffa1] p-1 mt-4 rounded flex">
                <div>
                  <Image
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="pl-4">
                  <p>playlist 1</p>
                </div>
              </div>
              {/* Add more cards here if needed */}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 pl-10 pb-10 text-white hover:text-indigo-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <a href="#">Logout</a>
        </div>
      </nav>
      {children}
    </>
  );
}
