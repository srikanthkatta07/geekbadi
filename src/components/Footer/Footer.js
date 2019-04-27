import React  from 'react'

function Footer() {
    return (
        <footer id="contact-page"> 
            <div className="site-restrict table full-width table-fixed">
                <div className="table-cell vertical-top map">
                    <iframe title="Geekbadi" style={{height: '325px', width: '100%'}}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJB2vmxBstoS-fAlSWFZ5r0ufvrhzVgRo
                            &q=16.829871, 79.474483" allowfullscreen>
                        </iframe>
                </div>
                <div className="table-cell vertical-top contact-details">
                    <address className="address contact-item">
                        <p>8-96/1, Miryalaguda,</p>
                        <p>Miryalaguda(Mandal),</p>
                        <p> Suryapet(District), Telangana,</p>
                        <p>India, 500909.</p>
                    </address>
                    <div className="social-links contact-item">
                        <h4 className="contactus-subtitle">Social links</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/GeekBadi-317202422280139/?modal=admin_todo_tour" target="blank">
                                    <span className="inline-block vertical-middle icon">
                                        <img src="images/facebook.svg" alt="Facebook" title="facebook" />
                                    </span>
                                    <span className="inline-block vertical-middle">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/geekbadi" target="blank">
                                    <span className="inline-block vertical-middle icon">
                                        <img src="images/twitter.svg" alt="Facebook" title="facebook" />
                                    </span>
                                    <span className="inline-block vertical-middle">Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="reach-us contact-item">
                        <h4 className="contactus-subtitle">Contact</h4>
                        <ul>
                            <li>
                                <a href="tel:+91 9177371641">
                                    <span className="inline-block vertical-middle icon">
                                        <img src="images/phone.svg" alt="Phone"/>
                                    </span>
                                    <span className="inline-block vertical-middle">+91 9177371641</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@geekbadi.com">
                                    <span className="inline-block vertical-middle icon">
                                        <img src="images/email.svg" alt="Email"/>
                                    </span>
                                    <span className="inline-block vertical-middle">info@geekbadi.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="table-cell vertical-top contact-form">

                </div>
            </div>
        </footer>
    )
}

export default Footer
