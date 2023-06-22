import React from 'react';
import { Link } from 'react-router-dom';


const Deposit = () => {

    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const amount = form.amount.value;
        const method = form.method.value;
        const depositNumber = form.depositNumber.value;
        const user = JSON.parse(sessionStorage.getItem('user'))

        const depositInfo ={
            name:user.name,
            phone:user.phone,
            amount,
            method,
            depositNumber
        }
        console.log(depositInfo);
        
        fetch('https://sigma-server-xi.vercel.app/deposit',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(depositInfo)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('saved deposit',data);
            form.reset()
        })
        .catch(e=>console.log(e))



    }

    return (
        <div className="hero w-full">
            <div>
                <div className=" w-full shadow-2xl bg-base-100 py-20 ">
                    <h1 className="text-5xl text-center font-bold">Deposit</h1>
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="number" name='amount' placeholder="amount" className="input lg:w-[500px] w-[300px]  input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment method</span>
                            </label>
                            {/* <input type="text" name='email' placeholder="email" className="input lg:w-[500px] w-[300px]  input-bordered" /> */}
                            <select className="lg:w-[500px] w-[300px] bordered"  name="method" id="cars">
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="DBBL">DBBL</option>
                                <option value="Opai">Opai</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deposit Number</span>
                            </label>
                            <input type="number" name='depositNumber' placeholder="Deposit Number" className="input input-bordered" />
                           
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="deposit" />
                           
                        </div>
                    </form>
                    <p className='text-center'>Withdraw BDT <Link className='text-orange-600 font-bold' to="/withdraw">Withdraw</Link> </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Deposit;