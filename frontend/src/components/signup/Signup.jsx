import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../Redux/User/Actions/userActions';

import './signup.css'

function Signup() {

    const [register, setRegister] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [err, setError] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading,error,user,isAuthenticated } = useSelector((state) => state.user);
    
if (isAuthenticated) {
    navigate("/")
}
    // const errHandler = () => {
    //     console.log("slome");
    //     if (register.name !== "" && isNaN(register.name) === false) {
    //         setError({ ...error, name: "this field only contain letters !" })
    //     }
    //     if (register.email !== "" && isNaN(register.email) === false) {
    //         setError({ ...error, email: "this field only contain valid email !" })
    //     }
    //     if (register.password !== register.confirmPassword) {
    //         setError({ ...error, password: "this field only contain valid password !" })
    //         setError({ ...error, confirmPassword: "this field only contain valid password !" })
    //     }

    //     setTimeout(() => {
    //         setError({ ...error, name: "" })
    //         setError({ ...error, email: "" })
    //         setError({ ...error, password: "" })
    //     }, 5000);


    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (register.password === register.confirmPassword) {
            dispatch(registerUser(register));
        } else {
            alert("password error")
        }

    }
    return (
        <div className="login-card my-1">
            <div className="login-tilte text-center mt-5">
                <h2 className='text-muted'>REGISTER</h2>
            </div>

            <form action="" className='login-form' onSubmit={handleSubmit} >
                <div className="login-cancel text-white text-end  ">
                    <Link to={'/'}><ion-icon name="close-outline"></ion-icon></Link>
                </div>
                <div className="row login-row py-5">
                    <div className="col-lg-12  my-2   mx-auto text-center">
                        {loading? <div className="spinner-border text-white mx-auto" role="status"/> :""}
                    </div>

                    <div className="col-lg-12  my-2  px-4  mx-auto text-center">
                        <input className='py-2 px-2 w-100' type="text" placeholder='name'
                         pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+){4,}*$" title='Please Enter Letters Only' 
                         onChange={((e) => setRegister({ ...register, name: e.target.value }))} required />
                        <p className='text-danger'>{err.name}</p>
                    </div>
                    
                    <div className="col-lg-12  my-2 px-4 mx-auto text-center">
                        <input className='py-2 px-2 w-100 ' type="email" placeholder='email' 
                        pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$' title='Please Enter Valid Email id' 
                        onChange={((e) => setRegister({ ...register, email: e.target.value }))} required />
                        <p className='text-danger'>{err.email}</p>
                    </div>

                    <div className="col-lg-12  my-2 px-4 mx-auto text-center">
                        <input className='py-2 px-2 w-100' type="text" placeholder='password' title='Password Have minimum 6 Characters'
                        pattern='^[a-zA-Z0-9]{6,10}$'  onChange={((e) => setRegister({ ...register, password: e.target.value }))} required />
                        <p className='text-danger'>{err.password}</p>
                    </div>

                    <div className="col-lg-12  my-2 px-4 mx-auto text-center">
                        <input className='py-2 px-2 w-100' type="text"  placeholder='confirm password' 
                         onChange={((e) => setRegister({ ...register, confirmPassword: e.target.value }))} required />
                        <p className='text-danger'>{err.confirmPassword}</p>
                    </div>

                    <div className="col-lg-10 mx-auto my-2 text-end ">
                        <input type="submit" className='px-4 py-1' placeholder='SIGNUP' value="SIGNUP" />
                    </div>

                    <div className="col-lg-10 mx-auto ">

                        <p className='text-muted navigate-to-login '>Already have an Account? <span className='text-primary '><Link to={'/login'}>LOGIN</Link></span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup