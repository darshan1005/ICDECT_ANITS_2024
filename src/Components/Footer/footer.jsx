import React from 'react'
import './footer.css'

function footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__contents'>
                    <div className='icdect'>
                        <div className='About__icdect__logo'>IC
                        <span className='About__icdect__logo logo_part'>DECT</span>
                        <span className='year'>2024</span></div>
                        <p className='about__icdect'>Papers can be uploaded throught the webiste using the <span className='logo_part'href="#">ICDECT2024</span> links</p>
                        <div className='social__media'>
                            <a className="media" href='www.facebook.com' target='_blank' rel='noreferrer'><i className='uil uil-facebook-f'></i></a>
                            <a className="media" href='www.twitter.com' target='_blank' rel='noreferrer'><i className="uil uil-twitter"></i></a>
                            <a className="media" href='www.instagram.con' target='_blank' rel='noreferrer'><i className="uil uil-instagram"></i></a>
                        </div>
                    </div>
                    <div className='Information'>
                        <div className='Information__title'>Information</div>
                        <div className='Information__content'>Call or Email for any conference<br /> related Queries.</div>
                        <div className='Information__content'><b>Email:</b> icdect2024@anits.edu.in</div>
                        <div className='Information__content'><b>Phone:</b> +91 123456789</div>
                    </div>
                    <div className='Address'>
                        <div className='Address__title'>Address For communication</div>
                        <div className='Address__content'>Program chair</div>
                        <div className='Address__content'>Name :</div>
                        <div className='Address__content'>position :</div>
                        <div className='Address__content'>Department :</div>
                        <div className='Address__content'>Mobile Number :</div>
                    </div>
                </div>
                <hr />
                <div className='copyRights text-center' style={{paddingTop: "0.85rem"}}>
                    Dept. of CsD Org. @ICDECT-2024, ANITS | Designed & Developed by Darshan Battula   
                </div>
            </div>    
        </footer>
    )
}

export default footer
