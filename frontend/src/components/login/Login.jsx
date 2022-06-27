import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { loginUser } from '../../Redux/User/Actions/userActions';

import './login.css'

function Login() {
    const [login,setLogin] = useState({email:"",password:""});
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {user,loading,error,isAuthenticated} = useSelector((state)=>state.user)

if (isAuthenticated) {
    navigate("/")
}


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(loginUser(login))
    }
    return (
        <div className="login-card mt-5">
            <div className="login-tilte text-center">
                <h2>LOGIN</h2>
            </div> 
            <form onSubmit={handleSubmit} className=' shadow'>
            <div className="login-cancel text-white text-end  ">
                    <Link to={'/'}><ion-icon name="close-outline"></ion-icon></Link>
                </div>
                <div className="row login-row py-5 ">
                {error ? <p className='text-danger text-center h6'>{error}</p> :""}
                <div className="col-lg-12  my-2   mx-auto text-center">
                        {loading && "Loading...."}
                    </div>
                    <div className="col-lg-12 my-2 mx-auto px-4 text-center">
                        <input className='py-2 px-2 w-100' type="email" placeholder='email'
                         pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$' title='Please Enter Valid Email id' 
                         onChange={((e)=>setLogin({...login,email:e.target.value}))} required/>
                    </div>

                    <div className="col-lg-12 my-2 py-1 px-4  py-1  mx-auto text-center">
                        <input className='py-2 px-2 w-100' type="password" placeholder='password ' 
                        pattern='^[a-zA-Z0-9]{6,10}$' title='Password Have minimum 6 Characters' 
                        onChange={((e)=>setLogin({...login,password:e.target.value}))} required/>
                    </div>

                    <div className="col-lg-10 mx-auto ">
                        <p className='forgot-password '>forgot password?</p>
                    </div>
                    <div className="col-lg-10 mx-auto my-2  text-end ">
                        <input type="submit" className='px-4 py-1 ' placeholder='SIGNUP' value="LOGIN" />
                    </div>
                    <div className="col-lg-10 mx-auto ">
                        <p className='bg-danger login-with-google text-white py-1 text-center'>LOGIN WITH GOOGLE</p>
                    </div>
                    <div className="col-lg-10 mx-auto ">
                        <p className='bg-primary login-with-fb text-white py-1  text-center'>LOGIN WITH FACEBOOK</p>
                    </div>
                    <div className="col-lg-10 mx-auto ">
                        <p className='text-muted navigate-to-register'>Don't have an Account? <span className='text-info '><Link to={'/signup'}>REGISTER</Link></span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login