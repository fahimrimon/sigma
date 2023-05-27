import React from 'react'
// import Marquee from 'react-fast-marquee'

function Alern() {
  return (
    <div className='bg-blue-100 rounded-2xl mx-2'>
        <div className='flex ml-2 mt-2'>
      <div className='bg-blue-100 p-2'>
          <img className='h-8 lg:w-36 w-52' src="https://i.ibb.co/xsZLX3d/laba.png" alt="laba"></img>
      </div>
      <div>
      {/* <marquee className='bg-blue-100 p-2' speed>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
          </marquee> */}
      </div>
      <div className='bg-cyan-700 p-2 rounded-r-2xl'>
      <img className='w-36 h-8 mr-8' src="https://i.ibb.co/XCjGhnn/right.png" alt="right"></img>
      </div>
    </div>
    </div>
  )
}

export default Alern
