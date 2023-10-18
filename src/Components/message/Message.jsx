import React, { useEffect } from 'react'
import './Message.css'

function Message() {
    useEffect(()=>{
        const marqueeElement = document.querySelector('.marquee');

        const stopMarquee = () => {
            marqueeElement.stop();
        }

        const startMarquee = () => {
            marqueeElement.start();
        }

        marqueeElement.addEventListener('mouseover', stopMarquee)
        marqueeElement.addEventListener('mouseout', startMarquee)

        return () => {
            marqueeElement.removeEventListener('mouseover', stopMarquee)
            marqueeElement.removeEventListener('mouseout', startMarquee)
        }
    },[]);
    

    return (

            <div class="marquee-container" id="message">
                <h2 class="marquee-title">Latest News</h2>
                <marquee className="message-text marquee" behavior="loop" scrollamount="20%" width="80%">
                    Key notes address by "Name", "profession", "Education", "university" &nbsp;&nbsp;
                    ||&nbsp;&nbsp; Deadline for paper Submission is "update" to "Date" &nbsp;&nbsp;||
                    &nbsp;&nbsp; ICDECT Conference (2021) is schdules to be held on "Date" &nbsp;&nbsp;||&nbsp;&nbsp;
                    <a href="../icdect2020/index.html" target="_blank">Click here</a>&nbsp;&nbsp;
                    to visit ICDECT 2020 Website and &nbsp;&nbsp;
                    <a href="../icdect2020/gallery.html" target="_blank">Click here</a>&nbsp;&nbsp;
                    American Institute of Physics(AIP), which is Indexed by SCOPUS and WOS. (All books published in the series are submitted for consideration
                    in Web of Science)&nbsp;&nbsp;||&nbsp;&nbsp;
                    <a href="https://www.springer.com/gp/book/9789811600807#aboutAuthors" target="_blank">Click here</a>
                </marquee>
            </div>

    )
}

export default Message
