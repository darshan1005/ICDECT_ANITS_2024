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

    const teamMembers = [
        { 
            eventKey: "0",
            position: "Chief Patron",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "1",
            position: "Conference Chair",
            name: "Name",
            contact: "Contact"
        },
        
        { 
            eventKey: "2",
            position: "Program Chair",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "3",
            position: "Honorary Chair",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "4",
            position: "Conveners",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "5",
            position: "Co-Convener",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "6",
            position: "Editorial Board",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "7",
            position: " International Advisory Committee",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "8",
            position: "National Advisory Committee",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "9",
            position: "Technical Review Committee",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "10",
            position: "Publicity chair",
            name: "Name",
            contact: "Contact"
        },
        { 
            eventKey: "11",
            position: "Wesite and Publications Committee",
            name: "Name",
            contact: "Contact"
        },

    ];

    return (
        <>
            <div className='section Accordian' id='team'>
                <h2 className='section__title'>ConferenceTeam</h2>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
                {teamMembers.map(member => (
                    <Accordion.Item 
                        key={member.eventKey}
                        data-aos='fade-in' 
                        data-aos-once="true" 
                        data-aos-duration='500' 
                        eventKey={member.eventKey}
                    >
                        <Accordion.Header className='header'>{member.position}</Accordion.Header>
                        <Accordion.Body className='person-details'>
                            <img src={image} alt='demoimage' className='demoimage'/>
                            <div className='details'>
                                <p className='detail'>Name : {member.name}</p>
                                <p className='detail'>Position : {member.position}</p>
                                <p className='detail'>Contact : {member.contact}</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}

export default ConferenceTeam;
