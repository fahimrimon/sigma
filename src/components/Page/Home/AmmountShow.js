import React from 'react'

function AmmountShow() {
  return (
    <div className='mx-2 mt-4'>
      <div className='grid grid-cols-2 gap-4 text-center'>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[40%] mt-8' src="https://i.ibb.co/P4x2Z9R/qianbao.png" alt="lirun"></img>
        <h2 className='text-base mt-4'>Base</h2>
        <h2 className='text-base'>Account</h2>
        <h2 className='text-base mt-2'><span className='text-lg text-cyan-700 font-bold mr-2'>0.00</span><span className='text-sm'>TRX</span></h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[40%] mt-8' src="https://i.ibb.co/r6d9rv3/yongjin.png" alt="huiyuan"></img>
        <h2 className='text-base pt-8'>Withdrawa</h2>
        <h2 className='text-base'>Account</h2>
        <h2 className='text-base mt-2'><span className='text-lg text-cyan-700 font-bold mr-2'>0.00</span><span className='text-sm'>TRX</span></h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[40%] mt-8' src="https://i.ibb.co/r6d9rv3/yongjin.png" alt="huiyuan"></img>
        <h2 className='text-base pt-8'>Energy</h2>
        <h2 className='text-base'>Account</h2>
        <h2 className='text-base mt-2'><span className='text-lg text-cyan-700 font-bold mr-2'>0.00</span><span className='text-sm'>TRX</span></h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[40%] mt-8' src="https://i.ibb.co/P4x2Z9R/qianbao.png" alt="lirun"></img>
        <h2 className='text-base pt-8'>Financial</h2>
        <h2 className='text-base'>Account</h2>
        <h2 className='text-base mt-2'><span className='text-lg text-cyan-700 font-bold mr-2'>0.00</span><span className='text-sm'>TRX</span></h2>
        </div>
      </div>
    </div>
  )
}

export default AmmountShow
