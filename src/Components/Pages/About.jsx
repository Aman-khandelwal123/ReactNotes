import { Autocomplete, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Await, Link } from 'react-router-dom'
import logo from '../Image/time-to-study.jpg'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'
import { toastifyInfo, toastifySuccess } from '../Commun/AlertMsg'
import { ToastContainer, toast } from 'react-toastify'


const About = () => {
    const notify = () => toast("Wow so easy!");
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
    toastifySuccess('Enter Successfully');
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" style={{ background: "rgba(0,0,0, 0.5)" }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className=" modal-body">
                            <form className>
                                <div className="">
                                    <label htmlFor="addgroupname-input" className="form-label">Group Name</label>
                                    <input id="addgroupname-input" placeholder="Enter Group Name" type="text" className="form-control form-control" />
                                </div>
                                <div className="mt-2">
                                    <label className="form-label">Group Members</label>
                                    <div className="mb-3">
                                        <a className="btn btn-light
                                         btn-sm" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ backgroundColor: '#e6ebf5' }}>
                                            Select Members
                                        </a>
                                    </div>
                                    <div className="collapse" id="collapseExample">
                                        <div className="border card">
                                            <div className="card-header">
                                                <h5 className="font-size-15 mb-0">Contacts</h5>
                                            </div>
                                            <div className="p-2 card-body">
                                                <div data-simplebar="init" style={{ maxHeight: 150, overflowY: 'auto' }}>
                                                    {/* 1 */}
                                                    <div class="p-3 font-weight-bold text-primary">A</div>
                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck1" type="checkbox" className="form-check-input form-check-input" defaultValue="Albert Rodarte" />
                                                                <label htmlFor="memberCheck1" className="form-check-label">Albert Rodarte</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck2" type="checkbox" className="form-check-input form-check-input" defaultValue="Allison Etter" />
                                                                <label htmlFor="memberCheck2" className="form-check-label">Allison Etter</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    {/* 2 */}
                                                    <div class="p-3 font-weight-bold text-primary">B</div>
                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck1" type="checkbox" className="form-check-input form-check-input" defaultValue="Albert Rodarte" />
                                                                <label htmlFor="memberCheck1" className="form-check-label">Albert Rodarte</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck2" type="checkbox" className="form-check-input form-check-input" defaultValue="Allison Etter" disabled checked />
                                                                <label htmlFor="memberCheck2" className="form-check-label">Allison Etter</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    {/* 3 */}
                                                    <div class="p-3 font-weight-bold text-primary">C</div>
                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck1" type="checkbox" className="form-check-input form-check-input" defaultValue="Albert Rodarte" />
                                                                <label htmlFor="memberCheck1" className="form-check-label">Albert Rodarte</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck2" type="checkbox" className="form-check-input form-check-input" defaultValue="Allison Etter" />
                                                                <label htmlFor="memberCheck2" className="form-check-label">Allison Etter</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    {/* 4 */}
                                                    <div class="p-3 font-weight-bold text-primary">D</div>
                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck1" type="checkbox" className="form-check-input form-check-input" defaultValue="Albert Rodarte" />
                                                                <label htmlFor="memberCheck1" className="form-check-label">Albert Rodarte</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input id="memberCheck2" type="checkbox" className="form-check-input form-check-input" defaultValue="Allison Etter" />
                                                                <label htmlFor="memberCheck2" className="form-check-label">Allison Etter</label>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <label for="addgroupdescription-input" class="form-label">Description</label>
                                <textarea class="form-control" id="addgroupdescription-input" rows="2" placeholder="Enter Description"></textarea>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Create Group</button>
                        </div>
                    </div>
                </div>
            </div>
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
                <div>
                    <button onClick={notify}>Notify!</button>
                    <ToastContainer />
                </div>
            <Footer />
        </>
    )
}

export default About