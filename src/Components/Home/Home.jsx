import React from 'react';
import './Home.css';
import Message from "../message/Message";
import About_Conference from "../About_conference/About_Conference";
import Callforpapers from "../CallForPapers/Callforpapers";
import Imp_dates from "../ImpDates/Imp_dates";
import ConferenceTeam from "../ConferenceTeam/Conferenceteam"
import Welcome from "../Welcome/welcome";
import Contact from '../Contact/contact';
import Venue from '../Venue/venue';
import Hero from './Hero';


const Home = () => {
    
    return <>
        <section className='section'>
            <Hero />
        </section>
       
        <main>
            <Message />
            <About_Conference />
            <Callforpapers />
            <Imp_dates />
            <ConferenceTeam />
            <Welcome />
            <Contact />
            <Venue />
        </main>
    </>;
};

export default Home;