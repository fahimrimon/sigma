import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
      };

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const phone = form.phone.value;

        const user = {
            name,
            password,
            phone

        }
        // const refer = form.refer.value;

        // if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        //     setError('Password at least 2 Uppercase Character.');
        //     return;
        // }

        if (name.length < 4) {
            setError('Username should be at least 4 characters.');
            return;
        }
        if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;
        }

        if (!(password === confirmPassword)) {
            setError('Your confirm password does not match.');
            return;
        }
        if (phone.length < 11) {
            setError('Please Enter valid phone number');
            return;
        }


        fetch('https://sigma-server-xi.vercel.app/user',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(user)
        
                })
                .then(res => res.json())
                .then(data =>{
                    console.log('saved user',data);
                   if( data.acknowledged){
                    navigate('/home');
                   }
                 
                })


        
        // setError('');

        // createUser(email, password)
        // .then(result =>{
        //     const user = result.user;
        //     console.log(user);
        //     form.reset();
        //     savedUser(name, email, phone, refer)
        //     navigate('/home');
        //     toast('You are successfully signup');
        // })
        // .catch(error => {
        //     console.log(error);
        //     setError(error.message);
        // })

    }

    // const savedUser = (name,email, phone, refer)=>{
    //     const user = {name,email, phone, refer};
    //     fetch('https://sigma-server-xi.vercel.app/user',{
    //         method:'POST',
    //         headers:{'content-type':'application/json'},
    //         body:JSON.stringify(user)

    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log('saved user',data);
    //     })
    // }

    return (
        <div className="hero w-full my-16">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-12 card-body">
                    {/* <h1 className="text-4xl text-center font-bold">SignUp</h1> */}
                    <h1 className="text-4xl text-center font-bold">Update Your Profile</h1>
                    <form onSubmit={handleSignUp} className="">

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" name='name' placeholder="name" required className="input lg:w-[500px] w-[300px]  input-bordered" />
                  </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div> */}
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone number" required className="input input-bordered" />
                           
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" required className="input input-bordered w-full" />
                            <button onClick={togglePasswordVisibility} className='-ml-12 text-sm text-primary'>
                            {showPassword ? 'Hide' : 'Show'}
                            </button>
                            </div>
                           
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div>
                            <input type={showPassword2 ? 'text' : 'password'} name='confirmPassword' placeholder="confirm password" required className="input input-bordered w-full" />
                            <button onClick={togglePasswordVisibility2} className='-ml-12 text-xs font-semibold text-primary'>
                            {showPassword2 ? 'Hide' : 'Show'}
                            </button>
                            </div>
                           
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone number" required className="input input-bordered" />
                           
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Reference</span>
                            </label>
                            <input type="text" name='refer' placeholder="Enter refer code" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-4">
                        <p className='text-error text-center mb-4'>{error}</p>
                            <input className="btn btn-primary" type="submit" value="Submit" />
                            <ToastContainer />
                            {/* <Link className="btn btn-primary" to="/home">SignUp</Link> */}
                        </div>
                    </form>
                    {/* <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/">Login</Link> </p>
                    <div className="divider">OR</div>
                    <Link to='/phoneSignUp'>
                        <button
                        className="bg-green-400 w-full py-2 rounded-full font-semibold text-sm uppercase"
                    >Continue with Phone</button>
                    </Link> */}
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp;