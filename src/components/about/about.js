import React, { Component } from 'react';
import DownArrow from '../../downArrow.svg'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic3.png" alt="" />
            </div>
            <div className="nine columns main-col">
               <div className='line-4'> </div>
               <div className='line-6'> </div>
               <div className='line-5'> </div>
               <div className='line-7'> </div>
               <div className='line-8'> </div>
               <div className='line-10'> </div>
               <div className='line-9'> </div>
               <div className='line-3'> </div>



               <h2>WHO I AM</h2>
               {
                 resumeData.aboutme.split('\n').map(text=>{
                    return <p style={{marginBottom:'1rem'}}>{text}</p>
                 })
               }
               {/* <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div> */}
            </div>
         </div>
         <p className='scrolldown'>
                        <a className='smoothscroll' href='#portfolio'>
                        <img src={DownArrow} alt="down arrow" />
                        </a>
                    </p>
      </section>
    );
  }
}
