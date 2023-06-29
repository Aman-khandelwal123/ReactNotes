import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../Image/Logo.png'
import Form from 'react-bootstrap/Form';
import { toastifyError, toastifySuccess } from '../Commun/AlertMsg';
const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    // const [value, setvalue] = useState({
    //     "user": '',
    //     "password": '',
    // })
    const [value, setvalue] = useState({
        "user": '',
        "password": '',

    })

    // login user
    // const handleCatch = (e) => {
    //     setvalue({
    //         ...value,
    //         [e.target.name]: e.target.value
    //     });
    // }
    const handleCatch = (e) =>{
        setvalue({
            ...value,
            [e.target.name]:e.target.value
        });
    }
    const loginUser = (e) => {
        e.preventDefault();
        // toastifySuccess('solved'); 
        console.log(value.user)
        navigate('/home')
    }


    // Show Password
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
       
    
    // if (value) {
    //     toastifySuccess('Login Successfully');
    // } else {
    //     toastifyError('Invalid data')
    // }
    return (
        <>
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2 className='text-center'>Login from here to access.</h2>
                        <img src={banner} alt="" className='img-fluid' style={{ width: '500px' }} />
                    </div>
                </div>

                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label className='text-dark'>User Name</label>
                                    <input type="text" name='user' onChange={handleCatch} className="form-control" placeholder="User Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <i className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"} onClick={togglePassword} style={{ position: 'absolute', top: '62%', right: '10%' }}></i>
                                    <input type={passwordShown ? "text" : "password"} name='password' className="form-control" onChange={handleCatch} placeholder="Password" required />
                                </div>
                                <button type="submit" onClick={loginUser} className="btn btn-black">Login</button>
                                {/* <button type="submit" className="btn btn-secondary">Register</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
