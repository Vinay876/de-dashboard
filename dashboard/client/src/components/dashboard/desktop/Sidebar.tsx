import React from "react";
import { AppContext } from "../../../context/Context";
import { SidebarData } from "../../../constants/Sidebar";

export default function Sidebar() {
  const { routerPath } = React.useContext(AppContext);
  return (
    <>
      <div className="hidden lg:block md:w-[40%] lg:w-[20%] absolute top-0 left-0 bg-white h-full z-10">
        <div className=" z-40 relative border-r shadow-black shadow-r-xl h-full">
          <h1 className="p-7 pb-5">
         <img src='/Logo.png' width={100} height={100} alt="logo" className="w-[80%]"/>
          </h1>
          <div className="flex bg-[#F4F5F6] w-[85%] rounded-xl m-auto p-2">
            <img src="/Avatar.png" alt="avtar" />
            <div className="ml-2">
              <h1 className="overflow-hidden text-black font-medium">Nguyen Duy Phuoc Hai</h1>
              <p className="text-[#777E90] font-semibold">Designer</p>
            </div>
          </div>
          <div className="mt-6">
            {SidebarData.map((item, index) => {
              const highlight = item.title.toLowerCase() === routerPath;
              return (
                <div
                  key={index}
                  className={`w-[85%] m-auto my-2 px-2 py-3 rounded-lg ${
                    highlight ? "bg-[#1B454D] " : "bg-transparent"
                  }`}
                >
                  <a href={item.path} className="flex items-center">
                    <item.Icon
                      className={`text-[20px] mr-3 ${
                        highlight ? "text-white" : "text-[#777E90]"
                      }`}
                    />
                    <p
                      className={`text-[16px] ${
                        highlight ? "text-white" : "text-[#777E90]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

