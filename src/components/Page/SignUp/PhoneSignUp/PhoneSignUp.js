import React, { useContext, useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PhoneSignUp = () => {
    const {setUpRecaptcha} = useContext(AuthContext);
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmObj, setConfirmObj] = useState("");
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getOtp = async (e) =>{
         e.preventDefault();
         if(number === "" || number === undefined){
            setError('Please enter a valid phone number');
            return;
         }
         setError("");
         try{
            const response = await setUpRecaptcha(number);
            console.log(response);
            setConfirmObj(response);
            setFlag(true);
         }catch (error){
            setError(error.message);
         }
         console.log(number);
    }

    const verifyOtp = async (e) =>{
        e.preventDefault();
        console.log(otp);
        if(otp === "" || otp === null) return;
        try{
            setError("");
            await confirmObj.confirm(otp);
            navigate("/userInfo");
        }catch(error){
            setError(error.message);
        }
    }
    return (
        <div className=''>
           <div className='my-56'>
                <div className=" w-full shadow-2xl bg-base-100 py-12 card-body">
                    <h1 className="text-3xl text-center font-bold mb-8">Registration</h1>
                    <form onSubmit={getOtp} style={{display: !flag ? "block" : "none"}}>
                       <PhoneInput
                       className=''
                       defaultCountry="BD"
                       value={number}
                       onChange={setNumber}
                       placeholder="Enter phone number"
                       />
                       <div className='mt-4' id='recaptcha-container'/>
                       <p className='text-error text-center my-4'>{error}</p>
                       <div className='flex justify-end space-x-4 mt-4'>
                         <Link to="/"><button className='px-3 py-1 bg-gray-500 text-white rounded-md'>Cancel</button></Link>
                         <button className='px-3 py-1 bg-blue-500 text-white rounded-md' type='submit'>Send OTP</button>
                       </div>
                    </form>

                    <form onSubmit={verifyOtp} style={{display: flag ? "block" : "none"}}>
                    <div className="form-control">
                            <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div>
                       <div className='mt-4' id='recaptcha-container'/>
                       <p className='text-error text-center my-4'>{error}</p>
                       <div className='flex justify-end space-x-4 mt-4'>
                         <Link to="/"><button className='px-3 py-1 bg-gray-500 text-white rounded-md'>Cancel</button></Link>
                         <button className='px-3 py-1 bg-blue-500 text-white rounded-md' type='submit'>Verify OTP</button>
                       </div>
                    </form>
                    <p className='text-center mt-4'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default PhoneSignUp;