import React from 'react'
import './contact.css'

function contact() {
    return (
        <>
            <div id='contact'></div>
            <section className='section contact' >
            <h2 className='section__title'>Contact Us</h2>
            <div className='container-grid grid text-center'>
                <div className='conveners_details'>
                    <h6><i className='uil uil-phone'></i></h6>
                    <h6 className='details__align'><b>Conveners</b></h6>
                    <h6 className='details__align'>Name : xyz</h6>
                    <h6 className='details__align'>Call : 123456789</h6>
                    {/* <h6 className='details__align'>Name : xyz</h6>
                    <h6 className='details__align'>Call : 123456789</h6> */}
                </div>
                 <div className='co-conveners_details'>
                    <h6><i className='uil uil-phone'></i></h6>
                    <h6 className='details__align'><b>Co-conveners</b></h6>
                    <h6 className='details__align'>Name: xyz</h6>
                    <h6 className='details__align'>Call : 123456789</h6>
                    {/* <h6 className='details__align'>Name : xyz</h6>
                    <h6 className='details__align'>Call : 123456789</h6> */}
                </div>
                <div className='email__details'>
                    <h6><i className='uil uil-envelope'></i></h6>
                    <h6 className='details__align'><b>Email</b></h6>
                    <h6 className='details__align'>icdect2023@anits.edu.in</h6>
                    <h6 className='details__align'><b>College Web:</b> www.anits.edu.in</h6>
                </div>
                <div className='location'>
                    <h6><i className='uil uil-location-pin-alt'></i></h6>
                    <h6 className='details__align'><b>Location</b></h6>
                    <h6 className='details__align'>sangivalasa, ANITS - vsp</h6>
                    <h6 className='details__align'>Bheemunipatnam - 531162</h6>
                </div>
            </div>
        </section>
        </>
    )
}

export default contact
