import {React , useState, useEffect} from 'react'

function Hero() {

    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setisLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section className='home section' id="home">
                <div className='home__container'>
                    <div className='home__content'>
                        <h3 className={`fade-in-text ${isLoaded ? 'visible' : ''}`} id="home__title">7<sup>th</sup> Internation conference  <br />
                        <div class="horizontal-line"></div>
                            <h5 className='sub'>Data Engineering and Communication Technology (ICDECT-2024)</h5>  </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
