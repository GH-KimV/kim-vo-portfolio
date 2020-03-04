import React, { Component } from 'react';
export default class Testimonials extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id='testimonials'>
                <div className='text-container'>
                    <div className='row'>
                        <h2>Client &amp; Peer Testimonials</h2>
                        <div className=' flex-container'>
                            <div className='flexslider'>
                                <ul className='slides'>
                                    {resumeData.testimonials &&
                                        resumeData.testimonials.map(item => {
                                            return (
                                                <li>
                                                    <blockquote>
                                                        <div className='header-col'>
                                                            <h1></h1>
                                                        </div>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                        <div className=' header-col'>
                                                            <h2></h2>
                                                        </div>
                                                        <cite>
                                                            {item.name},
                                                            <span>
                                                                {item.position}
                                                            </span>
                                                        </cite>
                                                    </blockquote>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>{' '}
                            {/* div.flexslider ends */}
                        </div>{' '}
                        {/* div.flex-container ends */}
                    </div>{' '}
                    {/* row ends */}
                </div>{' '}
                {/* text-container ends */}
            </section>
        );
    }
}
