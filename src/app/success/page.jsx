import React from 'react'

const page = () => {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-8 items-center custom-font'>
            <div>
                <img src='/shape.svg' className='w-40'/>
            </div>
            <div className=' flex flex-col '>
            <p className='text-[#00230F] text-center text-xl custom-font-bold'>
            Form Submitted successfully

            </p>
            <p className='text-[#9B9B9B] custom-font-bold text-lg text-center'>
            Thank you for Joining us       
                 </p>
            </div>
        
        </div>
        


    </div>
  )
}

export default page