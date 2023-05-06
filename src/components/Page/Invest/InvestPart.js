import React from 'react'

function InvestPart({info}) {

  const {rate,cycle,purchase,profit} = info;
  return (
    <div className='flex rounded-[8px] bg-white m-[8px] p-[12px]'>
        <div className='w-[140px] h-[92px]'>
        <img className='w-full h-full' src='https://i.ibb.co/8KQBWsB/Logo.png' alt='logo'/>
        </div>

        <div className='ml-[10px]'>
          <p className='text-[#2E82A5] text-[14px]'>Daily rate: <span className='font-bold text-[14px] text-[#12B298]'>{rate}</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Cycle: <span className='font-bold text-[14px] text-[#3783A1]'>{cycle}</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Number of purchase: <span className='font-bold text-[14px] text-[#3783A1]'>{purchase}</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Profit Type: {profit}</p>
        </div>
      </div>
  )
}

export default InvestPart
