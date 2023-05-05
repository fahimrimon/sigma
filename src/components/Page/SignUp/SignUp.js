import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const info = {
            email,password
        }
        console.log(info)

    }

    return (
        <div className="hero w-full">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-20 ">
                    <h1 className="text-5xl text-center font-bold">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp;