import React from 'react'

function Banner() {
  return (
    <div className='bg-white mx-2 rounded-md h-44 p-6 mt-3'>
      <div className='bg-violet-800 rounded-2xl shadow-lg shadow-cyan-800/75'>
         <div className='flex justify-between items-center text-white'>
            <div className='pl-4 py-8'>
                <h2 className='mb-2'>Total Balance</h2>
                <div className='flex items-center'>
                    <h2 className='font-bold text-3xl'>10000</h2>
                    <h2 className='font-bold ml-2'>BDT</h2>
                </div>
                {/* <h2 className='font-bold'><span className='text-3xl'>10000</span> <span className=''>TRX</span></h2> */}
            </div>
            <div>
                <img className='h-24 w-28' src='https://i.ibb.co/rxdZt2M/icon.png' alt=''></img>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Banner
