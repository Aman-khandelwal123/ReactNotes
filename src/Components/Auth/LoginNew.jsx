import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Auth/login.css'
import { toastifyError, toastifySuccess } from '../Commun/AlertMsg';
import { useDispatch } from 'react-redux';
import { EncryptedList, Encrypted_Id_Name } from './Utility';
import axios from 'axios';

const LoginNew = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyUrl, setCompanyUrl] = useState('')

    const [loginDetails, setLoginDetails] = useState({
        "LoginUserID": '',
        "LoginPassword": '',
    })

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
    const handleCatch = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value
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
    useEffect(() => {
        if (sessionStorage.getItem('userId')) navigate('/home')
    }, [])


    if (value) {
        toastifySuccess('succes')
        
    } else {
        toastifyError('invalid');
    }
    
    const LoginSubmit = (e) => {
        e.preventDefault()
        dispatch({  payload: true })
        const values = EncryptedList(JSON.stringify(loginUser));
        const val = { "Data": values }
        axios.post(companyUrl + '/CompanyLogin/GetData_CompanyLogin', val)
            .then(function (response) {
                const result = (response.data)
                toastifySuccess('Login User')
                const userId = Encrypted_Id_Name(result[0].ID, 'UForUserID')
                const LoginUser = Encrypted_Id_Name(result[0].LoginUserID, 'LForLoginID')
                sessionStorage.setItem('userId', userId)
                sessionStorage.setItem('LoginUser', LoginUser)
                setTimeout(() => {
                    navigate('/home')
                    window.location.reload();
                    dispatch({  payload: false })
                }, 1000);
            })
            .catch(function (error) {
                toastifyError(error.response.data.Message)
            });
    }
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log" />
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input type="user" name="user" onChange={(e) => setLoginDetails({ ...loginDetails, "LoginUserID": e.target.value })}className="form-style" placeholder="Your Name" id="user" autoComplete="off" />
                                                        <i class="fa fa-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <i className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"} onClick={togglePassword} style={{ position: 'absolute', top: '39%', right: '-82%' }}></i>
                                                        <input type={passwordShown ? "text" : "password"} name='password' className="form-control" onChange={(e) => setLoginDetails({ ...loginDetails, "LoginPassword": e.target.value })} placeholder="Password" required />
                                                    </div>
                                                    
                                                    <button type="submit" onClick={loginUser} className="btn btn-black">Login</button>
                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                        <i className="fa fa-user" />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                                        <i class="fa fa-envelope"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                        <i className="fa fa-lock" />
                                                    </div>

                                                    <button type="submit" onClick={loginUser} className="btn btn-black">Login</button>
                                                    {/* <a href="#"  type="submit" onClick={loginUser} className="btn mt-4">submit</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew