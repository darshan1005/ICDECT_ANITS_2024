import React from 'react'
import './welcom.css'
import { NavLink } from 'react-router-dom';

const welcome =  ()  => {
    return (
        <>
           <div className='container grid container_note' id="welcome">
                <div className='register-note'>
                    <p className='note'>Welcome ,Get <b>Register</b> for ICDECT 2024 international conference</p>
                 <NavLink to="/Registration" ><button className='register_bnt'>Register</button></NavLink>
             </div>
           </div>
        </>
    )
        
}

export default welcome
