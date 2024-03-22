
import React from 'react'
import Dashtop from '../components/common/dashtop'
import Feature from '../components/common/Feature'
//@ts-ignore 
import image1 from '../constants/dashcard/dash1.png'
//@ts-ignore 
import image2 from '../constants/dashcard/dash2.png'
//@ts-ignore 
import image3 from '../constants/dashcard/dash3.png'
//@ts-ignore 
import image4 from '../constants/dashcard/dash4.png'
const Production = () => {
  return (
    <>  
    <div className='flex justify-between'>
    <Dashtop title='Factories' image={image1} imageAlt='logo' />
    <Dashtop title='False Ceiling' image={image2} imageAlt='logo' />
    <Dashtop title='Painting' image={image3} imageAlt='logo' />
    <Dashtop title='Loose Furniture' image={image4} imageAlt='logo' />
  </div>
  <div className='border w-[68%] mt-6 p-4 rounded-xl'>
    <div className='flex justify-between'>
      <h1 className='text-black font-bold'>Factories</h1>
      <p className='text-[#0035F2] text-sm'>SEE MORE</p>
    </div>
    {/* ---------------------------------------------------------------------------------     */}
 <Feature offer={10} title='Standard' ProjectBudget={50000}  duration={12} des="Size/ Room: 800 sq ft/ 1 bedroom apartment"/>
 <Feature offer={10} title='Standard' ProjectBudget={50000}  duration={12} des="Size/ Room: 800 sq ft/ 1 bedroom apartment"/>
 <Feature offer={10} title='Standard' ProjectBudget={50000}  duration={12} des="Size/ Room: 800 sq ft/ 1 bedroom apartment"/>

    {/* ---------------------------------------------------------------------------------     */}
  </div>
    </>
  )
}

export default Production
