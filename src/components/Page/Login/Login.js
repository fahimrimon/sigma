import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/home'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const password = form.password.value;
        


        fetch(`https://sigma-server-xi.vercel.app/loginUser?phone=${phone}&password=${password}`)
        .then(res => res.json())
        .then(data =>{
            console.log('saved user',data);
            sessionStorage.setItem('user',JSON.stringify(data))
            navigate('/home');
        //    if( data.acknowledged ==='true'){
        //     navigate('/home');
        //    }
         
        })
        .catch(e=>setError('Phone or password incorrect'))


        // signIn(email, password)
        // .then(result =>{
        //     const user = result.user;
        //     console.log(user);
        //     form.reset();
        //     navigate(from, {replace: true})
        //     toast('Login Successfull');
        // })
        // .catch(error => {
        //     console.log(error);
        //     setError(error.message);
        // })

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div className="hero min-h-screen w-full">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-12 card-body">
                    <h1 className="text-4xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='phone' placeholder="phone" required className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" required className="input input-bordered w-full" />
                            <button onClick={togglePasswordVisibility} className='-ml-12 text-xs text-primary font-semibold'>
                            {showPassword ? 'Hide' : 'Show'}
                            </button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <ToastContainer />
                            {/* <Link className="btn btn-primary" to="/home">Login</Link> */}
                        </div>
                    </form>
                    <p className='text-center'>New to Sigma? <Link className='text-orange-600 font-bold' to="/">Sign Up</Link> </p>
                    <p className='text-error text-center'>{error}</p>
                    {/* <div className="divider">OR</div>
                    <Link to='/phoneSignUp'>
                    <button
                        className="bg-green-400 w-full py-2 rounded-full font-semibold text-sm uppercase"
                    >Sign in with Phone</button>
                        </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Login;