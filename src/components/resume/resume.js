import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id='resume'>
                <div className='resume'>
                    Resume
                    <a href="../images/Kim Vo.pdf" download className='download-resume'></a>
                </div>
                <div className='row work'>
                    <div className='three columns header-col'>
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className='nine columns main-col'>
                        {resumeData.work &&
                            resumeData.work.map(item => {
                                return (
                                    <div className='row item'>
                                        <div className='twelve columns'>
                                            <h3>{item.CompanyName}</h3>
                                            <p className='info'>
                                                {item.specialization}
                                                <span>&bull;</span>{' '}
                                                <em className='date'>
                                                    {item.MonthOfLeaving}{' '}
                                                    {item.YearOfLeaving}
                                                </em>
                                            </p>
                                            <p className='work-descriptions'>
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>

                <div className='row education'>
                    <div className='three columns header-col'>
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className='nine columns main-col'>
                        {resumeData.education &&
                            resumeData.education.map(item => {
                                return (
                                    <div className='row item'>
                                        <div className='twelve columns'>
                                            <h3>{item.UniversityName}</h3>
                                            <p className='info'>
                                                {item.specialization}
                                                <span>&bull;</span>{' '}
                                                <em className='date'>
                                                    {item.MonthOfPassing}{' '}
                                                    {item.YearOfPassing}
                                                </em>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <div className='row skill'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>
                        <div className='nine columns main-col'>
                            <div class='row'></div>
                            <div className='bars'>
                                <ul className='skills'>
                                    <li>
                                        <span className='bar-expand1'></span>
                                        <em>Javascript </em>
                                    </li>
                                    <li>
                                        <span className='bar-expand2'></span>
                                        <em>HTML5 / CSS3</em>
                                    </li>
                                    <li>
                                        <span className='bar-expand3'></span>
                                        <em>C#</em>
                                    </li>
                                    <li>
                                        <span className='bar-expand4'></span>
                                        <em>SQL</em>
                                    </li>
                                    <li>
                                        <span className='bar-expand5'></span>
                                        <em>ReactJS</em>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        );
    }
}
