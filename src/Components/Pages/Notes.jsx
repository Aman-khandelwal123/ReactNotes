import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'

const Notes = () => {
    return (
        <>
            <Header />
            <div className="container-notes">
                <h1 className="heading ">BCA Notes For All Semesters</h1>
                <section className="notes">
                    <Link to={'/Semester'}>
                        <div className="box">
                            <h1>First Sem. Notes</h1>
                            <p>Click here for all the notes of BCA First Sem.</p>
                        </div>
                    </Link>
                    <a href="#">
                        <div className="box">
                            <h1>Second Sem. Notes</h1>
                            <p>Click here for all the notes of BCA Second Sem.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box">
                            <h1>Third Sem. Notes</h1>
                            <p>Click here for all the notes of BCA Third Sem.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box">
                            <h1>Fourth Sem. Notes</h1>
                            <p>Click here for all the notes of BCA Fourth Sem.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box">
                            <h1>Fifth Sem. Notes</h1>
                            <p>Click here for all the notes of BCA Fifth Sem.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box">
                            <h1>Sixth Sem. Notes</h1>
                            <p>Click here for all the notes of BCA Sixth Sem.</p>
                        </div>
                    </a>
                </section>
            </div>
            <Footer />
        </>
        
    )
}

export default Notes