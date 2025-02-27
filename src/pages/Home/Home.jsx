import React, { useEffect } from 'react';
import Banner from './Banner';
import MarathonCampaign from './MarathonCampaign';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Carousel from './Carousel';
import Faq from '../Contact/Faq';
import RaceResults from '../Events/RaceResults';

const Home = () => {
    useEffect(() => {
        document.title = 'Marathon_240'; // Set the title to "Marathon_240"
    }, []); // Empty dependency array means it will run only once when the component mounts

    return (
        <div>
            <section className='w-[90%] mx-auto'>
                <Banner />
            </section>
            <section>
                <Carousel />
            </section>
            <MarathonCampaign />
            <AboutUs />
            <RaceResults/>
            <Faq />
            <ContactUs />
            
        </div>
    );
};

export default Home;
