import React from 'react'

const Dashtop = (props: {
    title: string;
    image: string;
    imageAlt: string;
}) => {
    return (
        <div className='mt-6 w-[22%]'>
            <div className="border-2 h-[70px] rounded-xl flex p-4 items-center justify-between">
                <h1 className='text-black font-medium text-lg'>{props.title}</h1>
                <img src={props.image} alt={props.imageAlt} />
            </div>
        </div>
    )
}

export default Dashtop
