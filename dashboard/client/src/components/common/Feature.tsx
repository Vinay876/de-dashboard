import React from 'react'

//@ts-ignore 
import Feature1 from '../../constants/dashFeature/Feature1.png'
//@ts-ignore 
import fillstart from '../../constants/dashFeature/fillstar.png'
//@ts-ignore 
import emptystart from '../../constants/dashFeature/emptystart.png'
import { FaMoneyCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiSolidCopy } from "react-icons/bi";

const Feature = (props:{
    offer:number,
    title:string,
    ProjectBudget:number,
    duration:number,
    des:string
}) => {
  return (
    <div className='border p-2 rounded-lg mt-4 flex'>
    {/* 1 */}
    <div className='w-[18%] relative'>
      <img src={Feature1} alt="feature-image" className='w-full' />
      <div className='absolute bg-[#479E82] text-white text-sm p-1 px-2 rounded-tr-lg rounded-bl-2xl top-0 right-0'>{props.offer} off</div>
    </div>
    {/* 2 */}
    <div className='w-[81%] ml-[11px] m-auto border'>
      <div className='flex items-center justify-between text-black text-lg'>
        <h1 className=''>{props.title}</h1>
        <div>
          <button className='border-2 border-[#005B3E] p-1 px-3 rounded-xl mr-4 '>View Quote</button>
          <button className='border-2 bg-[#005B3E] text-white font-semibold p-1 px-8 rounded-xl'>Book</button>
        </div>
      </div>
      {/* 2.2 */}
      <div className='flex py-2'>
        <div className='w-7 h-7 rounded-lg bg-[#005B3E] flex justify-center items-center'>
          <img src={fillstart} alt=" star" className='w-[70%]' />
        </div>
        <div className='w-7 h-7 rounded-lg bg-[#005B3E] flex justify-center items-center ml-2'>
          <img src={fillstart} alt=" star" className='w-[70%]' />
        </div>
        <div className='w-7 h-7 rounded-lg bg-[#005B3E] flex justify-center items-center ml-2'>
          <img src={fillstart} alt=" star" className='w-[70%]' />
        </div>
        <div className='w-7 h-7 rounded-lg bg-[#005B3E] flex justify-center items-center ml-2'>
          <img src={fillstart} alt=" star" className='w-[70%]' />
        </div>
        <div className='w-7 h-7 rounded-lg bg-[#005B3E] flex justify-center items-center ml-2'>
          <img src={emptystart} alt=" star" className='w-[70%]' />
        </div>
      </div>
      {/* 2.3 */}
      <div className='flex items-center mt-1 text-gray-500'>
        <FaMoneyCheck size={20} />
        <div className='ml-2'>Project Budget: ${props.ProjectBudget}</div>
      </div>
      {/* 2.4 */}
      <div className='flex justify-between mt-1 text-gray-500'>
        <div className='flex items-center'>
        <SlCalender size={16} />
        <div className='ml-2 text-sm'>Duration: {props.duration} weeks</div>
        </div>
        <div className='flex items-center text-gray-500'>
        <BiSolidCopy size={18} />
        <div className='ml-2 text-sm'>{props.des}</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature
