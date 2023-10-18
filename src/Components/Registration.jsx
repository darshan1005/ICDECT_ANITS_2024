import React,{useEffect} from 'react'
import Hero from './Home/Hero'
import Table from 'react-bootstrap/Table';
import './Registration.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Registration() {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <section className='section'>
            <Hero />
            <div className='section registration'>
                <h2 className='section__title'>Registration</h2>
                <span className='section__subtitle'>
                    To ensure publication of a paper in the Proceedings,
                    at least one author has to register by submitting a normal
                    registration fee within deadline as indicated below.
                </span>
                <div className='col-md-8 table__fees'>

                    <Table striped bordered hover size="sm" data-aos='fade-up' data-aos-duration="1000">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Single paper Amount</th>
                                <th>**Second paper</th>
                                <th>Special session Amount/paper</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UG/PG/Research Scholar</td>
                                <td>-</td>
                                <td rowSpan={3}>-</td>
                                <td rowSpan={3}>-</td>
                            </tr>
                            <tr>
                                <td>Academician</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Industry /R&D</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Foreign Author</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Attendee/Non-author</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div data-aos='fade-up' data-aos-duration="1000" className='table__subtitle'>**Corresponding author should be same for both papers.</div>
                <div className='col-md-8 table__second'>
                    <Table striped bordered hover size="sm" data-aos='fade-up' data-aos-duration="1000">
                        <thead>
                            <tr>
                                <th className='text-center'>REGISTRATION ACCOUNT DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ANITS</td>
                            </tr>
                            <tr>
                                <td>Account No: </td>
                            </tr>
                            <tr>
                                <td>IFSC Code: </td>
                            </tr>
                            <tr>
                                <td>Bank Details</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='links'>
                    <div data-aos='fade-up' data-aos-duration="1000" className='link'><a href='#'>Click here&nbsp;</a><b>to view Springer Paper Template</b></div>
                    <div data-aos='fade-up' data-aos-duration="1000" download='' className='link'><a href='#'>Click here&nbsp;</a><b> to download Registration form</b></div>
                    <div data-aos='fade-up' data-aos-duration="1000" download='' className='link'><a href='#'>Click here&nbsp;</a><b>to download Copy right form</b></div>
                </div>
            </div>
            
        </section>
    )
}

export default Registration
