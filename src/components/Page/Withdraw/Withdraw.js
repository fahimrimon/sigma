import React from 'react';
import { Link } from 'react-router-dom';


const Withdraw = () => {

    
    const handleLogin = event => {
        event.preventDefault();
        
    }

    return (
        <div className="hero w-full">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-20 ">
                    <h1 className="text-5xl text-center font-bold">Withdraw</h1>
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
                            {/* <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>

                            
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="number" name='email' placeholder="amount" className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment method</span>
                            </label>
                            {/* <input type="text" name='email' placeholder="email" className="input lg:w-[500px] w-[300px]  input-bordered" /> */}
                            <select className="lg:w-[500px] w-[300px] bordered"  name="Bkash" id="cars">
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="DBBL">DBBL</option>
                                <option value="Opai">Opai</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Transaction</span>
                            </label>
                            <input type="password" name='password' placeholder="transaction" className="input input-bordered" />
                           
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="withdraw" />
                           
                        </div>
                    </form>
                    <p className='text-center'>Deposit BDT <Link className='text-orange-600 font-bold' to="/deposit">Deposit</Link> </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Withdraw;