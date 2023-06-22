import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  // const {user, logOut} = useContext(AuthContext);
  const [user, setUser] = useState(false)
  // setUser(JSON.parse(sessionStorage.getItem('user')))
 

  const navigate = useNavigate();
  
useEffect(()=>{
  setUser(JSON.parse(sessionStorage.getItem('user')))
},[user])
  const handleLogOut = () =>{


sessionStorage.clear()
setUser(false)
navigate('/');

// setUser(false)
    // // logOut()
    // .then(() =>{})
    // .catch(err => console.log(err));
  }
    return (
        <div className='flex py-[10px] px-[10px] bg-white justify-between sticky top-0'>
           
          <div className='flex'>
          <div className="avatar">
        <div className="w-[28px] h-[28px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img className='w-[30px] h-[30px] rounded-full' src="https://media.licdn.com/dms/image/C560BAQH0FaeOknHxFg/company-logo_200_200/0/1670521590918?e=2147483647&v=beta&t=9T44WdyRvJBkJXI8dm7hhM1H8ukAUmLqozbaPluz2tM" alt="logo" /> 
         </div>
         </div>
        <p className='font-bold text-[15px] ml-[10px]'>{user?user.name:''}</p>

          </div>

            <div className='flex items-center'>
                <div className='border flex items-center justify-center rounded-full px-1'><img className='w-[16px] h-[16px]' src="https://i.ibb.co/LPtrpLH/lang.png" alt="lang" border="0"></img>
                <span className=' px-[10px] text-[12px] text-blue-600'>English</span></div>
                <img className='w-[25px] h-[25px] bg-blue-400 p-1 mx-2 rounded-full' src="https://i.ibb.co/bR2KNML/bell.png" alt="alerm" />
                {/* <img className='w-[25px] h-[25px] p-1 bg-yellow-400 rounded-full ' src="https://i.ibb.co/HrrNLPz/server.png" alt="support" /> */}
                {user? <button className='font-semibold border text-blue-400 rounded-full px-2' onClick={handleLogOut}>logout</button> : ""

                }
            </div>
        </div>
    );
};

export default Header;
