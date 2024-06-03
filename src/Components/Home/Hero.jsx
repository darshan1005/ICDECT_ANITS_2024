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
                        <h1 className={`fade-in-text ${isLoaded ? 'visible' : ''}`} id="home__title">7<sup>th</sup> International conference  </h1>
                        <p className="horizontal-line"></p>
                        <h2 className='sub'>Data Engineering and Communication Technology (ICDECT-2024)</h2>  
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
