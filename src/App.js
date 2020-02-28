import React, { Component, useState, useEffect, useRef } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <ScrollAnimation animateIn='fadeIn'>
                    <Header resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                >
                    <About resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                >
                    <Resume resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                >
                    <Portfolio resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                >
                    <Testimonials resumeData={resumeData} />
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                >
                    <ContactUs resumeData={resumeData} />
                </ScrollAnimation>
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default App;
