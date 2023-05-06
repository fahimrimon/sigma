import React from 'react'

function Trading() {
  return (
    <div className='bg-white mb-12'>
      <h1 className='text-center pt-[10px] text-[18px] font-bold'>+10.00%</h1>
      <h1 className=' w-[52px] mx-auto text-[13px] font-bold py-[4px] px-[12px] bg-[#326579] rounded-[16px] text-white mt-[4px] mb-[12px] mt-1 mb-12'>VIP1</h1>
      <img className='w-[88%] mx-auto' src="https://i.ibb.co/tLPBq6D/top.png" alt="top" />
      <h1 className='text-center text-[20px] font-bold py-[8px] px-[12px] mt-12 mb-20'>Cloud Mining is working</h1>
      <div className='flex justify-between mx-[20px]'>
        <h1 className='text-[20px] font-bold'>Trading profit</h1>
        <p style={{cursor:'pointer'}} className='text-[14px] text-[#2E82A5]'>view all</p>
      </div>

      <div className='flex mt-[10px] justify-around'>
        <p style={{cursor:'pointer'}} className='text-[#646566] text-[14px] '>Receive</p>
        <p style={{cursor:'pointer'}} className='text-[#646566] text-[14px] '>Received</p>
        <p style={{cursor:'pointer'}} className='text-[#646566] text-[14px] '>Receivexpired</p>
      </div>
      <p className='text-center text-[14px] text-[#969799] mt-[15px] mb-12'>No data</p>
    </div>
  )
}

export default Trading
