import React from 'react'

function GlobalPartner() {
  const PartnerItem =[
    {
      "id":1,
      "img":"https://trx.pet/static/img/blue/index/huoban1.jpg"
    },
    {
      "id":2,
      "img":"https://trx.pet/static/img/blue/index/huoban2.jpg"
    },
    {
      "id":3,
      "img":"https://trx.pet/static/img/blue/index/huoban3.jpg"
    },
    {
      "id":4,
      "img":"https://trx.pet/static/img/blue/index/huoban4.jpg"
    },
    {
      "id":5,
      "img":"https://trx.pet/static/img/blue/index/huoban5.jpg"
    },
    {
      "id":6,
      "img":"https://trx.pet/static/img/blue/index/huoban6.jpg"
    },
    {
      "id":7,
      "img":"https://trx.pet/static/img/blue/index/huoban7.jpg"
    },
    {
      "id":8,
      "img":"https://trx.pet/static/img/blue/index/huoban8.jpg"
    },
    {
      "id":9,
      "img":"https://trx.pet/static/img/blue/index/huoban9.jpg"
    }
  ]
  return (
    <div className='bg-white mt-4 mx-2 mb-8 rounded-lg'>
      <h2 className='text-center text-xl font-bold pt-4'>Global Partners</h2>
      <div className='grid grid-cols-3 text-center bg-white'>
      {
        PartnerItem.map((item) => <>
        <div>
        <img className='mx-auto h-20 w-60 mt-8' src={item.img} alt="lirun"></img>
        </div>
        </>)
      }
      </div>
      </div>
  )
}

export default GlobalPartner
