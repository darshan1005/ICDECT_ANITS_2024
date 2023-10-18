import React,{useEffect} from 'react'
import './Conference.css';
import Hero from './Home/Hero';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Conference() {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <section className='section conference'>
        <Hero />
        <div className='section'>
            <h2 data-aos='fade-up' data-aos-duration="1500" className='section__title'>
                About Conference
            </h2>
            <div data-aos='fade-up' data-aos-duration="1500" className='conference__content container'>
                    <p>The objective of this Scopus indexed International Conference on Data 
                    Engineering and Communication Technology (ICDECT) 2024 is to present a 
                    unified platform for advanced and multi-disciplinary research towards 
                    design of smart computing, information systems, electronic systems. The 
                    theme focuses on various innovation paradigms in system knowledge, 
                    intelligence and sustainability that may be applied to provide realistic 
                    solution to variegated problems in society, environment and industries. 
                    The scope is also extended towards deployment of emerging computational 
                    and knowledge transfer approaches, optimizing solutions in a variety of 
                    disciplines of Computer Science and Engineering, Electronics and Communication 
                    Engineering, Electrical and Electronics Engineering, Electronics and 
                    Instrumentation Engineering. The conference proceedings aim to publish 
                    unpublished work pertaining to the topics mentioned below. The conference 
                    is scheduled to be held on "Dates", 2024 at Anil Neerukonda Institute of 
                    Technology and Science (Anits), visakhapatnam, Andhara Pradesh, India</p>
                    <br/><br/>
                    <p>The conference mainly focuses to offer a real opportunity to bring together 
                    scientists of different disciplines, to discuss new issues, to tackle complex 
                    problems and to find advanced solutions breeding new trends in Computational 
                    Science, Electronics and Communication Engineering, Electrical Engineering and 
                    Instrumentation. Conference will also provide a platform for research community 
                    and industry to share the recent developments, and to discuss about the discoveries 
                    in computational intelligence and informatics. 3rd International Conference on Data 
                    Engineering and Communication Technology (ICDECT-2K19), held at Stanley College of 
                    Engineering and Technology for Women, Hyderabad, from 15 to 16 March 2019. 4th 
                    International Conference on Data Engineering and Communication Technology, held at 
                    Kakatiya Institute of Technology and Science, Warangal, from 25 and 26 September 2020. 
                    It features advanced, multidisciplinary research towards the design of smart computing, 
                    information systems, and electronic systems. It also focuses on various innovation 
                    paradigms in system knowledge</p>
                    <p  data-aos='fade-up' data-aos-duration="1500" download='' className='broucher'><a href='referencepapers.com'>Click here&nbsp;</a><b>to Download Conference Brochure</b></p>

            </div>
        </div>
            
        </section>
    )
}

export default Conference
