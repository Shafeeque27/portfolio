import React from 'react';
import './index.css';
import Hero from './section/Hero';
import ShowcaseSection from './section/ShowcaseSection';
import Navbar from './components/Navbar';
import LogoSection from './section/LogoSection';
import FeatureCards from './section/FeatureCards';
import ExperienceSection from './section/ExperienceSection';
import TechStack from './section/TechStack';
import Testimonials from './section/Testimonials';
import Contact from './section/Contact';
import Footer from './section/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
