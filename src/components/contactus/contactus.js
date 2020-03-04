import React, { Component, Fragment } from 'react';

const ContactUs = () => {
    return (
        <section id='contact'>
            <div className='contact-info'>
                <h4>Contact Info</h4>
                <p className='address'>
                    Kim Vo
                    <br />
                    kimlongt.vo@gmail.com
                    <br />
                    <span>714.728.9334</span>
                </p>
                <div className='icon-container'>
                    <a href='mailto:kimlongt.vo@gmail.com?Subject=Hello!' className='email'></a>
                    <a href="tel:714-728-9334"className='phone'></a>
                </div>
            </div>
            <div className='section-head'></div>
            <p className='lead'>
                To contact me for any work or suggestions, please fill out the
                form and click submit. <br />
                Please allow 24-hrs for response.{' '}
            </p>

            <div className='row'>
                <div className='form'>
                    <form
                        action='https://formspree.io/kimlongt.vo@gmail.com'
                        method='post'
                        id='contactForm'
                        name='contactForm'
                    >
                        <fieldset>
                            <div>
                                <label htmlFor='contactName'>
                                    Name <span className='required'>*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Your Name'
                                    size='25'
                                    id='contactName'
                                    name='contactName'
                                />
                            </div>
                            <div>
                                <label htmlFor='contactEmail'>
                                    Email <span className='required'>*</span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    size='25'
                                    id='contactEmail'
                                    name='_replyto'
                                />
                            </div>
                            <div>
                                <label htmlFor='contactSubject'>
                                    Subject<span className='required'>*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter A Subject'
                                    size='25'
                                    id='contactSubject'
                                    name='contactSubject'
                                />
                            </div>
                            <div>
                                <label htmlFor='contactMessage'>
                                    Message <span className='required'>*</span>
                                </label>
                                <textarea
                                    cols='10'
                                    placeholder='Send Me Your Message!'
                                    rows='10'
                                    id='contactMessage'
                                    name='body'
                                ></textarea>
                            </div>
                            <div>
                                <button className='submit'>Submit</button>
                                <span id='image-loader'>
                                    <img src='images/loader.gif' alt='' />
                                </span>
                            </div>
                        </fieldset>
                    </form>
                    <div id='message-warning'>Error!</div>
                    <div id='message-success'>
                        <i className='fa fa-check'></i>Your message was sent,
                        thank you!
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
