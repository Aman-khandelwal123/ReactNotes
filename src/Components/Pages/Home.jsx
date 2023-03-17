import { Space } from 'antd'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <div className="bg" />
                <section className="h-text">
                    <marquee behavior="alternate" direction="right" scrollamount={3} >
                        <h1>Welcome to Notes<span>Market</span></h1>
                    </marquee>
                    <p>The best documents shared by our site, organized in one place.</p>
                    <div className="search-bar">
                        <form action="#">
                            <input type="text" placeholder="Search for notes, papers" />
                            <button type="submit" className="search-btn">Search</button>
                        </form>
                    </div>
                </section>
                <section className="course">
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2>BCA</h2>
                                <h4>Bachelor of Computer Application</h4>
                                <Button type="primary" className='ml-2 ' ><Link to={'/Notes'}>For Notes</Link></Button>
                                <br />
                                <Button type="primary" className='ml-2 mt-2' ><Link to={'/home'}>For Papers</Link></Button>
                                <br />
                                <Button type="primary" className='ml-2 mt-2' ><a href='https:///docs.google.com/uc?export=download&id=189DbTz6XP4sfmFdcZsf6ae2-AeVMW_QL'>For
                                    Syllabus</a></Button>
                                {/* <button className="btn1"><Link to={'/Notes'}>For Notes</Link></button> */}
                                {/* <button className="btn2"><Link to='/home'>For Papers</Link></button> */}
                                {/* <button className="btn3"><a href='https:///docs.google.com/uc?export=download&id=189DbTz6XP4sfmFdcZsf6ae2-AeVMW_QL'>For
                                    Syllabus</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2>BBA</h2>
                                <h4> Bachelor of Business Administration</h4>
                                <Button type="primary" className='ml-2 '><Link to=''>For Notes</Link></Button>
                                <br />
                                <Button type="primary" className='ml-2 mt-2'><Link to=''>For Notes</Link></Button>
                                <br />
                                <Button type="primary" className='ml-2 mt-2'><a href="https:///docs.google.com/uc?export=download&id=14sLAI68HRZ5YtNc-_39OT7b14X_P58qc">For
                                    Syllabus</a></Button>
                                <br />
                                {/* <button className="btn1"><a href>For Notes</a></button>
                                <button className="btn2"><a href>For Papers</a></button>
                                <button className="btn3"><a href="https:///docs.google.com/uc?export=download&id=14sLAI68HRZ5YtNc-_39OT7b14X_P58qc">For
                                    Syllabus</a></button> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* for ant design button */}
                {/* <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" >
                        Primary
                    </Button>
                    <Button >Default</Button>
                    <Button type="dashed" >
                        Dashed
                    </Button>
                    <Button disabled >
                        disabled
                    </Button>
                    <Button type="text" >
                        text
                    </Button>
                    <Button type="link" >
                        Link
                    </Button>
                    <Button type="primary">primary</Button>
                </Space> */}
            </div>
            <Footer />
        </>
    )
}

export default Home