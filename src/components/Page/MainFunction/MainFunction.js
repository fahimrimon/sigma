import React from 'react'

function MainFunction() {
  return (
    <div className='mx-2 mt-4'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/jL1FBMP/chongzhi.png" alt="lirun"></img>
        <h2 className='text-black font-bold mt-1'>Deposit</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/DCVvTSf/tikuan.png" alt="huiyuan"></img>
        <h2 className='text-black font-bold mt-1'>Withdrawal</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/42yJGJd/yaoqing.png" alt="huiyuan"></img>
        <h2 className='text-black font-bold mt-1'>VIP</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/rQCQXGn/tuandui.png" alt="lirun"></img>
        <h2 className='text-black font-bold mt-1'>Team</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/K0qQWsP/app.png" alt="huiyuan"></img>
        <h2 className='text-black font-bold mt-1'>App</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-12 mt-2' src="https://i.ibb.co/kDQW09d/baipishu.png" alt="huiyuan"></img>
        <h2 className='text-black font-bold mt-1'>White paper</h2>
        </div>
      </div>
    </div>
  )
}

export default MainFunction
