import React ,{useEffect}from 'react'
import './Callforpapers.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Callforpapers =()=> {
    const PapersList = [
        {
            id:0,
            papertopic:'✅ 5G Wireless Communications'
        },
        {
            id:1,
            papertopic:'✅ Wireless Sensor Networks'
        },
        {
            id:2,
            papertopic:'✅ Graphics & Image Processing'
        },
        {
            id:3,
            papertopic:'✅ Signal & Image Processing'
        },
         {
            id:4,
            papertopic:'✅ DSP Architectures'
        },
         {
            id:5,
            papertopic:'✅ Micro electronics, Circuits & Systems'
        },
         {
            id:6,
            papertopic:'✅ Low Power VLSI Circuits'
        }, 
        {
            id:7,
            papertopic:'✅ Remote Sensing'
        },
         {
            id:8,
            papertopic:'✅ Electromagnetics'
        },
         {
            id:9,
            papertopic:'✅ Antenna, Smart Antennas'
        },
         {
            id:10,
            papertopic:'✅ Microwave Engineering & Microwave Circuits'
        },
         {
            id:11,
            papertopic:'✅ Embedded Systems'
        },
         {
            id:12,
            papertopic:'✅ Biomedical Image Processing'
        },
         {
            id:13,
            papertopic:'✅ Machine Learning'
        },
         {
            id:14,
            papertopic:'✅ Millimeter Waves'
        },
         {
            id:15,
            papertopic:'✅ Internet Of Things'
        },
         {
            id:16,
            papertopic:'✅ Computer Vision & Pattern Recognition'
        },
         {
            id:17,
            papertopic:'✅ Big Data'
        },
         {
            id:18,
            papertopic:'✅ Quantum Computing'
        },
         {
            id:19,
            papertopic:'✅ Green IT & IT for rural Engineering'
        },
         {
            id:20,
            papertopic:'✅ Mobile Computing & Applications'
        },
        {
            id:21,
            papertopic:'✅ Artificial Intelligence'
        },
         {
            id:22,
            papertopic:'✅ Optimization Algorithms'
        },
         {
            id:23,
            papertopic:'✅ Information Technologies'
        },
         {
            id:24,
            papertopic:'✅ Biomedical Signal Processing'
        }, 
        {
            id:25,
            papertopic:'✅ Broadb& Mobile Communications'
        },
         {
            id:26,
            papertopic:'✅ MIMO Systems'
        },
         {
            id:27,
            papertopic:'✅ Deep Learning for Communication Systems'
        },
         {
            id:28,
            papertopic:'✅ Soft Computing'
        },
         {
            id:29,
            papertopic:'✅ Data Mining'
        },
         {
            id:30,
            papertopic:'✅ Intelligent Autonomous Systems'
        },
         {
            id:31,
            papertopic:'✅ Human Computer Interface'
        },
         {
            id:32,
            papertopic:'✅ Information Security'
        },
         {
            id:33,
            papertopic:'✅ Bioinformatics'
        },
         {
            id:34,
            papertopic:'✅ Wireless Networks & Information Security'
        },
         {
            id:35,
            papertopic:'✅ Network Security'
        },
         {
            id:36,
            papertopic:'✅ Next–generation Networking Technologie'
        },
         {
            id:37,
            papertopic:'✅ Computer Vision & Architecture'
        },
        // 3rd set
         {
            id:38,
            papertopic:'✅ Mobile Security'
        },
        {
            id:39,
            papertopic:'✅ Nano Computing'
        },
         {
            id:40,
            papertopic:'✅ Intelligent Computing in Sensors'
        },
         {
            id:41,
            papertopic:'✅ Intelligent & Computer Vision Instruments'
        },
         {
            id:42,
            papertopic:'✅ Measurement in Robotics'
        }, 
        {
            id:43,
            papertopic:'✅ Computational Nero Science'
        },
         {
            id:44,
            papertopic:'✅ Industrial Automation'
        },
         {
            id:45,
            papertopic:'✅ Analysis & Design Of Control Systems'
        },
         {
            id:46,
            papertopic:'✅ Power System Modeling & Analysis'
        },
         {
            id:47,
            papertopic:'✅ High Voltage Direct Current(HVDC)s'
        },
         {
            id:48,
            papertopic:'✅ Power Electronics & Drives'
        },
         {
            id:49,
            papertopic:'✅ Electric Vehicle Technology'
        },
         {
            id:50,
            papertopic:'✅ Smart Grid'
        },
         {
            id:51,
            papertopic:'✅ Renewable Energy Systems'
        },
         {
            id:52,
            papertopic:'✅ Power System Protection'
        },
         {
            id:53,
            papertopic:'✅ Power Electronics & Drive Control Technics'
        },
         {
            id:54,
            papertopic:'✅ RFID & Cognitive Radio'
        },
         {
            id:55,
            papertopic:'✅ Ad-Hoc Networks'
        },
         {
            id:56,
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
                                <li data-aos='fade-top' data-aos-once='true' data-aos-duration='1000'  className='papertopic__list'>{papertopic}</li>
                            </ul>
                        </div>
                    )
                })
            }
            </div>

            <div data-aos='fade-top' data-aos-once='true' data-aos-duration='1000' className='callforpapers__context'>
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
