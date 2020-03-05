import React, { Component, useState, useEffect, useRef } from 'react';
import Header from './components/header/header';
import Navbar from './components/header/Navbar';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';


class App extends Component {
    render() {
        ReactGA.initialize('UA-159824915-1');
        ReactGA.pageview('/#home');
        return (
            <div className='App'>
              <Navbar/>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <Header resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <About resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <Resume resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <Portfolio resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <Testimonials resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <ContactUs resumeData={resumeData} />
                </ScrollAnimation>
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default App;
