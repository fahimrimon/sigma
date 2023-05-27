import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link} from 'react-router-dom';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation(); 
    // const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err));

        // const info = {
        //     email,password
        // }
        // console.log(info)
        // const user={
        //     name:'test',
        //     uid:1
        // }
        // // setUser(user)
        // // setLoading(false)
        // navigate(from, {replace: true})

    }

    return (
        <div className="hero w-full my-16">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-12 ">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            {/* <Link className="btn btn-primary" to="/home">Login</Link> */}
                        </div>
                    </form>
                    <p className='text-center'>New to Sigma? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;