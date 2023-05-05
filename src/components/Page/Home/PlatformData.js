import React from 'react'

function PlatformData() {
  return (
    <div className='mx-2 mb-8'>
        <h2 className='text-center text-xl font-bold mb-8 lg:mb-12 mt-8'>Platform data display</h2>
        <div>
      <div className='grid grid-cols-2 gap-4 text-center'>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[60%]' src="https://i.ibb.co/72CnfzM/lirun.png" alt="lirun"></img>
        <h2 className='text-base pt-8'>Accumulated profit</h2>
        <h2 className='text-lg text-cyan-700 font-bold mt-4'>94051374817.12</h2>
        </div>
        <div className='bg-white rounded-lg'>
        <img className='mx-auto h-[60%]' src="https://i.ibb.co/C6nm84C/huiyuan.png" alt="huiyuan"></img>
        <h2 className='text-base pt-8'>Membership</h2>
        <h2 className='text-lg text-cyan-700 font-bold mt-4'>1088075</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PlatformData
