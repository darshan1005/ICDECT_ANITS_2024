import React, {useEffect} from 'react'
import './About_Conference.css'
import Image1 from '../../assests/banner4.jpg'
import Image2 from '../../assests/spring.png'
import Image3 from '../../assests/icdect2021.jpg'
import Image4 from '../../assests/ssp3.jpg'
import { NavLink } from 'react-router-dom';

// import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const About_Conference = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return <>
        <div id='conference'></div>
            <section className='section container-about' >
                <div className='centered-title'> About Conference</div>
                        <div className='container grid grid_container'>
                            <div className='images'>
                                <img data-aos='fade-right' data-aos-once= 'true' data-aos-duration='2000' src={Image1} className='conference__img' alt='' />
                                <img data-aos='fade-right' data-aos-once= 'true' data-aos-duration='2100' src={Image2} className='conference__img' alt='' />
                                <img data-aos='fade-right' data-aos-once= 'true' data-aos-duration='3000' src={Image3} className='conference__img' alt='' />
                                <img data-aos='fade-right' data-aos-once= 'true' data-aos-duration='3100' src={Image4} className='conference__img' alt='' />
                            </div>
                            <div className="grid_content">
                                <h2 data-aos='fade-left' data-aos-once= 'true' data-aos-duration='2000' className='content__heading'>ICDECT<span><b>2024</b></span></h2>
                                <p data-aos='fade-left' data-aos-once='true' data-aos-duration='2500' className='content__paragraph paragraph'>The objective of this Scopus indexed International Conference on Data Engineering and Communication Technology (ICDECT) 2021 is to present a unified platform for advanced and multi-disciplinary research towards design of smart computing, information systems, electronic systems. The theme focuses on various innovation paradigms in system knowledge, intelligence and sustainability that may be applied to provide realistic solution to variegated problems in society, environment and industries. The scope is also extended towards deployment of emerging computational and knowledge transfer approaches, optimizing solutions in a variety of disciplines of Computer Science and Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Electronics and Instrumentation Engineering. The conference proceedings aim to publish unpublished work pertaining to the topics mentioned below. The conference is scheduled to be held on August 27 & 28, 2021 at Kakatiya Institute of Technology & Science (KITSW), Warangal, Telangana, India</p>
                            <button data-aos='fade-left' data-aos-once= 'true' data-aos-duration='3000' className='readmore'><NavLink to="/Conference">Read more...</NavLink></button>
                            </div>
                    </div>
            </section>
    </>
}

export default About_Conference
