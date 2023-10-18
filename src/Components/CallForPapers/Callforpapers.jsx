import React ,{useEffect}from 'react'
import './Callforpapers.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Callforpapers =()=> {
    const PapersList = [
        {
            id:1,
            papertopic:'✅ 5G Wireless Communications'
        },
        {
            id:1,
            papertopic:'✅ Wireless Sensor Networks'
        },
        {
            id:1,
            papertopic:'✅ Graphics & Image Processing'
        },
        {
            id:1,
            papertopic:'✅ Signal & Image Processing'
        },
         {
            id:1,
            papertopic:'✅ DSP Architectures'
        },
         {
            id:1,
            papertopic:'✅ Micro electronics, Circuits & Systems'
        },
         {
            id:1,
            papertopic:'✅ Low Power VLSI Circuits'
        }, 
        {
            id:1,
            papertopic:'✅ Remote Sensing'
        },
         {
            id:1,
            papertopic:'✅ Electromagnetics'
        },
         {
            id:1,
            papertopic:'✅ Antenna, Smart Antennas'
        },
         {
            id:1,
            papertopic:'✅ Microwave Engineering & Microwave Circuits'
        },
         {
            id:1,
            papertopic:'✅ Embedded Systems'
        },
         {
            id:1,
            papertopic:'✅ Biomedical Image Processing'
        },
         {
            id:1,
            papertopic:'✅ Machine Learning'
        },
         {
            id:1,
            papertopic:'✅ Millimeter Waves'
        },
         {
            id:1,
            papertopic:'✅ Internet Of Things'
        },
         {
            id:1,
            papertopic:'✅ Computer Vision & Pattern Recognition'
        },
         {
            id:1,
            papertopic:'✅ Big Data'
        },
         {
            id:1,
            papertopic:'✅ Quantum Computing'
        },
         {
            id:1,
            papertopic:'✅ Green IT & IT for rural Engineering'
        },
         {
            id:1,
            papertopic:'✅ Mobile Computing & Applications'
        },
        {
            id:1,
            papertopic:'✅ Artificial Intelligence'
        },
         {
            id:1,
            papertopic:'✅ Optimization Algorithms'
        },
         {
            id:1,
            papertopic:'✅ Information Technologies'
        },
         {
            id:1,
            papertopic:'✅ Biomedical Signal Processing'
        }, 
        {
            id:1,
            papertopic:'✅ Broadb& Mobile Communications'
        },
         {
            id:1,
            papertopic:'✅ MIMO Systems'
        },
         {
            id:1,
            papertopic:'✅ Deep Learning for Communication Systems'
        },
         {
            id:1,
            papertopic:'✅ Soft Computing'
        },
         {
            id:1,
            papertopic:'✅ Data Mining'
        },
         {
            id:1,
            papertopic:'✅ Intelligent Autonomous Systems'
        },
         {
            id:1,
            papertopic:'✅ Human Computer Interface'
        },
         {
            id:1,
            papertopic:'✅ Information Security'
        },
         {
            id:1,
            papertopic:'✅ Bioinformatics'
        },
         {
            id:1,
            papertopic:'✅ Wireless Networks & Information Security'
        },
         {
            id:1,
            papertopic:'✅ Network Security'
        },
         {
            id:1,
            papertopic:'✅ Next–generation Networking Technologie'
        },
         {
            id:1,
            papertopic:'✅ Computer Vision & Architecture'
        },
        // 3rd set
         {
            id:1,
            papertopic:'✅ Mobile Security'
        },
        {
            id:1,
            papertopic:'✅ Nano Computing'
        },
         {
            id:1,
            papertopic:'✅ Intelligent Computing in Sensors'
        },
         {
            id:1,
            papertopic:'✅ Intelligent & Computer Vision Instruments'
        },
         {
            id:1,
            papertopic:'✅ Measurement in Robotics'
        }, 
        {
            id:1,
            papertopic:'✅ Computational Nero Science'
        },
         {
            id:1,
            papertopic:'✅ Industrial Automation'
        },
         {
            id:1,
            papertopic:'✅ Analysis & Design Of Control Systems'
        },
         {
            id:1,
            papertopic:'✅ Power System Modeling & Analysis'
        },
         {
            id:1,
            papertopic:'✅ High Voltage Direct Current(HVDC)s'
        },
         {
            id:1,
            papertopic:'✅ Power Electronics & Drives'
        },
         {
            id:1,
            papertopic:'✅ Electric Vehicle Technology'
        },
         {
            id:1,
            papertopic:'✅ Smart Grid'
        },
         {
            id:1,
            papertopic:'✅ Renewable Energy Systems'
        },
         {
            id:1,
            papertopic:'✅ Power System Protection'
        },
         {
            id:1,
            papertopic:'✅ Power Electronics & Drive Control Technics'
        },
         {
            id:1,
            papertopic:'✅ RFID & Cognitive Radio'
        },
         {
            id:1,
            papertopic:'✅ Ad-Hoc Networks'
        },
         {
            id:1,
            papertopic:'✅ Real Time Operating Systems'
        },
    ]
 
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <>
        <div id='papers'></div>
        <section className='callforpapers section'>
            <h2 className='section__title'>Call For Papers</h2>
            <span className='section__subtitle'>The conference papers will cover 
            disciplines of computer science, Electronics and Communication 
            Engineering, Electrical Engineering and Instrumentation.<br />
            <b>The topics of interest include, but not limited to the following:</b></span>

            <div className='callforpapers__container '>
            {
                PapersList.map(({id, papertopic})=>{
                    return(
                        <div key={id} className='callforpapers__content'>
                            <ul className='papertopic papersTopics'>
                                <li data-aos='fade-top' data-aos-duration='1000'  className='papertopic__list'>{papertopic}</li>
                            </ul>
                        </div>
                    )
                })
            }
            </div>

            <div data-aos='fade-top' data-aos-duration='1000' className='callforpapers__context'>
                <p className='context__lines'>The various intelligent tools like swarm intelligence, Fuzzy logic, Artificial intelligence, 
                Genetic Algorithm, evolutionary algorithms, bio-inspired algorithms could be well applied in 
                different domains for solving various challenging problems</p>
                <a href="#" className='callforpapers__link'>Click here&nbsp;</a><span className='callforpapers__span'><b>for Submission of Papers</b></span><br />
                <a href="#" className='callforpapers__link'>Click here&nbsp;</a><span className='callforpapers__span'><b>to Download Conference Brochure</b></span><br />
                <a href="#" className='callforpapers__link'>Click here&nbsp;</a><span className='callforpapers__span'><b>to view the Conference Poster</b></span><br />
                <a href="#" className='callforpapers__link'>Click here&nbsp;</a><span className='callforpapers__span'><b>to Download call for Special Sessions</b></span><br />
                <b className='callforpapers__span'>Download</b>&nbsp;<a href="#">Registration form</a>&nbsp;<b className='callforpapers__span'>&</b>&nbsp;<a href="#" >Copy right form</a>
            </div>
        </section>
        </>
    )
}

export default Callforpapers
