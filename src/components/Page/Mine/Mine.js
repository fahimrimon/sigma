import React from 'react'

function Mine() {
  const serviceData = [
    {
      "id":1,
      "name":"Team",
      "img":"https://trx.pet/static/img/blue/myself/tuandui.png"
    },
    {
      "id":2,
      "name":"Finance Records",
      "img":"https://trx.pet/static/img/blue/myself/caiwu.png"
    },
    {
      "id":3,
      "name":"Investment Record",
      "img":"https://trx.pet/static/img/blue/myself/dengchu.png"
    },
    {
      "id":4,
      "name":"Transfer to basic",
      "img":"https://trx.pet/static/img/blue/myself/zhuanzhuang.png"
    },
    {
      "id":5,
      "name":"Share",
      "img":"https://trx.pet/static/img/blue/myself/yaoqing.png"
    },
    {
      "id":6,
      "name":"Notification",
      "img":"https://trx.pet/static/img/blue/myself/tongzhi.png"
    },
    {
      "id":7,
      "name":"Modify login password",
      "img":"https://trx.pet/static/img/blue/myself/lpwd.png"
    },
    {
      "id":8,
      "name":"Modify security password",
      "img":"https://trx.pet/static/img/blue/myself/ipwd.png"
    },
    {
      "id":9,
      "name":"Logout",
      "img":"https://trx.pet/static/img/blue/index/dengchu.png"
    }
  ]
  return (
    <div>
      <div className='bg-white mx-2 rounded-md h-44 p-6 mt-3'>
      <div className='bg-cyan-800 rounded-2xl shadow-lg shadow-cyan-800/75 py-4'>
         <div className='flex justify-between items-center text-white'>
            <div className='pl-4 py-8'>
                <div className='items-center'>
                    <h2 className='font-bold text-2xl'>demo@gmail.com</h2>
                </div>
                {/* <h2 className='font-bold'><span className='text-3xl'>10000</span> <span className=''>TRX</span></h2> */}
            </div>
            <div>
                <img className='h-24 w-28' src='https://i.ibb.co/rxdZt2M/icon.png' alt=''></img>
            </div>
         </div>
      </div>
    </div>

    <div className=''>
         <h2 className='bg-teal-800 w-12 text-white rounded-xl mx-auto text-center'>VIP1</h2>
         <h2 className='text-center'><span className='text-teal-600'>Total Balance：</span><span className='text-xl text-teal-800 font-bold'>10000</span> <span className='font-bold'>TRX</span></h2>
    </div>

    <div className='flex lg:space-x-72 space-x-28 justify-center my-8'>
      <div className='flex space-x-2 items-center'>
      <img className='h-10' src="https://i.ibb.co/wd4VZxm/chongzhi-1.png" alt="chongzhi-1"></img>
        <h2>Deposit</h2>
      </div>
      <div className='flex space-x-2 items-center'>
      <img className='h-10' src="https://i.ibb.co/xm79fd9/tikuan-1.png" alt="tikuan-1"></img>
         <h2>Withdrowal</h2>
      </div>
    </div>

    <div>
      <h2 className='text-lg text-black font-bold py-3 pl-3 bg-white'>App Services</h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 text-center pb-12'>
        {
          serviceData.map((data) => (
            <div className='bg-white rounded-lg pb-4'>
                <img className='mx-auto h-12 mt-2' src={data.img} alt="lirun"></img>
                <h2 className='text-black mt-1'>{data.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Mine
