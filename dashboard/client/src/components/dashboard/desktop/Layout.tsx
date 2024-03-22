import React from "react";
import Sidebar from "./Sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Sidebar />
        <div className="w-full lg:w-[80%] lg:absolute lg:top-0 right-0 bg-white h-full z-20 px-4 py-4">
          <div className="flex justify-between">
            <div className="relative">
              <input type="text" className="bg-white text-black border rounded-lg focus:border-black outline-none px-4 py-2 pr-10 transition duration-300 ease-in-out w-[35rem]" placeholder="Search Everything"/>
              <img src="/Small.png" alt="search" className="absolute right-0 bottom-[0.7rem] px-2"/>
            </div>  
            <div className="flex items-center w-[16rem] justify-between mr-6 bg-white">
            <div className='bg-white p-3 md:px-6 rounded-3xl' style={{ background:'linear-gradient(130deg,#3772FF -40%, rgba(71,158,130, 1) 75%)' }}>
              <button className="text-white font-bold">Create +</button>
              </div>
              <IoHomeOutline size="22" className="text-black"/>
              <IoMdNotificationsOutline size="25" className="text-black"/>
              <img src="/Avatar.png" alt="Avatar" />
            </div>        
            </div>
          {props.children}
        </div>
      </div>
    </>
  );
}
