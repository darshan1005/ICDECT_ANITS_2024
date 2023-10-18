import React, { useEffect } from 'react';
import './Submission.css';
import Hero from './Home/Hero';

import aos from 'aos'
import 'aos/dist/aos.css'


const Submission = ()=> {
    useEffect(()=>{
        aos.init({duration: 2000})
    })
    return (
       <section className='section'>
       <Hero />
            <div className='section text-center'>
                <h2 data-aos='fade-in' data-aos-duration='2000' className='section__title'>Submission</h2>
                <div data-aos='fade-in' data-aos-duration='2000' className='section__content'>Submitted papers 
                should not have been previously published nor be 
                currently under consideration for publication 
                elsewhere. All submissions will be thoroughly 
                peer-reviewed by experts based on originality, 
                significance and clarity. Only papers presenting 
                novel research results or successful innovative 
                applications will be considered for publication 
                in the conference proceedings. Kindly ensure that 
                your paper is formatted as per Springer Template
                (not exceeding 8 pages written in A4 size - download here). 
                The papers can be submitted through easychair system.
                    <div data-aos='fade-in' data-aos-duration='2000' className='left'><a href='#'>Click here&nbsp;</a><b>for submission of paper</b></div>
                </div>
                </div>

       </section>
    )
}


export default Submission
