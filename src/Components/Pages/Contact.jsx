import React from 'react'
import Footer from '../Inc/Footer'
import Header from '../Inc/Header'

const Contact = () => {
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
                            <div className="button">
                                <input type="submit" defaultValue="Send Now" />
                            </div>
                            <div className="button">
                                <input type="reset" defaultValue="Reset" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    )
}

export default Contact