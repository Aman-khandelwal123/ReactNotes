import { Space } from 'antd'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'
import DataTable from 'react-data-table-component';



const Home = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Message',
            selector: row => row.message,
        },
    ];
    const data = [
        {
            id: 1,
            name: 'Beetlejuice',
            email: 'example@.com',
            message: 'provide details',
        },
        {
            id: 2,
            name: 'Beetlejuice',
            email: 'example@.com',
            message: 'provide details',
        },
        {
            id: 3,
            name: 'Beetlejuice',
            email: 'example@.com',
            message: 'provide details',
        },
    ]
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
            {/* <div className="container"> */}
            <div className="div  p-5" >
                <p style={{ border: '2px solid gray', padding: '15px', }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum porro odit esse, adipisci blanditiis necessitatibus distinctio perferendis enim assumenda facilis? Explicabo maxime culpa velit esse, error saepe ipsum blanditiis hic nesciunt repellendus, ullam sit quo asperiores nostrum aspernatur labore sunt quaerat ad id suscipit repudiandae rem dolore ut ratione. Alias!</p>
                <p style={{ border: '2px solid gray', padding: '15px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum porro odit esse, adipisci blanditiis necessitatibus distinctio perferendis enim assumenda facilis? Explicabo maxime culpa velit esse, error saepe ipsum blanditiis hic nesciunt repellendus, ullam sit quo asperiores nostrum aspernatur labore sunt quaerat ad id suscipit repudiandae rem dolore ut ratione. Alias!</p>
            </div>
            {/* </div> */}
            <div className="row">
                <div className="col-12  mb-3">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        selectableRowsHighlight
                        highlightOnHover
                        dense
                        paginationPerPage={'10'}
                        paginationRowsPerPageOptions={[10, 15]}
                        responsive
                        direction='ltr'
                    />
                </div>
            </div>
               
               {/* chat side */}
            {/* <div className="chat-sidebar-header">
                <div className="d-flex align-items-center">
                    <div className="chat-user-online">
                        <img src="assets/images/avatars/avatar-1.png" width={45} height={45} className="rounded-circle" alt />
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <p className="mb-0">Rachel Zane</p>
                    </div>
                    <div className="dropdown">
                        <div className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded" />
                        </div>
                        <div className="dropdown-menu dropdown-menu-end" style={{}}> <a className="dropdown-item" href="javascript:;">Settings</a>
                            <div className="dropdown-divider" />	<a className="dropdown-item" href="javascript:;">Help &amp; Feedback</a>
                            <a className="dropdown-item" href="javascript:;">Enable Split View Mode</a>
                            <a className="dropdown-item" href="javascript:;">Keyboard Shortcuts</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="javascript:;">Sign Out</a>
                        </div>
                    </div>
                </div>
                <div className="mb-3" />
                <div className="input-group input-group-sm"> <span className="input-group-text bg-transparent"><i className="bx bx-search" /></span>
                    <input type="text" className="form-control" placeholder="People, groups, & messages" /> <span className="input-group-text bg-transparent"><i className="bx bx-dialpad" /></span>
                </div>
                <div className="chat-tab-menu mt-3">
                    <ul className="nav nav-pills nav-justified" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" data-bs-toggle="pill" href="javascript:;" aria-selected="true" role="tab">
                                <div className="font-24"><i className="bx bx-conversation" />
                                </div>
                                <div><small>Chats</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="pill" href="javascript:;" aria-selected="false" tabIndex={-1} role="tab">
                                <div className="font-24"><i className="bx bx-phone" />
                                </div>
                                <div><small>Calls</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="pill" href="javascript:;" aria-selected="false" tabIndex={-1} role="tab">
                                <div className="font-24"><i className="bx bxs-contact" />
                                </div>
                                <div><small>Contacts</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="pill" href="javascript:;" aria-selected="false" tabIndex={-1} role="tab">
                                <div className="font-24"><i className="bx bx-bell" />
                                </div>
                                <div><small>Notifications</small>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}

            <Footer />
        </>
    )
}

export default Home