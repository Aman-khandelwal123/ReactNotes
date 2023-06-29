import React from 'react'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'antd';
import DataTable from 'react-data-table-component';
import { Col, Divider, Row } from 'antd';
import Form from 'react-bootstrap/Form';
const Contact = () => {

    // const columns = [
    //     {
    //         name: 'ActivityDateTime',
    //         selector: (row) => row.ActivityDateTime,
    //         sortable: true
    //     },
    //     {
    //         name: 'PINActivityStatusID',
    //         selector: (row) => row.ActivityStatus,
    //         sortable: true
    //     },
    //     {
    //         name: 'PINActivityRoleID',
    //         selector: (row) => row.ActivityRole,
    //         sortable: true
    //     },
    //     {
    //         name: 'OfficerPINID',
    //         selector: (row) => row.OfficerName,
    //         sortable: true
    //     },
    //     {
    //         name: 'ResourceNumber',
    //         selector: (row) => row.ResourceNumber,
    //         sortable: true
    //     },
    //     {
    //         name: <p className='text-end' style={{ position: 'absolute', top: 17, }}>Action</p>,
    //         cell: row => <>
    //             <Link to={''} className="btn btn-sm bg-green text-white px-1 py-0 mr-1" data-toggle="modal" data-target="#PinModal" >
    //                 <i className="fa fa-edit"></i>
    //             </Link>

    //             <Link to={`#`} onClick={" "} className="btn btn-sm bg-green text-white px-1 py-0 mr-1" data-toggle="modal" data-target="#DeleteModal">
    //                 <i className="fa fa-trash"></i>
    //             </Link>
    //         </>
    //     }
    // ]
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
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 3,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 4,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 5,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 6,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 7,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 8,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 9,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 10,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 11,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 12,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 13,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 14,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 15,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 16,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
        {
            id: 17,
            name: 'Ghostbusters',
            email: 'busters@gmail.com',
            message: 'Login',
        },
    ]
    // const { Text, Link } = Typography;

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };
    return (
        <>
            <Header />

            <div className="container">
                <section className="contact-us mt-5">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fa-solid fa-location-dot" />
                            <div className="topic">Address</div>
                            <div className="text-two">Jaipur,Rajasthan</div>
                        </div>
                        <div className="Phone details">
                            <i className="fa-solid fa-phone" />
                            <div className="topic">Phone</div>
                            <div className="text-one"><a href="tel:8209788323">8209788323</a></div>
                        </div>
                        <div className="Email details">
                            <i className="fa-solid fa-envelope" />
                            <div className="topic">Email</div>
                            {/* <div class="text-two">codingbandhu374@gmail.com</div> */}
                            <div className="text-one">amankhandelwal820@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of queries related this website, you can send me a message
                            from here. It's my pleasure to help you.</p>
                        <form action="" ><input type="hidden" name="form-name" defaultValue="form 1" />
                            <div className="input-box">
                                <input id="name" type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <input id="email" type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea id="message" placeholder="Write a message here" required defaultValue={""} />
                            </div>
                            {/* <div className="button">
                                <input type="submit" defaultValue="Send Now" />
                            </div> */}
                            <Button type="primary">Send Now</Button>
                            <Button type="primary" className='ml-2'>Reset</Button>
                            {/* <Text type="success">Ant Design (success)</Text>
                            <Text type="warning">Ant Design (warning)</Text> */}
                            {/* <div className="button">
                                <input type="reset" defaultValue="Reset" />
                            </div> */}
                        </form>
                        {/* <DoubleRightOutlined /> */}
                    </div>
                </section>
            </div>
            <div className="conatiner mt-2">
                <div className="row px-5">
                    <div className="col-12 mb-3" style={{ backgroundColor: 'black' }}>
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
                        />
                    </div>
                </div>
            </div>
            <div className="col-2">
                <Form.Label htmlFor="exampleColorInput" className=''>Color picker</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                //   style={{width:'5%'}}
                  size="sm"
                />
            </div>

            {/* <Divider orientation="left">Horizontal</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">Responsive</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">Vertical</Divider>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row> */}


            <Footer />

        </>
    )
}

export default Contact