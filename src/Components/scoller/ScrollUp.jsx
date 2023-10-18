import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScollerUp.css'

const ScrollUp = () => {
    const [showButton , setShowButton] = useState(false);

    useEffect(()=>{
        const handelScroll =() =>{
            if (window.scrollY >= 200){
                setShowButton(true);
            }else{
                setShowButton(false);
            } 
        };

        window.addEventListener('scroll', handelScroll);
        return () =>{
            window.removeEventListener('scroll', handelScroll);
        }
    }, [])
    
    return (
            <div className='floating-button' >
                <a href='#anits'><FaArrowUp /></a>
            </div>
    )
}

export default ScrollUp
