import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <ul className="social-icon">
                    <li><a target="blank" href="https://github.com/login"><i className="fa fa-github" /></a></li>
                    <li><a target="blank" href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin" /></a></li>
                    <li><a target="blank" href="https://www.instagram.com/?hl=en"><i className="fa-brands fa-instagram" /></a>
                    </li>
                    <li><a target="blank" href="https://www.facebook.com/"><i className="fa-brands fa-facebook" /></a></li>
                    <li><a target="blank" href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter" /></a></li>
                </ul>
                <p>© NotesMarket | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer