import React from 'react';
import Banner from './Banner';
import MarathonCampaign from './MarathonCampaign';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Carousel from './Carousel';


const Home = () => {
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
            <ContactUs />
        </div>
    );
};

export default Home;