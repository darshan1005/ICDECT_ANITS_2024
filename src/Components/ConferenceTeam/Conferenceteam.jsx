import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import './Conferenceteam.css';
import image from '../../assests/male1.jpg';

// import AOS
import aos from 'aos'
import 'aos/dist/aos.css'

const ConferenceTeam = () => {

    useEffect(()=>{
        aos.init({duration: 200})
    })
    return (
        <>
        <div className='section Accordian' id='team'>
            <h2 className='section__title'>ConferenceTeam</h2>
        </div>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="0" >
                <Accordion.Header className='header'>Chief Patron</Accordion.Header>
                <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage'/>
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="1">
                    <Accordion.Header className='header'>Patron</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="2">
                    <Accordion.Header className='header'>Conference Chair</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="3">
                    <Accordion.Header className='header'>Program Chair</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="4">
                    <Accordion.Header className='header'>Honorary Chair</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="5">
                    <Accordion.Header className='header'>Conveners</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="6">
                    <Accordion.Header className='header'>Co-Convener</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="7">
                    <Accordion.Header className='header'>Editorial Board</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="8">
                    <Accordion.Header className='header'>International Advisory Committee</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="9">
                    <Accordion.Header className='header'>National Advisory Committee</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="10">
                    <Accordion.Header className='header'>Technical Review Committee</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="11">
                    <Accordion.Header className='header'>Publicity chair</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
             <Accordion.Item data-aos='fade-in' data-aos-duration='500' eventKey="12">
                    <Accordion.Header className='header'>Wesite and Publications Committee</Accordion.Header>
                    <Accordion.Body className='person-details'>
                    <img src={image} alt='demoimage' className='demoimage' />
                    <div className='details'>
                        <p className='detail'>Name :</p>
                        <p className='detail'>Position :</p>
                        <p className='detail'>Contact :</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    )
}

    

export default ConferenceTeam;
