import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Await, Link } from 'react-router-dom'
import logo from '../Image/time-to-study.jpg'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'


const About = () => {


    const [myOptions, setMyOptions] = useState([])
    const getDataFromAPI = () => {
        console.log("Options Fetched from API")

        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res.data)
            for (var i = 0; i < res.data.length; i++) {
                myOptions.push(res.data[i].employee_name)
            }
            setMyOptions(myOptions)
        })
    }

    return (
        <>
            <Header />
            <section className="about">
                <div className="about-us-content">
                    <div className="img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>Web Developer &amp; Designer</p>
                        <p>Bachelor of Computer Applications (2019-2022)</p>
                        <div className="btn">
                            <Link to="/Contact">Contact Me</Link>
                            <a href="#">Portfolio</a>
                        </div>
                    </div>
                </div>
            </section>

            <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                    <TextField {...params}
                        onChange={getDataFromAPI}
                        variant="outlined"
                        label="Search Box"
                    />
                )}
            />
            <Footer />
        </>
    )
}

export default About