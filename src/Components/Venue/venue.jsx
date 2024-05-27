import React from 'react'
import './venue.css'
import College from '../../assests/anits.jpg'

function venue() {
    return (
        <>
            <section className='venue section' id="venue">

                <div className='container-grids'>
                        <img className='anits_college' src={College} alt='' title='ANITS'/>
                    <div className='college_loc text-center'>
                        <h2 className='title'>Venue</h2>
                        <a
                            href='https://www.google.com/maps/place/WC9F%2BCGX+ANITS,+Bheemili,+Visakhapatnam,+Andhra+Pradesh+531163/@17.8841729,83.4103418,9z/data=!4m6!3m5!1s0x3a3957c78419fb77:0xdec70d540dbb8b0d!8m2!3d17.9186004!4d83.4238498!16s%2Fg%2F11r7vx59vc'
                            className='map_location'
                        >Anil Neerukonda Institute of Technology and Science(Autonomous)</a>
                        <h6 className='address'>Snagivalasa-531 162, Bhemunipatnam Mandal, Visakhapatnam Distric</h6>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default venue
