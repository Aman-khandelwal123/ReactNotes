import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toastifyError, toastifySuccess } from '../Commun/AlertMsg';
import { EncryptedList, Encrypted_Id_Name } from './Utility';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Mainlogin = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        "LoginUserID": '',
        "LoginPassword": '',
    })
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
    const LoginSubmit = (e) => {
        e.preventDefault()
        // dispatch({ payload: true })
        const values = EncryptedList(JSON.stringify(loginUser));
        const val = { "Data": values }
        // axios.post(companyUrl + '/CompanyLogin/GetData_CompanyLogin', val)
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
                    // dispatch({ payload: false })
                }, 1000);
             
            }) 
            .catch(function (error) {
                toastifyError(error.response.data.Message)
            });
    }
    return (
        <>
            <section className="background-radial-gradient" style={{ width: '100%' }}>
                <div className="container">
                    <div className="row  align-items-center mb-5">
                        {/* <div className=" col-md-6 col-lg-5 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className=" display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                Welcome To
                                <span className='newlogin-span' style={{ color: 'hsl(218, 81%, 75%)' }}> Notes Market</span>
                            </h1>
                           
                        </div> */}


                        <div className="col-md-12 col-lg-12 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
                            <div className="card bg-glass mt-5" style={{ boxShadow: '1px 1px 10px 1px black', width: '380px' }}>
                                <div className="text-center mt-2 name" style={{ marginBottom: '-20px' }}>
                                    Sign in to Continue
                                </div>
                                <div className="card-body  py-5 " >
                                <form onSubmit={LoginSubmit}>
                                        <div className="form-outline mb-4">
                                            {/* <input type="email" id="form3Example3" className="form-control form-login" /> */}
                                            <input type="text" className="form-control form-login" name="userName" placeholder='username'  onChange={(e) => setLoginDetails({ ...loginDetails, "LoginUserID": e.target.value })} />
                                            {/* <label className="form-label pl-2 text-start" htmlFor="form3Example3">UserName</label> */}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <i className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"} onClick={togglePassword} style={{ position: 'absolute', right: '25px', paddingTop: '10px' }}></i>

                                            {/* <input type={passwordShown ? "text" : "password"} id="form3Example4" className="form-control form-login" /> */}
                                            <input className="form-control form-login" type={passwordShown ? "text" : "password"} name="password" placeholder='password' onChange={(e) => setLoginDetails({ ...loginDetails, "LoginPassword": e.target.value })} />
                                            {/* <label className="form-label pl-2 " htmlFor="form3Example4">Password</label > */}
                                        </div>
                                        {/* <div className="form-group mt-2">
                                            <Select
                                            className='text-start'
                                                name='state'
                                                value={companyName.filter((i) => i.value === companyUrl)}
                                                options={companyName}
                                                onChange={handleChange}
                                                isClearable
                                                placeholder="Select State"
                                            />
                                        </div> */}
                                        <button type="submit" onClick={loginUser} className="btn btn-primary btn-block mt-4 ">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainlogin