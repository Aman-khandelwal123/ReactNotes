import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../Image/Logo.png'
import Select from 'react-select'
const Header = () => {
    const notes = [
        { label: 'BCA', value: 'BCA' },
        { label: 'BBA', value: 'BBA' },
    ];
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <img src={banner} alt="banner" style={{ width: '150px' }} />
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'aliceblue' }}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav text-dark">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/About'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Contact'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Logout</Link>
                        </li>

                    </ul>
                    <form className="col-lg-3">
                        <Select
                            className=''
                            options={notes}
                            isClearable
                            placeholder='Select Notes'
                        />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header