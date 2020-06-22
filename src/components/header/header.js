import React, { Component } from 'react';
import TypingComponent from './TypingComponent';

import DownArrow from '../../downArrow.svg'

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id='home'>
                    <div className='row banner'>
                        <div className='banner-text'>
                            <h1 className='responsive-headline'>
                                KV
                                {/* <TypingComponent /> */}
                            </h1>
                            <h2>KIM VO</h2>
                            <h3>
                                {/* {resumeData.name}{' '} */}
                                {/* {resumeData.roleDescription} */}
                                {resumeData.role}
                            </h3>
                            {/* <hr />
                            <ul className='social'>
                                {resumeData.socialLinks &&
                                    resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a
                                                    href={item.url}
                                                    target='www.linkedin.com/in/kim-vo-dev'
                                                >
                                                    <i
                                                        className={
                                                            item.className
                                                        }
                                                    ></i>
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul> */}
                        </div>
                    </div>

                    <p className='scrolldown'>
                        <a className='smoothscroll' href='#about'>
                            {/* <i className='icon-down-circle'></i> */}
                            {/* <i class="far fa-arrow-alt-circle-down"></i> */}
                            <img src={DownArrow} alt="down arrow" />
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
