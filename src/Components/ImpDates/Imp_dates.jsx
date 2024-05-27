import React, { useEffect } from 'react'
import './Imp_dates.css'
import Table from 'react-bootstrap/Table'
import aos from 'aos'

const Imp_dates = () => {
    useEffect(()=>{
        aos.init({durtion: 2000})
    })
    return (
        <>
            <div id="dates"></div>
                <h2 className='section__title'>Important Dates</h2>
            <div className='container grid impdates'>
                    <div className='table-div'>
                        <Table striped bordered className='table' responsive="sm">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Deadline for Paper submission</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Paper Acceptance Notification</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Start of Registration with final paper submission</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Close of Registration</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            
        </>
        
    )
}

export default Imp_dates
