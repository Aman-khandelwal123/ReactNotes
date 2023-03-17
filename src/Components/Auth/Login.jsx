import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import banner from '../Image/Logo.png'

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    // const [value, setvalue] = useState({
    //     "user": '',
    //     "password": ''
    // })

    const [value, setvalue] = useState({
        "user": '',
        "password": '',
    })


    const handleCatch = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = (e) => {
        e.preventDefault();
        console.log(value)
        navigate("/home")
    }
    // Show Password
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
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
                                    <input type="text" name='user' className="form-control" placeholder="User Name" onChange={handleCatch} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <i className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"} onClick={togglePassword} style={{ position: 'absolute', top: '62%', right: '10%' }}></i>
                                    <input type={passwordShown ? "text" : "password"} name='password' className="form-control" placeholder="Password" onChange={handleCatch} />
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