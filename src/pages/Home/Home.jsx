import React from 'react';
import Banner from './Banner';
import MarathonCampaign from './MarathonCampaign';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


const Home = () => {
    return (
        <div>
            <Banner />
            <MarathonCampaign />
            <AboutUs />
            <ContactUs />
        </div>
    );
};

export default Home;