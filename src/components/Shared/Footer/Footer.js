import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex items-center py-[10px] px-[10px] bg-white justify-between sticky bottom-0'>
           <Link to='/'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[20px] h-[20px]'  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="home logo" />
                <p className='text-[13px]'>Home</p>
            </div>
            </Link>
            
            <Link to='/trading'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[20px] h-[20px]'  src="https://w7.pngwing.com/pngs/754/150/png-transparent-financial-planner-business-graph-of-a-function-business-angle-text-people-thumbnail.png" alt="trading logo" />
                <p className='text-[13px]'>Trading</p>
            </div>
            </Link>
            
            <Link to='/invest'>
            <div className='flex flex-col justify-center items-center'>
            <div className="avatar">
        <div className="w-[32px] h-[32px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img className='w-[30px] h-[30px] rounded-full' src="https://media.licdn.com/dms/image/C560BAQH0FaeOknHxFg/company-logo_200_200/0/1670521590918?e=2147483647&v=beta&t=9T44WdyRvJBkJXI8dm7hhM1H8ukAUmLqozbaPluz2tM" alt="logo" /> 
         </div>
         </div>
                <p className='text-[13px]'>Invest</p>
            </div>
            </Link>

           <Link to='/share'>
           <div className='flex flex-col justify-center items-center'>
                <img  className='w-[20px] h-[20px]' src="https://freepngimg.com/download/social_media/62953-icons-media-share-computer-design-social-icon.png" alt="Share icon" />
                <p className='text-[13px]'>Share</p>
            </div>
            </Link>
           
           <Link to='/mine'>
           <div className='flex flex-col justify-center items-center'>
                <img className='w-[20px] h-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCTbivzwipgFl1wPKPLBqNX64UF9aFZ7GUQ&usqp=CAU" alt="human icon" />
                <p className='text-[13px]'>Mine</p>
            </div>
            </Link>
        </div>
    );
};

export default Footer;