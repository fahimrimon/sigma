import React from 'react'

function Share() {
  return (
    <div>
      <div className='mt-12 mb-20'>
      <img className='mx-auto' src="https://i.ibb.co/526sgF1/download.png" alt="download"></img>
      <h2 className='mt-4 text-center'><span className='text-blue-500'>Invite code(optional)：</span><span className='font-bold'>282841</span></h2>
      <h2 className='mt-2 font-bold text-center'>Invite your contacts</h2>
      <h2 className='font-bold text-center'>or Friends and Earn Rewards</h2>
      <div className='flex justify-center my-8 space-x-3'>
      <img className='h-12 ' src="https://i.ibb.co/8XkcHDj/twitter.png" alt="twitter"></img>
      <img className='h-12 rounded-full' src="https://i.ibb.co/DCd3gdT/facebook.png" alt="facebook"></img>
      </div>

      <div className='bg-violet-700 py-4 lg:px-8 px-4 rounded-3xl'>
        <h2 className='text-xl text-white font-bold'>Refer and Earn Rewards</h2>
        <h2 className='text-white mb-2'>Share your referral link and start earning</h2>
        <div className='bg-white flex justify-between py-1 pr-1'>
          <h2 className='pl-2 text-sm lg:text-base'>https://www.trx.pet/#/login/register?code=282841</h2>
          <h2 className='bg-teal-700 text-sm w-20 rounded-md text-center text-white'>Copy link</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Share
